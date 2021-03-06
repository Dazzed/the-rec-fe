import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import styled from 'styled-components';
import Head from 'next/head';
import { withRouter } from 'next/router';
import InfiniteScroll from 'react-infinite-scroller';
import isEqual from 'lodash/isEqual';

import * as dashboardActions from 'pages/dashboard/actions';
import SearchBarNav from 'component/Header/SearchBarNav';
import PeopleToFollow from 'pages/dashboard/component/peopleToFollow';
import DashboardProducts from 'pages/dashboard/component/dashboardProducts';
import CategoryList from 'component/CategoryList';
import { toast } from 'react-toastify';

const CommonContainer = styled(Container)`
  padding: 11px 55px 0 !important;
  max-width: 100% !important;
`;
const ContainerFluid = styled.div`
  padding: 0 15px;
  max-width: 100%;
  background-color: #e6f6fd;
`;
const LatestTitle = styled.h5`
  font-family: Roboto-Regular;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 28px;
  color: #000;
`;
const LoaderSection = styled.div`
  font-family: Roboto-Regular;
  font-size: 16px;
  line-height: 18px;
  font-weight: normal;
  font-style: normal;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recSuggestions: null,
      friendsSuggestionList: null,
      recsSuggestionListData: null,
      hasMoreRecSuggestions: false,
      currentPageIndex: 0,
      pageSize: 20,
      searchQuery: '',
      categoryQuery: '',
    };
  }

  componentDidMount() {
    this.setState(
      {
        hasMoreRecSuggestions: false,
        currentPageIndex: 0,
        searchQuery: this.props.router.query.q || '',
        categoryQuery: this.props.router.query.category || '',
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

    if (
      (this.props.followFriendSuccess &&
        this.props.followFriendSuccess !== prevProps.followFriendSuccess) ||
      (this.props.addToRecSuccess &&
        this.props.addToRecSuccess !== prevProps.addToRecSuccess)
    ) {
      this.setState(
        {
          hasMoreRecSuggestions: false,
          currentPageIndex: 0,
          searchQuery: this.props.router.query.q || '',
        },
        () => this.listRecsSuggestions()
      );

      toast.success('Successfully added to you Tags');
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
          category: this.state.categoryQuery,
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

  selectCategoryFilter = (val) => {
    this.setState(
      {
        categoryQuery: val,
        currentPageIndex: 0,
      },
      () => this.listRecsSuggestions()
    );
  };

  renderRecSuggestions() {
    const { recSuggestions, hasMoreRecSuggestions } = this.state;

    if (!recSuggestions) {
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

    if (recSuggestions.length === 0) {
      return (
        <Row className="mt-5 mb-4 position-relative">
          <Col className="mb-3">
            <LoaderSection className="text-center">
              No suggestions found.
            </LoaderSection>
          </Col>
        </Row>
      );
    }

    return (
      <InfiniteScroll
        pageStart={0}
        loadMore={() => this.listRecsSuggestions()}
        hasMore={hasMoreRecSuggestions}
        loader={
          <div className="loader text-center loader-section" key={0}>
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </div>
        }
      >
        <Row className="mt-0 mb-4">
          {recSuggestions.map((suggestion, i) => (
            <Col
              key={`${suggestion.user.id}_${suggestion.product.id}_${i}`}
              lg={3}
              md={4}
              sm={6}
              xs={12}
              className="mb-3"
            >
              <DashboardProducts
                suggestion={suggestion}
                addToMyRec={() => this.props.addToMyRec(suggestion.product.id)}
              />
            </Col>
          ))}
        </Row>
      </InfiniteScroll>
    );
  }

  render() {
    const { friendsSuggestionList, categoryQuery } = this.state;

    return (
      <>
        <Head>
          <title>Dashboard | Get Tag</title>
          <meta property="og:title" content="Dashboard | Get Tag" key="title" />
        </Head>
        <CommonContainer>
          <SearchBarNav handleQuery={this.handleQuery} />
        </CommonContainer>
        <ContainerFluid className="mb-0 mt-2">
          <Row>
            <Col lg={12}>
              <CategoryList
                categoryQuery={categoryQuery}
                onSelect={this.selectCategoryFilter}
              />
            </Col>
          </Row>
        </ContainerFluid>
        <CommonContainer className="container-fluid">
          <Row>
            <Col lg={9}>
              {/* <Row>
                <Col lg={9} className="mb-4 mt-4">
                  <CategoryList
                    categoryQuery={categoryQuery}
                    onSelect={this.selectCategoryFilter}
                  />
                </Col>
              </Row> */}
              <Row>
                <Col className="mb-4 mt-4">
                  <LatestTitle>LATEST TAGS</LatestTitle>
                </Col>
              </Row>
              {this.renderRecSuggestions()}
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
    followFriendSuccess: state.dashboard.followFriendSuccess,
    addToRecSuccess: state.dashboard.addToRecSuccess,
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
