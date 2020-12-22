import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import Head from 'next/head';
import { bindActionCreators } from 'redux';

import * as logoutActions from './actions';

const Logout = ({ logout }) => {
  const router = useRouter();

  useEffect(() => {
    logout();
    router.push('/');
  });

  return (
    <>
      <Head>
        <title>Logout | Get Tag</title>
        <meta property="og:title" content="Login | Get Tag" key="title" />
      </Head>
      <p>Redirecting...</p>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    profile: state.user.profile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(logoutActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
