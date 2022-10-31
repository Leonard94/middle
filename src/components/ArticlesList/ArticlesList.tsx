import { Article } from '../Article/Article'

import { TArticle } from '../../store/types/articles'

type TProps = {
  list: TArticle[]
}

export const ArticlesList: React.FC<TProps> = ({ list }) => {
  return (
    <>
      {list.map((item: TArticle, index: number) => (
        <Article key={index} {...item} />
      ))}
    </>
  )
}
