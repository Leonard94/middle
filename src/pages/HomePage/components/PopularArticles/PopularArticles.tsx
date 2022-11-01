import { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import {
  getPopularArticles,
  setNextPage,
  setCurrentPage,
  setPrevPage,
} from '../../../../store/data/popularArticles/popularArticlesSlice'

import { ArticlesList } from '../../../../components/ArticlesList/ArticlesList'
import { Skeleton } from '../../../../components/Skeleton/Skeleton'
import { Pagination } from '../../../../components/Pagination/Pagination'

export const PopularArticles = () => {
  const dispatch = useAppDispatch()

  const { articlesList, loading, currentPage, maxpage } = useAppSelector(
    (state) => state.popularArticles
  )

  useEffect(() => {
    dispatch(getPopularArticles())
    // window.scrollTo({
    //   top: 100,
    //   left: 0,
    //   behavior: 'smooth',
    // })
  }, [dispatch, currentPage])

  return (
    <div>
      <h2 className='title'>Популярное</h2>
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
    </div>
  )
}
