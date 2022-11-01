import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { getPopuladrTags } from '../../store/data/popularTags/PopularTagsSlice'
import { useAppDispatch, useAppSelector } from '../../store/hooks'

import styles from './styles.module.scss'

export const PopularTags = () => {
  const dispatch = useAppDispatch()

  const { tags, loading } = useAppSelector((state) => state.popularTags)

  useEffect(() => {
    dispatch(getPopuladrTags())
  }, [])

  return (
    <div className={styles.body}>
      <p className={styles.title}>Популярные теги</p>
      <div className={styles.row}>
        {loading === 'fulfilled' &&
          tags.map((tag, index) => (
            <Link
              key={index}
              to={`/articles/tag/${tag}`}
              className={styles.tag}
              title={`Посмотреть статьи на тему ${tag}`}
            >
              {tag}
            </Link>
          ))}
      </div>
    </div>
  )
}
