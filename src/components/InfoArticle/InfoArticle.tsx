import { getFormattedDate } from '../../helpers/getFormattedDate/getFormattedDate'
import { getReadingTime } from '../../helpers/getReadingTime/getReadingTime'
import { Like } from '../Like/Like'

import styles from './styles.module.scss'

type TProps = {
  createdAt: string
  text: string
  tagList: string[]
  favoritesCount: number
  favorited: boolean
  slug: string
}

export const InfoArticle: React.FC<TProps> = ({
  createdAt,
  text,
  tagList,
  favoritesCount,
  favorited,
  slug,
}) => {
  const monthAndDay = getFormattedDate(createdAt)
  const readingTime = getReadingTime(text)

  return (
    <div className={styles.info}>
      <div>{monthAndDay}</div>
      <div>{readingTime} чтения</div>
      <div>
        {tagList &&
          tagList.map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag}
            </span>
          ))}
      </div>
      <Like quantity={favoritesCount} favorited={favorited} slug={slug} />
    </div>
  )
}
