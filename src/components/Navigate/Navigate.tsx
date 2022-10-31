import { Link } from 'react-router-dom'

import { ReactComponent as IconHome } from '../../assets/icons/home.svg'
import { ReactComponent as IconRecent } from '../../assets/icons/recent.svg'
import { ReactComponent as IconCollection } from '../../assets/icons/collection.svg'

import styles from './styles.module.scss'

export const Navigate = () => {
  return (
    <nav className={styles.navigate}>
      <ul className={styles.inner}>
        <li>
          <Link to='/'>
            <IconHome />
          </Link>
        </li>
        <li>
          <Link to='/createnewarticle'>
            <IconRecent />
          </Link>
        </li>
        <li>
          <Link to='/favorites'>
            <IconCollection />
          </Link>
        </li>
      </ul>
    </nav>
  )
}
