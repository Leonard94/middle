import { RecentArticles } from './components/RecentArticles/RecentArticles'
import { Content } from '../../components/Content/Content'

export const RecentArticlesPage = () => {
  return (
    <Content isNavigateVisible isShowAuthControls>
      <RecentArticles />
    </Content>
  )
}
