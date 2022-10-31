import { configureStore } from '@reduxjs/toolkit'

import user from './data/user/userSlice'
import articleDetail from './data/detailArticle/articleDetailSlice'
import comments from './data/comments/commentsSlice'
import popularArticles from './data/popularArticles/popularArticlesSlice'
import recentArticles from './data/recentArticles/recentArticlesSlice'
import popularTags from './data/popularTags/PopularTagsSlice'

export const store = configureStore({
  reducer: {
    user,
    articleDetail,
    comments,
    popularArticles,
    recentArticles,
    popularTags,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
