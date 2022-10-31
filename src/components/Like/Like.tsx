import { useState } from 'react'
import classnames from 'classnames'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../store/hooks'
import {
  setTheArticleFavorite,
  setTheArticleUnfavorite,
} from '../../store/data/favorites/favoritesSlice'

import { Popup } from '../Popup/Popup'
import { Button } from '../Button/Button'

import { ReactComponent as IconLike } from '../../assets/icons/like.svg'

import styles from './styles.module.scss'

type TProps = {
  quantity: number
  favorited: boolean
  slug: string
}

export const Like: React.FC<TProps> = ({ quantity, favorited, slug }) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [isActive, setActive] = useState(favorited)
  const [counter, setCounter] = useState(quantity)
  const [isOpenPopup, setOpenPopup] = useState(false)

  const { role } = useAppSelector((state) => state.user)

  const iconStyles = classnames(styles.icon, {
    [styles.icon_active]: isActive,
  })

  const handleToggleFavorite = () => {
    if (role === 'guest') {
      return setOpenPopup(true)
    }
    if (isActive) {
      setActive(false)
      setCounter(counter - 1)
      dispatch(setTheArticleUnfavorite(slug))
    } else {
      setActive(true)
      setCounter(counter + 1)
      dispatch(setTheArticleFavorite(slug))
    }
  }

  return (
    <>
      <div className={styles.body} onClick={handleToggleFavorite}>
        <IconLike className={iconStyles} />
        <div className={styles.counter}>{counter}</div>
      </div>
      {role === 'guest' && (
        <Popup isOpen={isOpenPopup} onClose={() => setOpenPopup(false)}>
          <div className={styles.popup}>
            <p>Войдите в систему, чтобы отмечать понравившиеся статьи</p>
            <div className={styles.btns}>
              <Button
                type='button'
                small
                typeView='text'
                onClick={() => setOpenPopup(false)}
              >
                отмена
              </Button>
              <Button
                type='button'
                small
                typeView='primary'
                onClick={() => navigate('/login')}
              >
                войти
              </Button>
            </div>
          </div>
        </Popup>
      )}
    </>
  )
}
