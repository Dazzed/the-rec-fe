import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Head from 'next/head';

import {
  getPersistedUserToken,
  getPersistedUserProfile,
} from '../../lib/utils';
import { saveUserToken, updateUser } from '../../reducers/user/actions';

export default function Layout({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = getPersistedUserToken();
    const profile = getPersistedUserProfile();

    // load user auth info
    dispatch(saveUserToken(token));
    dispatch(updateUser(profile));
  });

  return (
    <>
      <Head>
        <title>The Rec</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      {children}
    </>
  );
}
