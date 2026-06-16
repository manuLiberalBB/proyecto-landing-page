import './App.css'
import { lazy, Suspense, useEffect } from 'react'
import { Routes, Route } from 'react-router'
import { useAuth } from './store/authStore'

const HomePage = lazy(() => import('./pages/HomePage.jsx')); 
const LoginPage = lazy(() => import('./pages/LoginPage.jsx'));
const RegisterPage = lazy(() => import('./pages/RegisterPage.jsx'));
const ProfilePage = lazy(() => import('./pages/ProfilePage.jsx'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.jsx'));
const ProtectedRoute = lazy(() => import('./components/ProtectedRoute.jsx'));

function App() {
  const checkAuth = useAuth((state) => state.checkAuth);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <Suspense fallback={
      <div className="flex min-h-screen items-center justify-center text-sm uppercase tracking-widest text-neutral-500">
        Cargando...
      </div>
    }>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/register" element={<RegisterPage />}/>
        <Route path="/profile" element={
          <ProtectedRoute path="/login">
            <ProfilePage />
          </ProtectedRoute>
        } />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  )
}

export default App
