import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { api } from '../../api'
import { TDetailArticleState, TResponseDetailArticle } from '../../types'

export const getTheArticle = createAsyncThunk(
  'articleDetail/getTheArticle',
  async (slug: string) => {
    const response = await api.get<TResponseDetailArticle>(`/articles/${slug}`)
    return (await response.data) as TResponseDetailArticle
  }
)

const initialState: TDetailArticleState = {
  article: {
    slug: '',
    title: '',
    description: '',
    body: '',
    tagList: [],
    createdAt: '',
    updateAt: '',
    favorited: false,
    favoritesCount: 0,
    author: {
      username: '',
      bio: '',
      image: '',
      following: false,
    },
  },
  loading: 'pending',
  error: null,
}

export const articleDetail = createSlice({
  name: 'articleDetail',
  initialState,
  reducers: {
    resetTheArticle: () => {
      return initialState
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTheArticle.pending, (state) => {
      state.loading = 'loading'
      state.error = null
    })
    builder.addCase(getTheArticle.fulfilled, (state, { payload }) => {
      state.article = payload.article
      state.loading = 'fulfilled'
    })
    builder.addCase(getTheArticle.rejected, (state, { payload }: any) => {
      state.error = payload
      state.loading = 'fulfilled'
    })
  },
})

export const { resetTheArticle } = articleDetail.actions
export default articleDetail.reducer
