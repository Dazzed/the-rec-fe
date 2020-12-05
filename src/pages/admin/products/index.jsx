import React from 'react';
import { Button, Nav } from 'react-bootstrap';
import styled from 'styled-components';
import capitalize from 'lodash/capitalize';
import ReactTable from '../../../component/ReactTable';
import NavBar from '../components/navbar';
import { post, get, deleteReq } from '../../../lib/request';
import { API_URL, WEB_URL } from '../../../config/constants';

const Styles = styled.div`
  padding: 1rem;
`;

const SubComponent = styled.div`
  padding: 1rem;
`;

function App() {
  const columns = React.useMemo(
    () => [
      {
        // Make an expander cell
        Header: () => null, // No header
        id: 'expander', // It needs an ID
        Cell: ({ row }) => (
          // Use Cell to render an expander for each row.
          // We can use the getToggleRowExpandedProps prop-getter
          // to build the expander.
          <span {...row.getToggleRowExpandedProps()}>
            {row.isExpanded ? '👇' : '👉'}
          </span>
        ),
      },
      {
        Header: 'Info',
        columns: [
          {
            Header: 'Id',
            accessor: 'id',
          },
          {
            Header: 'Title',
            accessor: 'title',
          },
          {
            Header: 'Price',
            accessor: 'price',
          },
          {
            Header: 'Category',
            accessor: 'category',
          },
        ],
      },
    ],
    []
  );

  // We'll start our table without any data
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [pageCount, setPageCount] = React.useState(0);

  const fetchData = React.useCallback(async ({ pageSize, pageIndex }) => {
    try {
      // Set the loading state
      setLoading(true);
      const result = await get(`${API_URL}/products`, {
        params: {},
      });

      const data = result.data.map((e) => ({
        ...e,
        category: e.category.name,
      }));

      setData(data);

      // Your server could send back total page count.
      // For now we'll just fake it, too
      setPageCount(Math.ceil(data.length / pageSize));

      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }, []);

  // Create a function that will render our row sub components
  const renderRowSubComponent = React.useCallback(({ row }) => {
    return <SubComponent>{JSON.stringify(row.values)}</SubComponent>;
  }, []);

  return (
    <>
      <NavBar />
      <Styles>
        <ReactTable
          columns={columns}
          data={data}
          fetchData={fetchData}
          loading={loading}
          pageCount={pageCount}
          renderRowSubComponent={renderRowSubComponent}
        />
      </Styles>
    </>
  );
}

export default App;
