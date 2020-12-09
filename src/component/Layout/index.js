import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { getPersistedUserToken, getPersistedUserProfile } from 'lib/utils';
import { saveUserToken, updateUser } from 'reducers/user/actions';

function Layout({ children }) {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const token = getPersistedUserToken();
    const profile = getPersistedUserProfile();

    if (router.pathname.includes('/admin')) {
      if (
        !token ||
        !profile ||
        !profile.roles ||
        !profile.roles.find((e) => e.name === 'admin')
      ) {
        router.push('/login');

        return;
      }
    }

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

export default Layout;
