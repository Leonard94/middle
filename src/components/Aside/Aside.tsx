import { AuthControls } from './AuthControls/AuthControls'
import { PopularTags } from '../PopularTags/PopularTags'

import styles from './styles.module.scss'

type TProps = {
  isShowAuthControls?: boolean
}

export const Aside: React.FC<TProps> = ({ isShowAuthControls }) => {
  return (
    <aside className={styles.aside}>
      <div className={styles.inner}>
        {isShowAuthControls && <AuthControls />}
        <PopularTags />
      </div>
    </aside>
  )
}
