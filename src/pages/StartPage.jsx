import { Link } from 'react-router-dom'

export default function StartPage() {
  return (
    <div className='StartPage'>
        <main>
            <h1>
                Welcome to the Property Management Tool (PMT)
            </h1>
            <h3>
                A place to store important documents, track maintenance requests, etc. to help <em>you</em> manage your property
            </h3>
            <div>
                <div id='circle'>
                    <img id='house' src='/images/house.png' alt='house'/>
                    <img id='repair' src='/images/repair.png' alt='repair'/>
                    <img id='rent' src='/images/rent.png' alt='rent'/>
                    <img id='doc' src='/images/documents.png' alt='documents'/>
                    <img id='budget' src='/images/budget.png' alt='budget'/>
                </div>
            </div>
        </main>
        <div id = 'buttons'>
            <div>
                Already Registered?
                <Link to='/login' style={{textDecoration: 'none', color: 'azure'}}>
                    Log In
                </Link>
            </div>
            <div>
                New User?
                <Link to='/signup' style={{textDecoration: 'none', color: 'azure'}}>
                    Sign Up
                </Link>
            </div>
        </div>
    </div>
  )
}
