import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import Link from 'next/link';
import { withRouter } from 'next/router';
import queryString from 'query-string';

import { getPersistedUserToken } from '../../lib/utils';
import { WEB_URL, FACEBOOK_CLIENT_ID } from '../../config/constants';
import * as loginActions from './actions';
import Navbar from '../../component/Header/Navbar';

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

    const { code } = queryString.parse(window.location.search) || {};
    const redirectUri = `${WEB_URL}/login/`;

    if (code) {
      this.props.login({ code, redirectUri });
      return;
    } else {
      const stringifiedParams = queryString.stringify({
        client_id: FACEBOOK_CLIENT_ID,
        redirect_uri: redirectUri,
        scope: ['email'].join(','),
        response_type: 'code',
        auth_type: 'rerequest',
        display: 'popup',
      });

      this.setState({
        facebookLoginUrl: `https://www.facebook.com/v6.0/dialog/oauth?${stringifiedParams}`,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.loginSuccess && !prevProps.loginSuccess) {
      this.props.router.push('/dashboard');
    }
  }

  render() {
    return (
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
            </LoginPageStyle>
          </Col>
        </Row>
      </CommonContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.user.profile,
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
