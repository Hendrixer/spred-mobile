import {
  START_LOAD,
  FINISH_LOAD
} from '../actions/actionTypes';

export const user = (state = {}, { type, payload }) => {
  switch (type) {
    case START_LOAD:
      return state;

    case FINISH_LOAD:
      return {
        ...state,
        ...payload
      };

    default:
      return state;
  }
};
