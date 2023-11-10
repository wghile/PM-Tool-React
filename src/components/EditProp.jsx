import { useState } from 'react'
import { updateFunction } from '../services/api'

export default function EditProp({close, property}) {

  const [address, setAddress] = useState(property.address)
  const [city, setCity] = useState(property.city)
  const [zip, setZip] = useState(property.zip)
  const [country, setCountry] = useState(property.country)
  const [name, setName] = useState(property.name)

  const updates = {
    address,
    city,
    zip,
    country,
    name
  }

  const id = property._id

  return (
    <div className='NewProp'>
      <h1>
        Edit Property
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
        updateFunction(updates, id)
        close()
      }}>
        Save Changes
      </button>
    </div>
  )
}
