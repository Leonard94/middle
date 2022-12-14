import { InfoArticle } from '../../../../components/InfoArticle/InfoArticle'
import { Comments } from '../../../../components/Comments/Comments'

import { TDetailArticle } from '../../../../store/types/detailArticle'

import styles from './styles.module.scss'

type TProps = {
  article: TDetailArticle
}

export const DetailArticle: React.FC<TProps> = ({ article }) => {
  const {
    title,
    author,
    body,
    createdAt,
    tagList,
    favorited,
    favoritesCount,
    slug,
  } = article

  const getFormatedText = (text: string) => {
    return text.split('\\n').map((item, index) => <p key={index}>{item}</p>)
  }

  return (
    <article className={styles.article}>
      <div className={styles.user}>
        <div className={styles.user_avatar}>
          <img src={author.image} alt={author.username} />
        </div>
        <div>
          <div className={styles.username}>{author.username}</div>
          <InfoArticle
            createdAt={createdAt}
            text={body}
            tagList={tagList}
            favoritesCount={favoritesCount}
            favorited={favorited}
            slug={slug}
          />
        </div>
      </div>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.text}>{getFormatedText(body)}</div>
      <Comments slug={slug} />
    </article>
  )
}
