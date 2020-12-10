import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import Head from 'next/head';
import { withRouter } from 'next/router';
import InfiniteScroll from 'react-infinite-scroller';
import isEqual from 'lodash/isEqual';

import * as dashboardActions from 'pages/dashboard/actions';
import SearchBarNav from 'component/Header/SearchBarNav';
import PeopleToFollow from 'pages/dashboard/component/peopleToFollow';
import DashboardProducts from 'pages/dashboard/component/dashboardProducts';

const CommonContainer = styled(Container)`
  padding: 37px 55px !important;
  max-width: 100% !important;
`;

const LatestTitle = styled.h5`
  font-family: Roboto-Regular;
  font-style: normal;
  font-weight: 300;
  font-size: 26px;
  line-height: 30px;
  color: #000;
`;

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recSuggestions: [],
      friendsSuggestionList: [],
      recsSuggestionListData: null,
      hasMoreRecSuggestions: false,
      currentPageIndex: 0,
      pageSize: 10,
      searchQuery: '',
    };
  }

  componentDidMount() {
    this.setState(
      {
        searchQuery: this.props.router.query.q || '',
      },
      () => this.listRecsSuggestions()
    );
    this.props.listFriendsSuggestions();
  }

  componentDidUpdate(prevProps) {
    if (this.props.error && this.props.error !== prevProps.error) {
      // toastError(this.props.error);
    }

    if (this.props.success && this.props.success !== prevProps.success) {
      this.props.listFriendsSuggestions();
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let toReturn = null;

    if (
      nextProps.recsSuggestionListData &&
      !isEqual(
        nextProps.recsSuggestionListData,
        prevState.recsSuggestionListData
      )
    ) {
      if (
        prevState.currentPageIndex === 0 &&
        nextProps.recsSuggestionListData.pageIndex !== 1
      ) {
        toReturn = Object.assign(toReturn || {}, {
          currentPageIndex: 0,
          hasMoreRecSuggestions: true,
        });
      } else {
        toReturn = Object.assign(toReturn || {}, {
          recsSuggestionListData: nextProps.recsSuggestionListData,
          currentPageIndex: nextProps.recsSuggestionListData.pageIndex,
          hasMoreRecSuggestions: nextProps.recsSuggestionListData.hasMore,
          recSuggestions:
            prevState.currentPageIndex === 0
              ? nextProps.recsSuggestionListData.data
              : prevState.recSuggestions.concat(
                  nextProps.recsSuggestionListData.data
                ),
        });
      }
    }

    if (
      nextProps.friendsSuggestionList &&
      !isEqual(nextProps.friendsSuggestionList, prevState.friendsSuggestionList)
    ) {
      toReturn = Object.assign(toReturn || {}, {
        friendsSuggestionList: nextProps.friendsSuggestionList,
      });
    }

    return toReturn;
  }

  listRecsSuggestions() {
    this.setState(
      {
        hasMoreRecSuggestions: false,
      },
      () =>
        this.props.listRecsSuggestions({
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
      () => this.listRecsSuggestions()
    );
  };

  render() {
    const {
      recSuggestions,
      hasMoreRecSuggestions,
      friendsSuggestionList,
    } = this.state;

    return (
      <>
        <Head>
          <title>Dashboard | The Rec</title>
          <meta property="og:title" content="Dashboard | The Rec" key="title" />
        </Head>
        <CommonContainer className="container-fluid">
          <SearchBarNav />
          <Row>
            <Col lg={9}>
              <Row>
                <Col className="mb-4 mt-4">
                  <LatestTitle>Latest</LatestTitle>
                </Col>
              </Row>
              <InfiniteScroll
                pageStart={0}
                loadMore={() => this.listRecsSuggestions()}
                hasMore={hasMoreRecSuggestions}
                loader={
                  <div className="loader text-center" key={0}>
                    Loading ...
                  </div>
                }
              >
                <Row className="mt-5 mb-4">
                  {recSuggestions.map((suggestion, i) => (
                    <Col
                      key={`${suggestion.user.id}_${suggestion.product.id}_${i}`}
                      lg={3}
                      md={4}
                      sm={6}
                      xs={12}
                    >
                      <DashboardProducts suggestion={suggestion} />
                    </Col>
                  ))}
                </Row>
              </InfiniteScroll>
            </Col>
            <Col lg={3}>
              <PeopleToFollow suggestions={friendsSuggestionList} />
            </Col>
          </Row>
        </CommonContainer>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.dashboard.error,
    success: state.dashboard.success,
    loading: state.dashboard.loading,
    recsSuggestionListData: state.dashboard.recsSuggestionListData,
    friendsSuggestionList: state.dashboard.friendsSuggestionList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(dashboardActions, dispatch);
};

const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

export default withRouter(DashboardContainer);
