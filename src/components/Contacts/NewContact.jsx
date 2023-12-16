import { useState } from 'react'
import { addNewContact } from '../../services/contact-api'

export default function NewDoc({close}) {

  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [occupation, setOccupation] = useState('')
  const [company, setCompany] = useState('')

  const newContact = {
    name,
    number,
    occupation,
    company
  }

  return (
    <div className='NewDoc'>
      <h1>
        New Contact
      </h1>
      <form>
        <div id='name'>
          Name: <input type='text' value={name} onChange={(evt) => setName(evt.target.value)}/>
        </div>
        <div id='number'>
          Number: <input type='text' value={number} onChange={(evt) => setNumber(evt.target.value)}/>
          {/* <div style={{fontSize: '13px', lineHeight: '0.4in', textAlign: 'center', color: 'red'}}>
            Do Not Include <em>https://</em> in number
          </div> */}
        </div>
        <div id='occupation'>
          Occupation/Field: <input type='text' value={occupation} onChange={(evt) => setOccupation(evt.target.value)}/>
        </div>
        <div id='company'>
          Company: <input type='text' value={company} onChange={(evt) => setCompany(evt.target.value)}/>
        </div>
      </form>
      <button onClick={() => {
        addNewContact(newContact)
        close()
      }}>
        Save
      </button>
    </div>
  )
}
