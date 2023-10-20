import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

export default function DeletePrompt({close}) {

  const BASE_URL = 'http://localhost:3001'

  const params = useParams()
  const id = params.id
  
  async function removeProperty() {
    try{
      await axios({
        url: `${BASE_URL}/${id}`,
        method: 'DELETE'
      })
    }catch(error){
      console.error(error)
    }
  }

  return (
    <div className='DeletePrompt'>
      <h1>Are you sure you want to remove this property?</h1>
      <h2>This action cannot be undone</h2>
      <div>
        <button id='yes-button'>
          <Link to='/home' onClick={() => removeProperty()} style={{color: 'black', textDecoration: 'none'}}>
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
