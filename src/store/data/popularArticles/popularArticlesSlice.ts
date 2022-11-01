import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { api } from '../../api'

import { TArticleState, TPages, TResponseArticles } from '../../types/articles'

export const getPopularArticles = createAsyncThunk(
  'popularArticles/getPopularArticles',
  async (_, { getState }) => {
    const state: any = getState()
    const currentPage: number = state.popularArticles.currentPage
    const response = await api.get<TResponseArticles>(
      `/articles?limit=10&offset=${currentPage - 1}0`
    )
    return await response.data
  }
)

const initialState: TArticleState & TPages = {
  articlesList: [],
  loading: 'pending',
  error: null,
  currentPage: 1,
  maxpage: 1,
}

export const popularArticles = createSlice({
  name: 'popularArticles',
  initialState,
  reducers: {
    setNextPage: (state) => {
      if (state.currentPage !== state.maxpage) {
        state.currentPage = state.currentPage + 1
      }
    },
    setPrevPage: (state) => {
      if (state.currentPage > 1) {
        state.currentPage = state.currentPage - 1
      }
    },
    setCurrentPage: (state, { payload }: PayloadAction<number>) => {
      if (state.currentPage !== payload) {
        state.currentPage = payload
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPopularArticles.pending, (state) => {
      state.loading = 'loading'
    })
    builder.addCase(getPopularArticles.fulfilled, (state, { payload }) => {
      state.articlesList = payload.articles
      state.loading = 'fulfilled'
      state.maxpage = Math.ceil(payload.articlesCount / 10)
    })
    builder.addCase(getPopularArticles.rejected, (state, { payload }: any) => {
      state.error = payload
      state.loading = 'fulfilled'
    })
  },
})

export const { setNextPage, setPrevPage, setCurrentPage } =
  popularArticles.actions
export default popularArticles.reducer
