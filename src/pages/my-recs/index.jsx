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
.loader-section {
  position: fixed;
  top: 50%;
  left: 0;
  right: 0;
}`;
class MyRecs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      myRecsList: [],
      myRecsListData: null,
      hasMoreRecords: false,
      currentPageIndex: 0,
      pageSize: 10,
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

  render() {
    const { myRecsList, hasMoreRecords } = this.state;
    return (
      <>
        <Head>
          <title>My Recs | The Rec</title>
          <meta property="og:title" content="My Recs | The Rec" key="title" />
        </Head>
        <CommonContainer className="container-fluid">
          <SearchBarNav handleQuery={this.handleQuery} />

          <InfiniteScroll
            pageStart={0}
            loadMore={() => this.listMyRecs()}
            hasMore={hasMoreRecords}
            loader={
              <LoaderSection>
                <div className="loader text-center loader-section" key={0}>
                  <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                </div>
              </LoaderSection>
            }
          >
            <Row className="mt-lg-5 mb-lg-5 mb-4 mt-4">
              {myRecsList.map((rec) => (
                <Col key={rec.id} lg={2} md={4} sm={6} xs={12} className="mb-3">
                  <MyRec rec={rec} />
                </Col>
              ))}
            </Row>
          </InfiniteScroll>
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(myRecsPagePageActions, dispatch);
};

const MyRecsContainer = connect(mapStateToProps, mapDispatchToProps)(MyRecs);

export default withRouter(MyRecsContainer);
