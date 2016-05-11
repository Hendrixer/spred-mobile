import { createActionCreator } from '../helpers/actionHelper';
import { graphCall } from '../helpers/apiHelper';
import * as actionTypes from '../actions/actionTypes';
import * as mutations from '../graph/mutations';
import * as queries from '../graph/queries';

export const fetchConvos = () => (
  createActionCreator(
    actionTypes.FETCH_CONVOS,
    actionTypes.FETCH_USER_COMPLETE,
    () => graphCall(queries.makeFetchConvosQuery())
    .then(resp => resp.data.convos)
  )
);

export const createConvo = (name, tags) => (
  createActionCreator(
    actionTypes.CREATE_CONVO,
    actionTypes.CREATE_CONVO_COMPLETE,
    () => graphCall(mutations.makeCreateConvoMutation({ name, tags }))
    .then(resp => resp.data.convo)
  )
);
