import { useState } from 'react'
import { addNewProperty } from '../services/api'

export default function NewProp({close}) {

  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [zip, setZip] = useState('')
  const [country, setCountry] = useState('')
  const [name, setName] = useState('')

  const newProperty = {
    address,
    city,
    zip,
    country,
    name
  }

  return (
    <div className='NewProp'>
      <h1>
        New Property
      </h1>
      <form>
        <div id='street'>
          Street Address: <input type='text' value={address} onChange={(evt) => setAddress(evt.target.value)}/>
        </div>
        <div id='city'>
          City: <input type='text' value={city} onChange={(evt) => setCity(evt.target.value)}/>
        </div>
        <div id='zip'>
          Zip Code: <input type='number' value={zip} onChange={(evt) => setZip(evt.target.value)}/>
        </div>
        <div id='country'>
          Country: <input type='text' value={country} onChange={(evt) => setCountry(evt.target.value)}/>
        </div>
        <div id='name'>
          Nickname: <input type='text' placeholder='Optional' value={name} onChange={(evt) => setName(evt.target.value)}/>
        </div>
      </form>
      <button onClick={() => {
        addNewProperty(newProperty)
        close()
      }}>
        Save
      </button>
    </div>
  )
}
