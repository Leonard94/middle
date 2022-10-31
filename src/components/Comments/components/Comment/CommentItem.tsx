import { getFormattedDate } from '../../../../helpers/getFormattedDate/getFormattedDate'
import { TComments } from '../../../../store/types'

import styles from './styles.module.scss'

export const CommentItem: React.FC<TComments> = ({
  author,
  createdAt,
  body,
}) => {
  const monthAndDay = getFormattedDate(createdAt)

  return (
    <div className={styles.body}>
      <div className={styles.text}>{body}</div>
      <div className={styles.about}>
        <div className={styles.about_avatar}>
          <img src={author.image} alt={author.username} />
        </div>
        <div className={styles.about_username}>{author.username}</div>
        <div className={styles.about_date}>{monthAndDay}</div>
      </div>
    </div>
  )
}
