import { Link } from 'react-router-dom'

export default function AppNav() {
  return (
    <div className='AppNav'>
        <h1>
            PMT
        </h1>
        <h4>
          <Link to='/' style={{textDecoration: 'none'}}>
            Log Out
          </Link>
        </h4>
    </div>
  )
}
