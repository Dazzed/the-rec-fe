import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as logoutActions from './actions';

const Logout = ({ logout }) => {
  const router = useRouter();

  useEffect(() => {
    logout();
    router.push('/');
  });

  return <p>Redirecting...</p>;
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
