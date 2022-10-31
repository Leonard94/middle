import { useEffect } from 'react'

import { getrRecentArticles } from '../../../../store/data/recentArticles/recentArticlesSlice'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'

import { Skeleton } from '../../../../components/Skeleton/Skeleton'
import { ArticlesList } from '../../../../components/ArticlesList/ArticlesList'

export const RecentArticles = () => {
  const dispatch = useAppDispatch()

  const { loading, articlesList } = useAppSelector(
    (state) => state.recentArticles
  )

  useEffect(() => {
    dispatch(getrRecentArticles())
  }, [dispatch])

  return (
    <div>
      <h2 className='title'>Недавнее</h2>
      {loading === 'loading' && <Skeleton />}
      {loading === 'fulfilled' && <ArticlesList list={articlesList} />}
    </div>
  )
}
