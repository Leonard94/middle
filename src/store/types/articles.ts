export type TArticleState = {
  articlesList: TArticle[]
  loading: 'pending' | 'loading' | 'fulfilled'
  error: null | string
}

export type TAuthor = {
  username: string
  bio: string
  image: string
  following: boolean
}

export type TArticle = {
  title: string
  author: TAuthor
  body: string
  createdAt: string
  updateAt: string
  tagList: string[]
  description: string
  favorited: boolean
  favoritesCount: number
  slug: string
}

export type TResponseArticles = {
  articles: TArticle[]
  articlesCount: number
}

export type TPages = {
  currentPage: number
  maxPage: number
}
