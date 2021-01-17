import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import styled from 'styled-components';
import Head from 'next/head';
import { withRouter } from 'next/router';
import InfiniteScroll from 'react-infinite-scroller';
import isEqual from 'lodash/isEqual';

import * as myTagsPagePageActions from 'pages/my-tags/actions';
import SearchBarNav from 'component/Header/SearchBarNav';
import MyTag from 'pages/my-tags/component/myTag';

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

class MyTags extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      myTagsList: null,
      myTagsListData: null,
      hasMoreRecords: false,
      currentPageIndex: 0,
      pageSize: 20,
      searchQuery: '',
    };
  }

  componentDidMount() {
    this.setState(
      {
        hasMoreRecords: false,
        currentPageIndex: 0,
        searchQuery: this.props.router.query.q || '',
      },
      () => this.listMyTags()
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.error && this.props.error !== prevProps.error) {
      // toastError(this.props.error);
    }

    if (
      this.props.deleteRecSuccess &&
      this.props.deleteRecSuccess !== prevProps.deleteRecSuccess
    ) {
      this.setState(
        {
          hasMoreRecords: false,
          currentPageIndex: 0,
          searchQuery: this.props.router.query.q || '',
        },
        () => this.listMyTags()
      );
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let toReturn = null;

    if (
      nextProps.myTagsListData &&
      !isEqual(nextProps.myTagsListData, prevState.myTagsListData)
    ) {
      if (
        prevState.currentPageIndex === 0 &&
        nextProps.myTagsListData.pageIndex !== 1
      ) {
        toReturn = Object.assign(toReturn || {}, {
          currentPageIndex: 0,
          hasMoreRecords: true,
        });
      } else {
        toReturn = Object.assign(toReturn || {}, {
          myTagsListData: nextProps.myTagsListData,
          currentPageIndex: nextProps.myTagsListData.pageIndex,
          hasMoreRecords: nextProps.myTagsListData.hasMore,
          myTagsList:
            prevState.currentPageIndex === 0
              ? nextProps.myTagsListData.data
              : prevState.myTagsList.concat(nextProps.myTagsListData.data),
        });
      }
    }

    return toReturn;
  }

  listMyTags() {
    this.setState(
      {
        hasMoreRecords: false,
      },
      () =>
        this.props.listMyTags({
          pageIndex: this.state.currentPageIndex + 1,
          pageSize: this.state.pageSize,
          query: this.state.searchQuery,
        })
    );
  }

  handleQuery = (query) => {
    this.setState(
      {
        searchQuery: query,
        currentPageIndex: 0,
      },
      () => this.listMyTags()
    );
  };

  renderMyTags() {
    const { myTagsList, hasMoreRecords } = this.state;

    if (!myTagsList) {
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

    if (myTagsList.length === 0) {
      return (
        <Row className="mt-5 mb-4 h-100">
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
        loadMore={() => this.listMyTags()}
        hasMore={hasMoreRecords}
        loader={
          <div className="loader text-center" key={0}>
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </div>
        }
      >
        <Row className="mt-lg-5 mb-lg-5 mb-4 mt-4">
          {myTagsList.map((rec) => (
            <Col key={rec.id} lg={2} md={4} sm={6} xs={12} className="mb-3">
              <MyTag rec={rec} deleteMyTag={this.props.deleteMyTag} />
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
          <title>My Tags | Get Tag</title>
          <meta property="og:title" content="My Tags | Get Tag" key="title" />
        </Head>
        <CommonContainer className="container-fluid">
          <SearchBarNav handleQuery={this.handleQuery} />

          {this.renderMyTags()}
        </CommonContainer>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.myTags.error,
    success: state.myTags.success,
    myTagsListData: state.myTags.myTagsListData,
    deleteRecSuccess: state.myTags.deleteRecSuccess,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(myTagsPagePageActions, dispatch);
};

const MyTagsContainer = connect(mapStateToProps, mapDispatchToProps)(MyTags);

export default withRouter(MyTagsContainer);
