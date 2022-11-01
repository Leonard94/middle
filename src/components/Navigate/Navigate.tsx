import { Link, NavLink } from 'react-router-dom'

import { Tooltip } from '../Tooltip/Tooltip'

import { ReactComponent as IconHome } from '../../assets/icons/home.svg'
import { ReactComponent as IconRecent } from '../../assets/icons/recent.svg'
import { ReactComponent as IconCollection } from '../../assets/icons/collection.svg'

import styles from './styles.module.scss'

export const Navigate = () => {
  const setActive = ({ isActive }: any) => (isActive ? styles.active : '')

  return (
    <nav className={styles.navigate}>
      <ul className={styles.inner}>
        <li>
          <Tooltip title='На главную'>
            <Link to='/'>
              <IconHome />
            </Link>
          </Tooltip>
        </li>
        <li>
          <Tooltip title='Недавние'>
            <NavLink to='/articles/recent' className={setActive}>
              <IconRecent />
            </NavLink>
          </Tooltip>
        </li>
        <li>
          <Tooltip title='Фавориты'>
            <NavLink to='/articles/favorites' className={setActive}>
              <IconCollection />
            </NavLink>
          </Tooltip>
        </li>
      </ul>
    </nav>
  )
}
