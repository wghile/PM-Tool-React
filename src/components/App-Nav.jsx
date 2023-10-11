import { Link } from 'react-router-dom'

export default function AppNav() {
  return (
    <div className='AppNav'>
        <h1>
          <Link to='/home' style={{textDecoration: 'none'}}>
            PMT
          </Link>
        </h1>
    </div>
  )
}
