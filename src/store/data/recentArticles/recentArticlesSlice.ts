import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { api } from '../../api'

import { TArticleState, TResponseArticles } from '../../types/articles'

export const getrRecentArticles = createAsyncThunk(
  'recentArticles/getrRecentArticles',
  async () => {
    const response = await api.get<TResponseArticles>(`/articles`)
    return (await response.data) as TResponseArticles
  }
)

const initialState: TArticleState = {
  articlesList: [],
  loading: 'pending',
  error: null,
}

export const popularArticles = createSlice({
  name: 'popularArticles',
  initialState,
  reducers: {
    resetRecentArticles: () => {
      return initialState
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getrRecentArticles.pending, (state) => {
      state.loading = 'loading'
    })
    builder.addCase(getrRecentArticles.fulfilled, (state, { payload }) => {
      state.articlesList = payload.articles
      state.loading = 'fulfilled'
    })
    builder.addCase(getrRecentArticles.rejected, (state, { payload }: any) => {
      state.error = payload
      state.loading = 'fulfilled'
    })
  },
})

export const { resetRecentArticles } = popularArticles.actions
export default popularArticles.reducer
