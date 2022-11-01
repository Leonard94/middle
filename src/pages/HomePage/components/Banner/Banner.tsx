import { useNavigate } from 'react-router-dom'

import { Button } from '../../../../components/Button/Button'

import styles from './styles.module.scss'

export const Banner = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.banner}>
      <div className='container container--center'>
        <div className={styles.body}>
          <div className={styles.inner}>
            <h1 className={styles.title}>Будь любопытным.</h1>
            <h2 className={styles.subtitle}>
              Открой для себя истории, размышления и&nbsp;опыт писателей
              на&nbsp;любую тему.
            </h2>
            <Button
              typeView='primary'
              type='button'
              onClick={() => navigate('/articles/recent')}
              small
            >
              Начать читать
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
