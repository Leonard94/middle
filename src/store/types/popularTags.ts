export type TPopularTagsInitial = {
  tags: string[]
  loading: 'pending' | 'loading' | 'fulfilled'
  error: null | string
}

export type TResponsePopularTags = {
  tags: string[]
}
