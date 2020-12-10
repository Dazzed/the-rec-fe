import * as types from './actionTypes';
import actionsFactory from 'lib/factory/actions';
import { get } from 'lib/request';
import { API_URL } from 'config/constants';

const listMyRecsMethods = actionsFactory({
  error: types.LIST_MY_RECS_ERROR,
  data: types.LIST_MY_RECS_DATA,
  loading: types.LIST_MY_RECS_REQUEST,
});

export const listMyRecs = ({ pageIndex, pageSize, query }) => {
  return async (dispatch) => {
    try {
      dispatch(listMyRecsMethods.setError(null));
      dispatch(listMyRecsMethods.setLoading(true));
      dispatch(listMyRecsMethods.setData(null));

      const response = await get(`${API_URL}/recs`, {
        params: {
          pageIndex,
          pageSize,
          q: query,
        },
      });

      dispatch(listMyRecsMethods.setLoading(false));
      return dispatch(listMyRecsMethods.setData(response));
    } catch (error) {
      console.error(error);
      const errMsg = 'Failed get MyRecs list';
      return dispatch(listMyRecsMethods.setError(errMsg));
    }
  };
};
