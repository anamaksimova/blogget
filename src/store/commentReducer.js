const UPDATE_COMMENT = 'UPDATE_COMMENT';

const initionalState = {
  comment: 'Hi',
};
export const updateComment = (comment) => ({
  type: UPDATE_COMMENT,
  comment,
});

export const commentReducer = (state = initionalState, action) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
        ...state,
        comment: action.comment,
      };

    default:
      return state;
  }
};
