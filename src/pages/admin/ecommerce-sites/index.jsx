import React from 'react';
import { Button, Nav } from 'react-bootstrap';
import styled from 'styled-components';
import debounce from 'lodash/debounce';
import {
  PlusCircleFill,
  ChevronExpand,
  ChevronContract,
} from 'react-bootstrap-icons';
import ReactTable from 'component/ReactTable';
import NavBar from 'pages/admin/components/navbar';
import EditForm from 'pages/admin/ecommerce-sites/editForm';
import CreateForm from 'pages/admin/ecommerce-sites/createForm';
import { post, get, deleteReq, patch } from 'lib/request';
import { API_URL, WEB_URL } from 'config/constants';

const Styles = styled.div`
  padding: 1rem;
`;

const SubComponent = styled.div`
  padding: 1rem;
  max-width: 1000px;
`;

function App() {
  // We'll start our table without any data
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [pageCount, setPageCount] = React.useState(0);
  const [pageIndex, setPageIndex] = React.useState(0);
  const [pageSize, setPageSize] = React.useState(10);
  const [showEdit, setEditForm] = React.useState(false);
  const [showCreate, setCreateForm] = React.useState(false);
  const [selectedProductId, selectProductId] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');

  const columns = React.useMemo(
    () => [
      {
        // Make an expander cell
        Header: () => (
          <Button variant="primary" onClick={() => toggleCreateModal()}>
            Create <PlusCircleFill />
          </Button>
        ),
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
        Header: 'Info',
        columns: [
          {
            Header: 'Id',
            accessor: 'id',
          },
          {
            Header: 'Hostname',
            accessor: 'hostname',
          },
        ],
      },
    ],
    []
  );

  const toggleEditModal = (values) => {
    selectProductId(values ? values.id : null);
    setEditForm(!showEdit);
  };
  const toggleCreateModal = (values) => {
    setCreateForm(!showCreate);
  };
  const createProduct = async (values) => {
    try {
      await post(`${API_URL}/ecommerce-sites`, values);
      toggleCreateModal();
      fetchData({ query: searchQuery, pageSize, pageIndex });
    } catch (error) {
      console.log(error);
    }
  };
  const editProduct = async (values) => {
    try {
      await patch(`${API_URL}/ecommerce-sites/${selectedProductId}`, values);
      toggleEditModal();
      fetchData({ query: searchQuery, pageSize, pageIndex });
    } catch (error) {
      console.log(error);
    }
  };
  const deleteProduct = async (productId) => {
    try {
      await deleteReq(`${API_URL}/ecommerce-sites/${productId}`);
      fetchData({ query: searchQuery, pageSize, pageIndex });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchData = React.useCallback(
    async ({ query = searchQuery, pageSize, pageIndex }) => {
      try {
        // Set the loading state
        setLoading(true);
        const result = await get(`${API_URL}/ecommerce-sites`, {
          params: { q: query, pageIndex: pageIndex + 1, pageSize },
        });

        const data = result.data;

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
    return (
      <SubComponent>
        <pre>
          <code>{JSON.stringify(row.values, null, 2)}</code>
        </pre>
        <Button variant="primary" onClick={() => toggleEditModal(row.values)}>
          Edit
        </Button>
        <Button variant="danger" onClick={() => deleteProduct(row.values.id)}>
          Delete
        </Button>
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
      <EditForm
        show={showEdit}
        handleClose={toggleEditModal}
        product={data.find((e) => e.id === selectedProductId)}
        editProduct={editProduct}
      />
      <CreateForm
        show={showCreate}
        handleClose={toggleCreateModal}
        createProduct={createProduct}
      />
    </>
  );
}

export default App;
