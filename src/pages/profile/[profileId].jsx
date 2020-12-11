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

const CommonContainer = styled(Container)`
  padding: 37px 55px !important;
  max-width: 100% !important;
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
      return <div className="text-center">No Recs found for this user.</div>;
    }

    return (
      <InfiniteScroll
        pageStart={0}
        loadMore={() => this.listUsersRecs()}
        hasMore={hasMoreRecords}
        loader={
          <div className="loader text-center" key={0}>
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </div>
        }
      >
        <Row>
          {userRecList.map((rec) => (
            <Col lg={2} md={4} sm={6} xs={12} key={rec.id}>
              <ProductSection product={rec} />
            </Col>
          ))}
        </Row>
      </InfiniteScroll>
    );
  }

  render() {
    const { userProfileData } = this.state;

    return (
      <>
        <Head>
          <title>
            {(userProfileData && userProfileData.name) || 'Dealer Profile'} |
            The Rec
          </title>
          <meta
            property="og:title"
            content="Dealer Profile | The Rec"
            key="title"
          />
        </Head>
        <CommonContainer className="container-fluid">
          <SearchBarNav handleQuery={this.handleQuery} />

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
