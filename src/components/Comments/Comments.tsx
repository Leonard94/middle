import { useEffect } from 'react'

import { CommentItem } from './components/Comment/CommentItem'

import { TComments } from '../../store/types'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import {
  getComments,
  resetComments,
} from '../../store/data/comments/commentsSlice'

import styles from './styles.module.scss'

type TProps = {
  slug: string
}

export const Comments: React.FC<TProps> = ({ slug }) => {
  const dispatch = useAppDispatch()

  const { loading, commentsList } = useAppSelector((state) => state.comments)

  useEffect(() => {
    dispatch(getComments(slug))

    return () => {
      dispatch(resetComments())
    }
  }, [])

  if (loading === 'fulfilled') {
    return (
      <div className={styles.comments}>
        {commentsList.map((comment: TComments) => (
          <CommentItem key={comment.id} {...comment} />
        ))}
      </div>
    )
  } else {
    return null
  }
}
