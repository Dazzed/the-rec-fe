import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import styled from 'styled-components';
import Head from 'next/head';
import { withRouter } from 'next/router';
import InfiniteScroll from 'react-infinite-scroller';
import isEqual from 'lodash/isEqual';
import remove from 'lodash/remove';

import SearchBarNav from 'component/Header/SearchBarNav';
import ContactUser from 'pages/contacts/component/contactUser';
import * as contactPageActions from 'pages/contacts/actions';

const CommonContainer = styled(Container)`
  padding: 37px 55px !important;
  max-width: 100% !important;
`;
const LoaderSection = styled.div`
  position: fixed;
  top: 50%;
  left: 0;
  right: 0;
`;

class MyContact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: null,
      contactsListData: null,
      hasMoreContacts: false,
      currentPageIndex: 0,
      pageSize: 20,
      searchQuery: '',
    };
  }

  componentDidMount() {
    this.setState(
      {
        hasMoreContacts: false,
        currentPageIndex: 0,
        searchQuery: this.props.router.query.q || '',
      },
      () => this.listContacts()
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.error && this.props.error !== prevProps.error) {
      // toastError(this.props.error);
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let toReturn = null;

    if (
      nextProps.contactsListData &&
      !isEqual(nextProps.contactsListData, prevState.contactsListData)
    ) {
      if (
        prevState.currentPageIndex === 0 &&
        nextProps.contactsListData.pageIndex !== 1
      ) {
        toReturn = Object.assign(toReturn || {}, {
          currentPageIndex: 0,
          hasMoreContacts: true,
        });
      } else {
        toReturn = Object.assign(toReturn || {}, {
          contactsListData: nextProps.contactsListData,
          currentPageIndex: nextProps.contactsListData.pageIndex,
          hasMoreContacts: nextProps.contactsListData.hasMore,
          contacts:
            prevState.currentPageIndex === 0
              ? nextProps.contactsListData.data
              : prevState.contacts.concat(nextProps.contactsListData.data),
        });
      }
    }

    return toReturn;
  }

  listContacts() {
    this.setState(
      {
        hasMoreContacts: false,
      },
      () =>
        this.props.listContacts({
          pageIndex: this.state.currentPageIndex + 1,
          pageSize: this.state.pageSize,
          query: this.state.searchQuery,
        })
    );
  }

  unfollowFriend = (friendId) => {
    this.props.unfollowFriend(friendId);

    this.setState({
      contacts: remove(this.state.contacts, (e) => e.id !== friendId),
    });
  };

  handleQuery = (query) => {
    this.setState(
      {
        searchQuery: query,
        currentPageIndex: 0,
      },
      () => this.listContacts()
    );
  };

  renderContacts() {
    const { contacts, hasMoreContacts } = this.state;

    if (!contacts) {
      return (
        <Row className="mt-5 mb-4 h-100">
          <Col className="mb-3">
            <LoaderSection
              className="loader text-center loader-section"
              key={0}
            >
              <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            </LoaderSection>
          </Col>
        </Row>
      );
    }

    if (contacts.length === 0) {
      return (
        <Row className="mt-5 mb-4">
          <Col className="mb-3">
            <LoaderSection className="text-center">
              No results found.
            </LoaderSection>
          </Col>
        </Row>
      );
    }

    return (
      <InfiniteScroll
        pageStart={0}
        loadMore={() => this.listContacts()}
        hasMore={hasMoreContacts}
        loader={
          <div className="loader text-center loader-section">
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </div>
        }
      >
        <Row className="mt-5 mb-4">
          {contacts.map((contact, i) => (
            <Col lg={4} md={6} className="lg-pr-5 pr-3" key={i}>
              <ContactUser
                key={contact.id}
                contact={contact}
                unfollowFriend={this.unfollowFriend}
              />
            </Col>
          ))}
        </Row>
      </InfiniteScroll>
    );
  }

  render() {
    return (
      <>
        <Head>
          <title>Contacts | The Rec</title>
          <meta property="og:title" content="Contacts | The Rec" key="title" />
        </Head>
        <CommonContainer className="container-fluid">
          <SearchBarNav handleQuery={this.handleQuery} />
          {this.renderContacts()}
        </CommonContainer>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.contacts.error,
    success: state.contacts.success,
    loading: state.contacts.loading,
    contactsListData: state.contacts.contactsListData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(contactPageActions, dispatch);
};

const MyContactContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyContact);

export default withRouter(MyContactContainer);
