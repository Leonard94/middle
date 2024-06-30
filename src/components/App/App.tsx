import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { useAppDispatch } from '../../store/hooks'
import { getUser } from '../../store/data/user/userSlice'

import { AuthPage } from '../../pages/AuthPage/AuthPage'
import { HomePage } from '../../pages/HomePage/HomePage'
import { DetailArticlePage } from '../../pages/DetailArticlePage/DetailArticlePage'
import { ArticlesPage } from '../../pages/ArticlesPage/ArticlesPage'

export const App = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const tokenInLocalStorage = localStorage.getItem('Token')

    if (tokenInLocalStorage) {
      dispatch(getUser())
    }
  }, [dispatch])

  return (
    <Router basename='/my-app'>
      <Routes>
        <Route path='/login' element={<AuthPage />} />
        <Route path='/register' element={<AuthPage />} />

        <Route path='/' element={<HomePage />} />
        <Route path='/article/:slug' element={<DetailArticlePage />} />
        <Route path='/articles/:type' element={<ArticlesPage />} />
        <Route path='/articles/:type/:tag' element={<ArticlesPage />} />
        <Route
          path='/createnewarticle'
          element={<p>Извините, функционал в разработке 😊</p>}
        />
        <Route path='*' element={<p>Такой страницы не существует</p>} />
      </Routes>
    </Router>
  )
}
