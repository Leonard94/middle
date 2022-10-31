import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { api } from '../../api'

import { ArticleState, TResponseComments } from '../../types'

export const getComments = createAsyncThunk(
  'comments/getComments',
  async (slug: string) => {
    const response = await api.get<TResponseComments>(
      `/articles/${slug}/comments`
    )
    return (await response.data) as TResponseComments
  }
)

const initialState: ArticleState = {
  commentsList: [],
  loading: 'pending',
  error: null,
}

export const comments = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    resetComments: () => {
      return initialState
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getComments.pending, (state) => {
      state.loading = 'loading'
      state.error = null
    })
    builder.addCase(getComments.fulfilled, (state, { payload }) => {
      state.commentsList = payload.comments
      state.loading = 'fulfilled'
      state.error = null
    })
  },
})

export const { resetComments } = comments.actions
export default comments.reducer
