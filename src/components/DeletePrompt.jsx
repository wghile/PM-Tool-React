import { Link, useParams } from 'react-router-dom'
import { removeProperty } from '../services/property-api'

export default function DeletePrompt({close}) {

  const params = useParams()
  const id = params.id

  return (
    <div className='DeletePrompt'>
      <h1>Are you sure you want to remove this property?</h1>
      <h2>This action cannot be undone</h2>
      <div>
        <button id='yes-button'>
          <Link to='/home' onClick={() => removeProperty(id)} style={{color: 'black', textDecoration: 'none'}}>
            Yes
          </Link>
        </button>
        <button id='no-button' onClick={() => {
          close()
        }}>
          No
        </button>
      </div>
    </div>
  )
}
