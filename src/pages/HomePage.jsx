import { useState } from 'react'
import { Link } from 'react-router-dom'
import Popup from 'reactjs-popup'
import NewProp from '../components/NewProp'

export default function HomePage() {

  const [display, setDisplay] = useState(false)

  return (
    <div className='HomePage'>
      <main>
        <h1>
            Select Property
        </h1>
        <ul>
            <li>
                25 WillyWonka Way, Wonkaworld, Great Britain
            </li>
            <li>
              Test
            </li>
        </ul>
        {/* <Link to='/newproperty' style={{textDecoration: 'none', color: 'darkslateblue'}}> */}
        {/* </Link> */}
        {/* <button onClick={() => setDisplay(true)}>
          + New Property
        </button> */}
        <Popup trigger={<button>+ New Property</button>} modal nested>
          {close => (
            <div className='modal'>
              <button id='close' onClick={() => close()}>
                X
              </button>
              <NewProp close={close}/>
            </div>
          )}
        </Popup>
      </main>
    </div>
  )
}
