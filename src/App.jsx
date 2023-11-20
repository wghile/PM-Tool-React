import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import List from './pages/PropertyList'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import StartPage from './pages/StartPage'
import Dashboard from './pages/Dashboard'
import AppNav from './components/App-Nav'
import DocLinks from './components/DocLinks'

function App() {

  const [list, setList] = useState([])

  return (
    <div className='App'>
      <AppNav />
      <Routes>
        <Route path='/' element={<StartPage />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/home' element={<List setList={setList} list={list}/>} />
        <Route path='/:id/dashboard/*' element={<Dashboard properties={list}/>} />
      </Routes>
    </div>
  )
}

export default App
