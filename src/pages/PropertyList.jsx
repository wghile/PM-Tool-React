import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getPropertyList } from '../services/property-api'
import Popup from 'reactjs-popup'
import NewProp from '../components/NewProp'
import EditProp from '../components/EditProp'

export default function HomePage({setList, list}) {

  useEffect(() => {
    getPropertyList().then((response) => {
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
