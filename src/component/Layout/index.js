import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

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

  return <>{children}</>;
}
