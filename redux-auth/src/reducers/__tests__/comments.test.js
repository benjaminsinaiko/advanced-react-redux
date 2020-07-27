import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

it('handles actions of type SAVE_COMMENT', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: 'Test Comment',
  };

  const newState = commentsReducer([], action);

  expect(newState).toEqual(['Test Comment']);
});

it('handles action with unknow type', () => {
  const newState = commentsReducer([], { type: 'UKNOWN_TYPE' });

  expect(newState).toEqual([]);
});
