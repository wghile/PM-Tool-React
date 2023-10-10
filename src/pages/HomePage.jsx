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
                25 WillyWonka Way, Wonkaworld, Great Britain
            </li>
            <li>
              Test
            </li>
        </ul>
        <Link to='/newproperty' style={{textDecoration: 'none', color: 'darkslateblue'}}>
          + New Property
        </Link>
      </main>
    </div>
  )
}
