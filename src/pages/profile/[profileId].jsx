import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import styled from 'styled-components';
import Head from 'next/head';
import { withRouter } from 'next/router';
import isEqual from 'lodash/isEqual';
import InfiniteScroll from 'react-infinite-scroller';

import * as profilePageActions from 'pages/profile/actions';
import SearchBarNav from 'component/Header/SearchBarNav';
import ProfileSection from 'pages/profile/component/profileSection';
import ProductSection from 'pages/profile/component/productsSecion';
import { DEFAULT_CATEGORIES } from 'config/constants';

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
const ButtonExplore = styled.button`
  background: #f6d0e8;
  border-radius: 5px;
  width: 102px;
  height: 62px;
  padding: 15px 8px;
  margin-right: 23px;
  font-family: Roboto-Bold;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  color: #000008;
  border: none;
  margin-top: 14px;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
`;


class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userRecList: null,
      userRecListData: null,
      userProfileData: null,
      hasMoreRecords: false,
      currentPageIndex: 0,
      pageSize: 20,
      searchQuery: '',
      categoryQuery: '',
    };
  }

  componentDidMount() {
    this.setState(
      {
        hasMoreRecords: false,
        currentPageIndex: 0,
        searchQuery: this.props.router.query.q || '',
        categoryQuery: this.props.router.query.category || '',
      },
      () => {
        if (this.props.router.query.profileId) {
          this.props.getUserProfile(this.props.router.query.profileId);
          this.listUsersRecs();
        }
      }
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.error && this.props.error !== prevProps.error) {
      // toastError(this.props.error);
    }

    if (
      this.props.success &&
      this.props.success !== prevProps.success &&
      this.props.router.query.profileId
    ) {
      this.props.getUserProfile(this.props.router.query.profileId);
    }

    if (
      this.props.router.query.profileId &&
      this.props.router.query.profileId !== prevProps.router.query.profileId
    ) {
      this.props.getUserProfile(this.props.router.query.profileId);
      this.listUsersRecs();
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let toReturn = null;

    if (
      nextProps.userRecListData &&
      !isEqual(nextProps.userRecListData, prevState.userRecListData)
    ) {
      if (
        prevState.currentPageIndex === 0 &&
        nextProps.userRecListData.pageIndex !== 1
      ) {
        toReturn = Object.assign(toReturn || {}, {
          currentPageIndex: 0,
          hasMoreRecords: true,
        });
      } else {
        toReturn = Object.assign(toReturn || {}, {
          userRecListData: nextProps.userRecListData,
          currentPageIndex: nextProps.userRecListData.pageIndex,
          hasMoreRecords: nextProps.userRecListData.hasMore,
          userRecList:
            prevState.currentPageIndex === 0
              ? nextProps.userRecListData.data
              : prevState.userRecList.concat(nextProps.userRecListData.data),
        });
      }
    }

    if (
      nextProps.userProfileData &&
      !isEqual(nextProps.userProfileData, prevState.userProfileData)
    ) {
      toReturn = Object.assign(toReturn || {}, {
        userProfileData: nextProps.userProfileData,
      });
    }

    return toReturn;
  }

  listUsersRecs() {
    if (this.props.router.query.profileId) {
      this.setState(
        {
          hasMoreRecords: false,
        },
        () =>
          this.props.listUsersRecs({
            profileId: this.props.router.query.profileId,
            pageIndex: this.state.currentPageIndex + 1,
            pageSize: this.state.pageSize,
            query: this.state.searchQuery,
          })
      );
    }
  }

  unfollowFriend = (friendId) => {
    this.props.unfollowFriend(friendId);

    this.setState({
      contacts: remove(this.state.contacts, (e) => e.id !== friendId),
    });
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
      () => this.listUsersRecs()
    );
  };

  renderUserRecs() {
    const { userRecList, hasMoreRecords } = this.state;

    if (!userRecList) {
      return null;
    }

    if (userRecList.length === 0) {
      return (
        <Row>
          <Col>
            <div className="loader text-center loader-section" key={0}>
              No Tags found for this user.
            </div>
          </Col>
        </Row>
      );
    }

    return (
      <InfiniteScroll
        pageStart={0}
        loadMore={() => this.listUsersRecs()}
        hasMore={hasMoreRecords}
        loader={
          <div className="loader text-center loader-section" key={0}>
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </div>
        }
      >
        <Row>
          {userRecList.map((rec) => (
            <Col lg={2} md={4} sm={6} xs={12} key={rec.id} className="mb-3">
              <ProductSection product={rec} />
            </Col>
          ))}
        </Row>
      </InfiniteScroll>
    );
  }

  render() {
    const { categoryQuery, userProfileData } = this.state;
    return (
      <>
        <Head>
          <title>
            {(userProfileData && userProfileData.name) || 'Dealer Profile'} |
            Get Tag
          </title>
          <meta
            property="og:title"
            content="Dealer Profile | Get Tag"
            key="title"
          />
        </Head>
        <CommonContainer className="container-fluid">
          <SearchBarNav handleQuery={this.handleQuery} />
          <Row>
            <Col lg={9}>
              <Row>
                <Col lg={9} className="mb-4 mt-4">
                  <LatestTitle>Explore</LatestTitle>
                  <ButtonExplore onClick={() => this.selectCategoryFilter('')}>
                    {categoryQuery === '' ? <u>All</u> : 'All'}
                  </ButtonExplore>
                  {DEFAULT_CATEGORIES.map((item, i) => (
                    <ButtonExplore
                      onClick={() => this.selectCategoryFilter(item)}
                      key={i}
                    >
                      {categoryQuery === item ? <u>{item}</u> : item}
                    </ButtonExplore>
                  ))}
                </Col>
              </Row>
            </Col>
          </Row>
          <ProfileSection
            profile={userProfileData}
            follow={this.props.followFriend}
            unfollow={this.props.unfollowFriend}
          />

          {this.renderUserRecs()}
        </CommonContainer>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.userProfile.error,
    success: state.userProfile.success,
    loading: state.userProfile.loading,
    userRecListData: state.userProfile.userRecListData,
    userProfileData: state.userProfile.userProfileData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(profilePageActions, dispatch);
};

const UserProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);

export default withRouter(UserProfileContainer);
