import {ActionCreatorWithPayload, createSlice} from '@reduxjs/toolkit';

import {IComment} from '../../../interfaces/IComment';

import {RootState} from '../../store';

interface CommentsState {
  comments: IComment[];
  isLoading: boolean;
}

const initialState: CommentsState = {
  comments: [],
  isLoading: false,
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    getComments: state => {
      state.isLoading = true;
    },
    setComments: (state, action) => {
      //TODO: sort by date
      state.comments = action.payload;
      state.isLoading = false;
    },
    setComment: (state, action) => {
      state.comments = [...state.comments, action.payload];
      state.isLoading = false;
    },
    deleteComment: state => {
      state.isLoading = true;
    },
    removeComment: (state, action) => {
      state.isLoading = false;
      state.comments = state.comments.filter(c => action.payload.id !== c.id);
    },
    updateComment: (state, action) => {
      state.comments = state.comments.map(c => {
        if (action.payload.id === c.id) {
          return action.payload;
        }
        return c;
      });
      state.isLoading = false;
    },
    editComment: (state, action) => {
      state.isLoading = true;
    },
    sendComment: (state, action) => {
      state.isLoading = true;
    },
  },
});

export const sendComment: ActionCreatorWithPayload<{
  text: string;
  prayerId: string;
}> = commentsSlice.actions.sendComment;

export const editComment: ActionCreatorWithPayload<{
  id: string;
  text: string;
}> = commentsSlice.actions.editComment;

export const deleteComment: ActionCreatorWithPayload<{
  id: string;
}> = commentsSlice.actions.editComment;

export const selectComments = (state: RootState) => state.comments.comments;
export const selectCommentsIsLoading = (state: RootState) =>
  state.comments.isLoading;
export const selectCommentsByPrayerId = (state: RootState, prayerId: string) =>
  state.comments.comments.filter(c => prayerId === c.prayerId);
export const selectCommentsCountByPrayerId = (
  state: RootState,
  prayerId: string,
) => state.comments.comments.filter(c => prayerId === c.prayerId).length;
export const selectCommentsByCommentsIds = (
  state: RootState,
  commentsIds: string[],
) =>
  state.comments.comments.filter(c => {
    if (commentsIds.includes(c.id.toString())) {
      return c;
    }
  });

export const {
  setComments,
  getComments,
  setComment,
  removeComment,
  updateComment,
} = commentsSlice.actions;

export default commentsSlice.reducer;
