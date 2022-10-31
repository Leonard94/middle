import { Link } from 'react-router-dom'

import { TArticle } from '../../store/types'

import { InfoArticle } from '../InfoArticle/InfoArticle'

import styles from './styles.module.scss'

export const Article: React.FC<TArticle> = ({
  title,
  author,
  body,
  createdAt,
  tagList,
  description,
  favorited,
  favoritesCount,
  slug,
}) => {
  return (
    <article className={styles.article}>
      <div className={styles.user}>
        <div className={styles.user_avatar}>
          <img src={author.image} alt={author.username} />
        </div>
        <div className={styles.user_name}>{author.username}</div>
      </div>
      <Link
        to={`/article/${slug}`}
        className={styles.title}
        title='Перейти к статье'
      >
        {title}
      </Link>
      <div className={styles.description}>{description}</div>
      <InfoArticle
        createdAt={createdAt}
        tagList={tagList}
        text={body}
        favoritesCount={favoritesCount}
        favorited={favorited}
        slug={slug}
      />
    </article>
  )
}
