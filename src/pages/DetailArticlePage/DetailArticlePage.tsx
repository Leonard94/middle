import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../store/hooks'
import {
  getTheArticle,
  resetTheArticle,
} from '../../store/data/detailArticle/articleDetailSlice'

import { DetailArticle } from './components/DetailArticle/DetailArticle'
import { SkeletonArticle } from './components/SkeletonArticle/SkeletonArticle'
import { Content } from '../../components/Content/Content'

export const DetailArticlePage = () => {
  const { slug } = useParams()
  const dispatch = useAppDispatch()

  const { loading, article } = useAppSelector(
    (state) => state.articleDetail
  )

  useEffect(() => {
    if (slug) {
      dispatch(getTheArticle(slug))
    }
    return () => {
      dispatch(resetTheArticle())
    }
  }, [])

  return (
    <Content isShowAuthControls isNavigateVisible>
      {loading === 'loading' && <SkeletonArticle />}
      {loading === 'fulfilled' && <DetailArticle article={article} />}
    </Content>
  )
}
