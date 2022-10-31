import { Link } from 'react-router-dom'

import { Tooltip } from '../Tooltip/Tooltip'

import { ReactComponent as IconHome } from '../../assets/icons/home.svg'
import { ReactComponent as IconRecent } from '../../assets/icons/recent.svg'
import { ReactComponent as IconCollection } from '../../assets/icons/collection.svg'

import styles from './styles.module.scss'

export const Navigate = () => {
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
            <Link to='/createnewarticle'>
              <IconRecent />
            </Link>
          </Tooltip>
        </li>
        <li>
          <Tooltip title='Фавориты'>
            <Link to='/favorites'>
              <IconCollection />
            </Link>
          </Tooltip>
        </li>
      </ul>
    </nav>
  )
}
