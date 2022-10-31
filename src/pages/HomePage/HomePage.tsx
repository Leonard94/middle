import { HomeHeader } from './components/HomeHeader/HomeHeader'
import { Banner } from './components/Banner/Banner'
import { PopularArticles } from './components/PopularArticles/PopularArticles'
import { Content } from '../../components/Content/Content'

export const HomePage = () => {
  return (
    <>
      <HomeHeader />
      <Banner />
      <Content>
        <PopularArticles />
      </Content>
    </>
  )
}
