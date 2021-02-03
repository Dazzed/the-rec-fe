import * as types from './actionTypes';
import actionsFactory from 'lib/factory/actions';
import { get, deleteReq } from 'lib/request';
import { API_URL } from 'config/constants';

const listMyTagsMethods = actionsFactory({
  error: types.LIST_MY_RECS_ERROR,
  data: types.LIST_MY_RECS_DATA,
  loading: types.LIST_MY_RECS_REQUEST,
});

const deleteMyTagMethods = actionsFactory({
  error: types.DELETE_MY_REC_ERROR,
  success: types.DELETE_MY_REC_SUCCESS,
});

export const listMyTags = ({ pageIndex, pageSize, query, category }) => {
  return async (dispatch) => {
    try {
      dispatch(listMyTagsMethods.setError(null));
      dispatch(listMyTagsMethods.setLoading(true));
      dispatch(listMyTagsMethods.setData(null));

      const response = await get(`${API_URL}/recs`, {
        params: {
          pageIndex,
          pageSize,
          q: query,
          category,
        },
      });

      dispatch(listMyTagsMethods.setLoading(false));
      return dispatch(listMyTagsMethods.setData(response));
    } catch (error) {
      console.error(error);
      const errMsg = 'Failed get MyTags list';
      return dispatch(listMyTagsMethods.setError(errMsg));
    }
  };
};

export const deleteMyTag = (productId) => {
  return async (dispatch) => {
    try {
      dispatch(deleteMyTagMethods.setError(null));
      dispatch(deleteMyTagMethods.setSuccess(false));

      await deleteReq(`${API_URL}/recs/${productId}`);

      return dispatch(deleteMyTagMethods.setSuccess(true));
    } catch (error) {
      console.error(error);
      const errMsg = 'Failed to delete Rec from list';
      return dispatch(deleteMyTagMethods.setError(errMsg));
    }
  };
};
