import React from 'react';
import styled from 'styled-components';
import Table from 'react-bootstrap/Table';
import { useTable, useExpanded, usePagination } from 'react-table';

const Styles = styled.div`
  margin-top: 50px;
  button {
    margin: 3px;
  }
  table td,
  table th {
    padding: 16px;
  }
  table td {
    color: #000;
  }
  table th {
    color: #747e88;
  }
  .pagination {
    padding: .5rem 0;
    // position: absolute;
    // bottom: 10px;
    // width: 98%;
  }
  .pagination button {
    padding: 0.5rem 0.75rem;
  }
  .pagination button:nth-child(1) {
    margin-left: 0;
  }
  .pagination.button-pagination {
    float: left;
  }
`;
const ButtonPagination = styled.div`
  width: 50%;
  text-align: left;
`;
const SelectNumber = styled.select`
  padding: 0.5rem 0.75rem;
  background: #6c757d;
  color: #fff;
  border-radius: 6px;
  border: none;
`;
const ShowNumber = styled.div`
  width: 50%;
  text-align: right;
`;
const SpanDiv = styled.span`
  margin-left: 12px;
  margin-right: 12px;
  font-size: 16px;
  line-height: 18px;
`;
const InputFieldPage = styled.input`
  padding: 0.5rem 0.75rem;
  margin-left: 12px;
  border-radius: 6px;
  border: 2px solid #dee2e6;
`;
function ReactTable({
  columns,
  hiddenColumns = [],
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
      initialState: { pageIndex: 0, hiddenColumns },
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
        <ButtonPagination>
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
          <SpanDiv>
            Page
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>
          </SpanDiv>
          <SpanDiv>
            | &nbsp;&nbsp;&nbsp;Go to page:
            <InputFieldPage
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
              style={{ width: '100px' }}
            />
          </SpanDiv>
        </ButtonPagination>
        <ShowNumber>
          <SelectNumber
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
          </SelectNumber>
        </ShowNumber>
      </div>
    </Styles>
  );
}

export default ReactTable;
