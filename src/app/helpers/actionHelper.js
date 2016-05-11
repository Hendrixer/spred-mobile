import { createAction } from 'redux-actions';

export const createActionCreator = (startAction, endAction, asyncFn) => (
  dispatch => {
    dispatch(createAction(startAction)());
    const endDispatch = createAction(endAction);

    return asyncFn(dispatch)
    .then(payload => dispatch(endDispatch(payload)))
    .catch(e => dispatch(endDispatch(e)));
  }
);
