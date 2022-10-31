import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { api } from '../../api'

import {
  TPopularTagsInitial,
  TResponsePopularTags,
} from '../../types/popularTags'

export const getPopuladrTags = createAsyncThunk(
  'popularTags/getPopuladrTags',
  async () => {
    const response = await api.get<TResponsePopularTags>(`/tags`)
    return (await response.data) as TResponsePopularTags
  }
)

const initialState: TPopularTagsInitial = {
  tags: [],
  loading: 'pending',
  error: null,
}

export const popularTags = createSlice({
  name: 'popularTags',
  initialState,
  reducers: {
    resetRecentArticles: () => {
      return initialState
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPopuladrTags.pending, (state) => {
      state.loading = 'loading'
      state.error = null
    })
    builder.addCase(getPopuladrTags.fulfilled, (state, { payload }) => {
      console.log('payload =>> ', payload)
      state.loading = 'fulfilled'
      state.error = null
      state.tags = payload.tags
    })
    builder.addCase(getPopuladrTags.rejected, (state, { payload }: any) => {
      state.error = payload
      state.loading = 'fulfilled'
    })
  },
})

export const { resetRecentArticles } = popularTags.actions
export default popularTags.reducer
