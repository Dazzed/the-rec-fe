import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import debounce from 'lodash/debounce';
import { ChevronExpand, ChevronContract } from 'react-bootstrap-icons';
import capitalize from 'lodash/capitalize';
import ReactTable from 'component/ReactTable';
import NavBar from 'pages/admin/components/navbar';
import { post, get, deleteReq } from 'lib/request';
import { API_URL, WEB_URL } from 'config/constants';

const Styles = styled.div`
  padding: 1rem;
`;

const SubComponent = styled.div`
  padding: 1rem;
  max-width: 1000px;
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
            {row.isExpanded ? <ChevronContract /> : <ChevronExpand />}
          </span>
        ),
      },
      {
        Header: 'Profile',
        columns: [
          {
            Header: 'Id',
            accessor: 'id',
          },
          {
            Header: 'Name',
            accessor: 'name',
          },
          {
            Header: 'Email',
            accessor: 'email',
          },
        ],
      },
      {
        Header: 'Roles',
        columns: [
          {
            Header: 'Roles',
            accessor: 'roles',
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
  const [pageIndex, setPageIndex] = React.useState(0);
  const [pageSize, setPageSize] = React.useState(10);
  const [searchQuery, setSearchQuery] = React.useState('');

  const addInfluencerAccess = async (userId) => {
    try {
      await post(`${API_URL}/admin/influencers/${userId}`);
      fetchData({ query: searchQuery, pageSize, pageIndex });
    } catch (err) {
      console.error(err);
      const errMsg = (err && err.data && err.data.message) || 'Request failed';
      alert(errMsg);
    }
  };

  const removeInfluencerAccess = async (userId) => {
    try {
      await deleteReq(`${API_URL}/admin/influencers/${userId}`);
      fetchData({ query: searchQuery, pageSize, pageIndex });
    } catch (err) {
      console.error(err);
      const errMsg = (err && err.data && err.data.message) || 'Request failed';
      alert(errMsg);
    }
  };

  const fetchData = React.useCallback(
    async ({ query = searchQuery, pageSize, pageIndex }) => {
      try {
        // Set the loading state
        setLoading(true);
        const result = await get(`${API_URL}/admin/all-users`, {
          params: { q: query, pageIndex: pageIndex + 1, pageSize },
        });

        const data = result.data.map((ele) => {
          const roles = ele.roles || [];
          const roleNames = roles.map((r) => capitalize(r.name));

          return {
            ...ele,
            roles: roleNames.join(', '),
          };
        });

        setData(data);

        setPageCount(result.totalPages);
        setPageIndex(result.pageIndex);
        setPageSize(pageSize);

        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    },
    []
  );

  // Create a function that will render our row sub components
  const renderRowSubComponent = React.useCallback(({ row }) => {
    const isInfluencer =
      row.values.roles.includes('influencer') ||
      row.values.roles.includes('Influencer');

    return (
      <SubComponent>
        {!isInfluencer ? (
          <Button
            variant="primary"
            onClick={() => addInfluencerAccess(row.values.id)}
          >
            Add Influencer Access
          </Button>
        ) : (
          <Button
            variant="warning"
            onClick={() => removeInfluencerAccess(row.values.id)}
          >
            Remove Influencer Access
          </Button>
        )}
      </SubComponent>
    );
  }, []);

  const handleQueryChange = (query) => {
    setSearchQuery(query);
    fetchData({ query, pageSize, pageIndex });
  };

  return (
    <>
      <NavBar
        showSearchQuery
        handleQueryChange={debounce(handleQueryChange, 300)}
      />
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
