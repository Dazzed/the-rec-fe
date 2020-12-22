import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import styled from 'styled-components';
import Head from 'next/head';
import { withRouter } from 'next/router';
import InfiniteScroll from 'react-infinite-scroller';
import isEqual from 'lodash/isEqual';

import * as myRecsPagePageActions from 'pages/my-recs/actions';
import SearchBarNav from 'component/Header/SearchBarNav';
import MyRec from 'pages/my-recs/component/myRec';

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

class MyRecs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      myRecsList: null,
      myRecsListData: null,
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
      () => this.listMyRecs()
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
        () => this.listMyRecs()
      );
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let toReturn = null;

    if (
      nextProps.myRecsListData &&
      !isEqual(nextProps.myRecsListData, prevState.myRecsListData)
    ) {
      if (
        prevState.currentPageIndex === 0 &&
        nextProps.myRecsListData.pageIndex !== 1
      ) {
        toReturn = Object.assign(toReturn || {}, {
          currentPageIndex: 0,
          hasMoreRecords: true,
        });
      } else {
        toReturn = Object.assign(toReturn || {}, {
          myRecsListData: nextProps.myRecsListData,
          currentPageIndex: nextProps.myRecsListData.pageIndex,
          hasMoreRecords: nextProps.myRecsListData.hasMore,
          myRecsList:
            prevState.currentPageIndex === 0
              ? nextProps.myRecsListData.data
              : prevState.myRecsList.concat(nextProps.myRecsListData.data),
        });
      }
    }

    return toReturn;
  }

  listMyRecs() {
    this.setState(
      {
        hasMoreRecords: false,
      },
      () =>
        this.props.listMyRecs({
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
      () => this.listMyRecs()
    );
  };

  renderMyRecs() {
    const { myRecsList, hasMoreRecords } = this.state;

    if (!myRecsList) {
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

    if (myRecsList.length === 0) {
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
        loadMore={() => this.listMyRecs()}
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
          {myRecsList.map((rec) => (
            <Col key={rec.id} lg={2} md={4} sm={6} xs={12} className="mb-3">
              <MyRec rec={rec} deleteMyRec={this.props.deleteMyRec} />
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

          {this.renderMyRecs()}
        </CommonContainer>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.myRecs.error,
    success: state.myRecs.success,
    myRecsListData: state.myRecs.myRecsListData,
    deleteRecSuccess: state.myRecs.deleteRecSuccess,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(myRecsPagePageActions, dispatch);
};

const MyRecsContainer = connect(mapStateToProps, mapDispatchToProps)(MyRecs);

export default withRouter(MyRecsContainer);
