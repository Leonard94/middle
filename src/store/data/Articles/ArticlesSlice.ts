import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { api } from '../../api'

import { TArticleState, TResponseArticles, TPages } from '../../types'

export const getRecentArticles = createAsyncThunk(
  'articles/getRecentArticles',
  async (_, { getState }) => {
    const state: any = getState()
    const currentPage: number = state.articles.currentPage
    const response = await api.get<TResponseArticles>(
      `/articles?limit=10&offset=${currentPage - 1}0`
    )
    return await response.data
  }
)

export const getTagArticles = createAsyncThunk(
  'articles/getTagArticles',
  async (tag: string, { getState }) => {
    const state: any = getState()
    const currentPage: number = state.articles.currentPage
    const response = await api.get<TResponseArticles>(
      `/articles?tag=${tag}&limit=10&offset=${currentPage - 1}0`
    )
    return await response.data
  }
)

export const getFavoritesArticles = createAsyncThunk(
  'articles/getFavoritesArticles',
  async (_, { getState }) => {
    const state: any = getState()
    const currentPage: number = state.articles.currentPage
    const response = await api.get<TResponseArticles>(
      `/articles/feed?limit=10&offset=${currentPage - 1}0`
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

export const articles = createSlice({
  name: 'articles',
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
    resetData: () => {
      return initialState
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getRecentArticles.pending, (state) => {
      state.loading = 'loading'
      state.error = null
    })
    builder.addCase(getRecentArticles.fulfilled, (state, { payload }) => {
      state.loading = 'fulfilled'
      state.error = null
      state.articlesList = payload.articles
      state.maxpage = Math.ceil(payload.articlesCount / 10)
    })
    builder.addCase(getRecentArticles.rejected, (state, { payload }: any) => {
      state.loading = 'fulfilled'
      state.error = payload
    })

    builder.addCase(getTagArticles.pending, (state) => {
      state.loading = 'loading'
      state.error = null
    })
    builder.addCase(getTagArticles.fulfilled, (state, { payload }) => {
      state.loading = 'fulfilled'
      state.error = null
      state.articlesList = payload.articles
      state.maxpage = Math.ceil(payload.articlesCount / 10)
    })
    builder.addCase(getTagArticles.rejected, (state, { payload }: any) => {
      state.loading = 'fulfilled'
      state.error = payload
    })

    builder.addCase(getFavoritesArticles.pending, (state) => {
      state.loading = 'loading'
      state.error = null
    })
    builder.addCase(getFavoritesArticles.fulfilled, (state, { payload }) => {
      state.loading = 'fulfilled'
      state.error = null
      state.articlesList = payload.articles
      state.maxpage = Math.ceil(payload.articlesCount / 10)
    })
    builder.addCase(
      getFavoritesArticles.rejected,
      (state, { payload }: any) => {
        state.loading = 'fulfilled'
        state.error = payload
      }
    )
  },
})

export const { setNextPage, setPrevPage, setCurrentPage, resetData } =
  articles.actions
export default articles.reducer
