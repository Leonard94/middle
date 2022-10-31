import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { api } from '../../api'

import { TArticle } from '../../types'

export const setTheArticleFavorite = createAsyncThunk(
  'favorites/setTheArticleFavorite',
  async (slug: string) => {
    const response = await api.post(`/articles/${slug}/favorite`, {})
    return await response.data
  }
)

export const setTheArticleUnfavorite = createAsyncThunk(
  'favorites/setTheArticleUnfavorite',
  async (slug: string) => {
    const response = await api.delete(`/articles/${slug}/favorite`)
    return await response.data
  }
)

type TArticleState = {
  favoritesList: TArticle[] | null
  loading: 'pending' | 'loading' | 'fulfilled'
  error: null | string
}

const initialState: TArticleState = {
  favoritesList: null,
  loading: 'pending',
  error: null,
}

export const favorites = createSlice({
  name: 'favorites',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setTheArticleFavorite.fulfilled, (state) => {
      state.loading = 'fulfilled'
      state.error = null
    })
    builder.addCase(setTheArticleUnfavorite.fulfilled, (state) => {
      state.loading = 'fulfilled'
      state.error = null
    })
  },
})

export default favorites.reducer
