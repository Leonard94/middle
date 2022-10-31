import classnames from 'classnames'

import styles from './styles.module.scss'

type TProps = {
  current: number
  max: number
  next: () => void
  prev: () => void
  setPage: (page: number) => void
}

export const Pagination: React.FC<TProps> = ({
  current,
  max,
  next,
  prev,
  setPage,
}) => {
  const pagesList: number[] = []

  for (let i = 1; i <= max; i++) {
    pagesList.push(i)
  }

  const getClassesForPageNumber = (page: number) => {
    return classnames(styles.page, {
      [styles.page_active]: current === page,
    })
  }

  return (
    <section className={styles.body}>
      <div className={styles.row}>
        <div className={styles.arrow} onClick={prev}>
          ←
        </div>
        <ul className={styles.pages}>
          {pagesList.map((page) => (
            <li
              className={getClassesForPageNumber(page)}
              key={page}
              onClick={() => setPage(page)}
            >
              {page}
            </li>
          ))}
        </ul>
        <div className={styles.arrow} onClick={next}>
          →
        </div>
      </div>
    </section>
  )
}
