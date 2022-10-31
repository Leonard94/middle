export type TComments = {
  id: number
  createdAt: string
  updatedAt: string
  body: string
  author: {
    username: string
    bio: string
    image: string
    following: boolean
  }
}

export type TResponseComments = {
  comments: TComments[]
}

export type ArticleState = {
  commentsList: TComments[]
  loading: 'pending' | 'loading' | 'fulfilled'
  error: null | string
}
