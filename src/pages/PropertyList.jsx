import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Popup from 'reactjs-popup'
import axios from 'axios'
import NewProp from '../components/NewProp'
import EditProp from '../components/EditProp'

export default function HomePage({setList, list}) {

  const BASE_URL = 'http://localhost:3001'

  useEffect(() => {
    axios.get(BASE_URL).then((response) => {
      setList(response.data)
    }), []
  })

  return (
    <div className='HomePage'>
      <main>
        <h1>
            Select Property
        </h1>
        <ul>
          {list.map((item) => {
            return (
              <li key={item._id}>
                <Link to={`/${item._id}/dashboard`} style={{textDecoration: 'none', color: 'gray'}}>
                  {item.name ? `📍 ${item.name}` : `📍 ${item.address}, ${item.city}, ${item.country}`}
                </Link>
                <Popup trigger={<span id='edit-button'>🖊️</span>} modal nested>
                  {close => (
                    <div className='modal'>
                      <button id='close' onClick={() => close()}>
                        X
                      </button>
                      <EditProp close={close} property={item}/>
                    </div>
                  )}
                </Popup>
              </li>
            )
          })}
        </ul>
        <Popup trigger={<button>+ New Property</button>} modal nested>
          {close => (
            <div className='modal'>
              <button id='close' onClick={() => close()}>
                X
              </button>
              <NewProp close={close} />
            </div>
          )}
        </Popup>
      </main>
    </div>
  )
}
