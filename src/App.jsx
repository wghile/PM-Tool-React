import { Route, Routes} from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import StartPage from './pages/StartPage'
import AppNav from './components/App-Nav'
import AppFooter from './components/App-Footer'

function App() {

  return (
    <div className='App'>
      <AppNav />
      <Routes>
        <Route path='/' element={<StartPage />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/home' element={<HomePage />} />
      </Routes>
      <AppFooter />
    </div>
  )
}

export default App
