import { Link, useParams, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Popup from 'reactjs-popup'
import DeletePrompt from '../components/DeletePrompt'
import Temporary from '../components/Temporary'
import Services from '../components/Services'
import Documents from '../components/Documents'

export default function Dashboard({properties}) {

    const params = useParams()
    const id = params.id

    const property = properties.find((item) => item._id === id)
    console.log(property)

  return (
    <div className='Dashboard'>
        <header>
            <Link to='/home' id='return-button' style={{textDecoration: 'none', color: 'beige'}}>
                Exit Dashboard
            </Link>
            <Popup 
                trigger=
                    {<span id='settings'>
                        <img src='/images/settings.png' alt='Settings Icon'/>
                        Settings
                    </span>}
                position='bottom'
                on='click'
                arrow={false}
                closeOnDocumentClick={false}
            >
                <div id='menu'>
                    <div className='dropdown'>
                        Account Settings
                    </div>
                    <div className='dropdown'>
                        Contact Us
                    </div>
                    <Popup trigger={<div className='dropdown' id='delete' style={{fontWeight: 'bold', color: 'red'}}>DELETE</div>} modal nested>
                        {close => (
                            <DeletePrompt close={close}/>
                        )}
                    </Popup>
                    <div className='dropdown'>
                        <Link to='/' style={{textDecoration: 'none', color: 'beige'}}>
                            Log Out
                        </Link>
                    </div>
                </div>
            </Popup>
        </header>
        <nav>
            <span className='slash'>/</span>
            <Link to={`/${id}/dashboard`} className='dashboard-sublinks' style={{textDecoration: 'none', color: 'azure'}}>
                Home
            </Link>
            <span className='slash'>/</span>
            <Link to={`/${id}/dashboard/service`} className='dashboard-sublinks' style={{textDecoration: 'none', color: 'azure'}}>
                Service Requests
            </Link>
            <span className='slash'>/</span>
            {/* <Link to={`/${id}/dashboard/budget`} style={{textDecoration: 'none', color: 'azure'}}>
                Budget
            </Link>
            <span className='slash'>/</span> */}
            <Link to={`/${id}/dashboard/docs`} className='dashboard-sublinks' style={{textDecoration: 'none', color: 'azure'}}>
                Document Center
            </Link>
        </nav>
        <Routes>
            <Route path='/' element={<Temporary />} />
            <Route path='/service' element={<Services />} />
            <Route path='/docs' element={<Documents />} />
        </Routes>
    </div>
  )
}
