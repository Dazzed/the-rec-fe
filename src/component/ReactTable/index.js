import React from 'react';
import styled from 'styled-components';
import Table from 'react-bootstrap/Table';
import { useTable, useExpanded, usePagination } from 'react-table';

const Styles = styled.div`
  button {
    margin: 3px;
  }

  .pagination {
    padding: 0.5rem;
  }
`;

function ReactTable({
  columns,
  data,
  fetchData,
  loading,
  renderRowSubComponent,
  pageCount: controlledPageCount,
}) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    visibleColumns,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    // Get the state from the instance
    state: { expanded, pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
      manualPagination: true,
      pageCount: controlledPageCount,
    },
    useExpanded,
    usePagination
  );

  // Listen for changes in pagination and use the state to fetch our new data
  React.useEffect(() => {
    fetchData({ pageIndex, pageSize });
  }, [fetchData, pageIndex, pageSize]);

  // Render the UI for your table
  return (
    <Styles>
      <Table striped bordered hover size="sm" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              // Use a React.Fragment here so the table markup is still valid
              <React.Fragment {...row.getRowProps()}>
                <tr>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    );
                  })}
                </tr>
                {/*
                    If the row is in an expanded state, render a row with a
                    column that fills the entire length of the table.
                  */}
                {row.isExpanded ? (
                  <tr>
                    <td colSpan={visibleColumns.length}>
                      {/*
                          Inside it, call our renderRowSubComponent function. In reality,
                          you could pass whatever you want as props to
                          a component like this, including the entire
                          table instance. But for this example, we'll just
                          pass the row
                        */}
                      {renderRowSubComponent({ row })}
                    </td>
                  </tr>
                ) : null}
              </React.Fragment>
            );
          })}
          <tr>
            {loading ? (
              <td colSpan="10000">Loading...</td>
            ) : (
              <td colSpan="10000">
                Showing {page.length} of ~{controlledPageCount * pageSize}
                results
              </td>
            )}
          </tr>
        </tbody>
      </Table>

      <div className="pagination">
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        >
          {'<<'}
        </button>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          {'<'}
        </button>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          {'>'}
        </button>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        >
          {'>>'}
        </button>
        <span>
          Page
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
        <span>
          | Go to page:
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: '100px' }}
          />
        </span>
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </Styles>
  );
}

export default ReactTable;
