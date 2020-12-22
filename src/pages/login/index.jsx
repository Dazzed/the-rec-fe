import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import styled from 'styled-components';
import { withRouter } from 'next/router';
import queryString from 'query-string';
import Head from 'next/head';

import { getPersistedUserToken } from 'lib/utils';
import { WEB_URL, FACEBOOK_CLIENT_ID } from 'config/constants';
import * as loginActions from 'pages/login/actions';
import Navbar from 'component/Header/Navbar';

const redirectUri = `${WEB_URL}/login/`;

const CommonContainer = styled(Container)`
  padding: 37px 55px !important;
  max-width: 100% !important;
`;

const LoginPageStyle = styled.div`
  text-align: center;
  .righticon {
    margin-top: 25px;
  }
  h6 {
    font-family: Roboto-Regular;
    font-style: normal;
    font-weight: 300;
    font-size: 36px;
    line-height: 42px;
    text-align: center;
    color: #000008;
  }
  button {
    background: #3b5998;
    border-radius: 10px;
    font-family: Roboto-Regular;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #fff;
    height: 54px;
    width: 324px;
    border: none;
    a {
      color: #fff;
    }
    img {
      margin-right: 16px;
    }
`;

class LoginComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      facebookLoginUrl: null,
    };
  }

  componentDidMount() {
    const token = getPersistedUserToken();

    // if already logged in
    if (token !== null) {
      this.props.router.push('/dashboard');
      return;
    }

    // check OAuth code from facebook
    this.checkFacebookToken();

    // set facebook login link
    this.setLoginUrl();
  }

  setLoginUrl() {
    const stringifiedParams = queryString.stringify({
      client_id: FACEBOOK_CLIENT_ID,
      redirect_uri: redirectUri,
      scope: ['email', 'user_friends'].join(','),
      response_type: 'code',
      auth_type: 'rerequest',
      display: 'popup',
    });

    this.setState({
      facebookLoginUrl: `https://www.facebook.com/v6.0/dialog/oauth?${stringifiedParams}`,
    });
  }

  checkFacebookToken() {
    const { code } = queryString.parse(window.location.search) || {};

    if (code) {
      this.props.login({ code, redirectUri });
      return;
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.loginSuccess && !prevProps.loginSuccess) {
      this.props.router.push('/dashboard');
    }
  }

  renderLoading() {
    return (
      <div className="loader text-center" key={0}>
        <br />
        <br />
        <br />
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  }

  render() {
    const { loading, loginError, loginSuccess } = this.props;

    return (
      <>
        <Head>
          <title>Login | Get Tag</title>
          <meta property="og:title" content="Login | Get Tag" key="title" />
        </Head>
        <CommonContainer className="container-fluid">
          <Row>
            <Navbar />
            <Col xl={12} className="text-center">
              <LoginPageStyle>
                <img
                  src="/imgs/svgs/righticon.svg"
                  className="righticon"
                  alt="Right Icon"
                />
                <h6 className="mt-4 mb-3">Extension installed.</h6>

                {!loginError && (loading || loginSuccess) ? (
                  this.renderLoading()
                ) : (
                    <>
                      <h6 className="mt-5 mb-5">Sign in</h6>
                      <a href={this.state.facebookLoginUrl}>
                        <button>
                          <>
                            <img
                              src="/imgs/svgs/facebookicon.svg"
                              alt="Facebook Icon"
                            />
                          Sign in with Facebook
                        </>
                        </button>
                      </a>
                    </>
                  )}
              </LoginPageStyle>
            </Col>
          </Row>
        </CommonContainer>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.user.profile,
    loading: state.login.loading,
    loginError: state.login.error,
    loginSuccess: state.login.success,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(loginActions, dispatch);
};

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);

export default withRouter(LoginContainer);
