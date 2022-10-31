import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import { useAppDispatch } from '../../store/hooks'
import { getUser } from '../../store/data/user/userSlice'

import { HomePage } from '../../pages/HomePage/HomePage'
import { RecentArticlesPage } from '../../pages/RecentArticlesPage/RecentArticlesPage'
import { AuthPage } from '../../pages/AuthPage/AuthPage'
import { DetailArticlePage } from '../../pages/DetailArticlePage/DetailArticlePage'

export const App = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const tokenInLocalStorage = localStorage.getItem('Token')

    if (tokenInLocalStorage) {
      dispatch(getUser())
    }
  }, [dispatch])

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/recent' element={<RecentArticlesPage />} />
        <Route path='/login' element={<AuthPage />} />
        <Route path='/register' element={<AuthPage />} />
        <Route path='/article/:slug' element={<DetailArticlePage />} />
        <Route
          path='/createnewarticle'
          element={<p>Извините, раздел в разработке 😊</p>}
        />
        <Route
          path='/favorites'
          element={<p>Извините, раздел в разработке 😐</p>}
        />
        <Route path='*' element={<p>Такой страницы не существует</p>} />
      </Routes>
    </>
  )
}
