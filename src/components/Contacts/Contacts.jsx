import { useEffect, useState } from 'react'
import { getContactList } from '../../services/contact-api'
import ContactItem from './Contact-Item'

export default function Contacts() {

  const [list, setList] = useState([])

  useEffect(() => {
    getContactList().then((response) => {
      setList(response.data)
    }), []
  })

  return (
    <div className='Contacts'>
        <div id='book-container'>
          <h1>
            Contacts
          </h1>
          <input />
          <div id='contacts-container'>
            {list.map((item) => {
              return(
                <ContactItem contact={item}/> 
              )
            })}
          </div>
        </div>
    </div>
  )
}
