import {
  FETCH_CONVOS,
  FETCH_CONVOS_COMPLETE,
  CREATE_CONVO,
  CREATE_CONVO_COMPLETE,
  LEAVE_CONVO,
  LEAVE_CONVO_COMPLETE
} from '../actions/actionTypes';

const removLeftConvo = (id, convos) => (
  convos.filter(convo => convo.id !== id)
);

export const convos = (state = [], { type, payload }) => {
  switch (type) {
    case FETCH_CONVOS:
      return state;
    case FETCH_CONVOS_COMPLETE:
      return payload;

    case CREATE_CONVO:
      return state;
    case CREATE_CONVO_COMPLETE:
      return [
        payload,
        ...state
      ];

    case LEAVE_CONVO:
      return state;
    case LEAVE_CONVO_COMPLETE:
      return removLeftConvo(payload.id, state);

    default:
      return state;
  }
};
