import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../store/hooks'
import {
  getFavoritesArticles,
  getRecentArticles,
  getTagArticles,
  resetData,
  setCurrentPage,
  setNextPage,
  setPrevPage,
} from '../../store/data/Articles/ArticlesSlice'

import { Content } from '../../components/Content/Content'
import { Skeleton } from '../../components/Skeleton/Skeleton'
import { ArticlesList } from '../../components/ArticlesList/ArticlesList'
import { Pagination } from '../../components/Pagination/Pagination'

export const ArticlesPage = () => {
  const { type, tag } = useParams()
  const dispatch = useAppDispatch()

  const { articlesList, loading, currentPage, maxpage } = useAppSelector(
    (state) => state.articles
  )

  const getTitle = (): string => {
    if (tag) {
      return `Статьи на тему ${tag}`
    }
    if (type === 'recent') {
      return 'Недавнее'
    }
    return 'Отслеживаемые пользователи'
  }

  useEffect(() => {
    if (tag) {
      dispatch(getTagArticles(tag))
    } else if (type === 'recent') {
      dispatch(getRecentArticles())
    } else {
      dispatch(getFavoritesArticles())
    }

    return () => {
      resetData()
    }
  }, [dispatch, currentPage, tag, type])

  return (
    <Content isNavigateVisible isShowAuthControls>
      {type && <h1 className='title'>{getTitle()}</h1>}
      {loading === 'loading' && <Skeleton />}
      {loading === 'fulfilled' && <ArticlesList list={articlesList} />}
      {loading === 'fulfilled' && maxpage > 1 && (
        <Pagination
          current={currentPage}
          max={maxpage}
          next={() => dispatch(setNextPage())}
          prev={() => dispatch(setPrevPage())}
          setPage={(page: number) => dispatch(setCurrentPage(page))}
        />
      )}
    </Content>
  )
}
