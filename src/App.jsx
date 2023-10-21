import { Route, Routes } from 'react-router-dom'
import './App.css'
import List from './pages/PropertyList'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import StartPage from './pages/StartPage'
import Dashboard from './pages/Dashboard'
import AppNav from './components/App-Nav'
import AppFooter from './components/App-Footer'
import Temporary from './components/Temporary'
import Services from './components/Services'
import Documents from './components/Documents'

function App() {

  return (
    <div className='App'>
      <AppNav />
      <Routes>
        <Route path='/' element={<StartPage />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/home' element={<List />} />
        <Route path='/:id/dashboard/*' element={<Dashboard />} />
        {/* <Route path='/:id/dashboard' element={<Temporary />} />
        <Route path='/:id/dashboard/service' element={<Services />} />
        <Route path='/:id/dashboard/docs' element={<Documents />} /> */}
      </Routes>
      <AppFooter />
    </div>
  )
}

export default App
