import styles from './styles.module.scss'

// todo
// Этот компонент должен запрашивать релевантные теги
// По клику на тег - отправить на спец. страницу и показать список статей

export const PopularTags = () => {
  const tag = 'mock'
  return (
    <div className={styles.body}>
      <p className={styles.title}>Популярные теги</p>
      <div className={styles.row}>
        <a className={styles.tag} title={`Посмотреть статьи на тему ${tag}`}>
          Programming
        </a>
        <a className={styles.tag} title={`Посмотреть статьи на тему ${tag}`}>
          React
        </a>
        <a className={styles.tag} title={`Посмотреть статьи на тему ${tag}`}>
          CSS
        </a>
        <a className={styles.tag} title={`Посмотреть статьи на тему ${tag}`}>
          Programming
        </a>
        <a className={styles.tag} title={`Посмотреть статьи на тему ${tag}`}>
          Computers
        </a>
      </div>
    </div>
  )
}
