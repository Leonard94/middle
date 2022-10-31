export type TDetailArticleState = {
  article: TDetailArticle
  loading: 'pending' | 'loading' | 'fulfilled'
  error: null | string
}

export type TDetailArticle = {
  title: string
  author: {
    username: string
    bio: string
    image: string
    following: Boolean
  }
  body: string
  createdAt: string
  updateAt: string
  tagList: string[]
  description: string
  favorited: boolean
  favoritesCount: number
  slug: string
}

export type TResponseDetailArticle = {
  article: TDetailArticle
}
