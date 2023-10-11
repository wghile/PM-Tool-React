import Popup from 'reactjs-popup'
import NewProp from '../components/NewProp'
import { Link } from 'react-router-dom'

export default function HomePage() {

  return (
    <div className='HomePage'>
      <main>
        <h1>
            Select Property
        </h1>
        <ul>
            <li>
              <Link to='/dashboard' style={{textDecoration: 'none', color: 'gray'}}>
                25 WillyWonka Way, Wonkaworld, Great Britain
              </Link>
            </li>
            <li>
              <Link to='/dashboard' style={{textDecoration: 'none', color: 'gray'}}>
                Test
              </Link>
            </li>
        </ul>
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
