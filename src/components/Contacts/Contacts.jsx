import Popup from 'reactjs-popup'
import { useEffect, useState } from 'react'
import { getContactList } from '../../services/contact-api'
import ContactItem from './Contact-Item'
import NewContact from './NewContact'

export default function Contacts() {

  const [list, setList] = useState([])

  useEffect(() => {
    getContactList().then((response) => {
      setList(response.data)
    }), []
  })
  
  list.sort((a,b) => {
    if(a.name < b.name){
      return -1
    }else if(a.name > b.name){
      return 1
    }else{
      return 0
    }
  })

  return (
    <div className='Contacts'>
      <Popup trigger={<span id='plus-sign'>+</span>} modal nested>
        {close => (
          <div className='modal modal-Contacts'>
            <button id='close' onClick={() => close()}>
              X
            </button>
            <NewContact close={close} contacts={list}/>
          </div>
        )}
      </Popup>
        <div id='book-container'>
          <h1>
            Contacts
          </h1>
          <input placeholder='Search by Occupation'/>
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
