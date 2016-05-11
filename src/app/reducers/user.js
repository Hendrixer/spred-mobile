import {
  FETCH_USER,
  FETCH_USER_COMPLETE
} from '../actions/actionTypes';

export const user = (state = {}, { type, payload }) => {
  switch (type) {
    case FETCH_USER:
      return state;

    case FETCH_USER_COMPLETE:
      return {
        ...state,
        ...payload
      };

    default:
      return state;
  }
};
