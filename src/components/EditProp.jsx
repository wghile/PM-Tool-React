import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


export default function EditProp({close, property}) {

  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [zip, setZip] = useState('')
  const [country, setCountry] = useState('')
  const [name, setName] = useState('')

  const [propertyData, setPropertyData] = useState({})

  const BASE_URL = 'http://localhost:3001'

  useEffect(() => {
    axios.get(`${BASE_URL}/${property._id}`).then((response) => {
      // setPropertyData(response.data)
      // console.log(response.data)
    }), []
  })

  const updateFunction = () => {
    const updatedProperty = {
      address: address,
      city: city,
      zip: zip,
      country: country,
      name: name,
    }
    axios.put(`${BASE_URL}/${property._id}`, updatedProperty).then((response) => {
      console.log(response.data)
      setPropertyData(response.data)
    })
  }

  return (
    <div className='NewProp'>
      <h1>
        Edit Property
      </h1>
      <form>
        <div id='street'>
          Street Address: <input type='text' defaultValue={property.address} onChange={(evt) => setAddress(evt.target.value)}/>
        </div>
        <div id='city'>
          City: <input type='text' defaultValue={property.city} onChange={(evt) => setCity(evt.target.value)}/>
        </div>
        <div id='zip'>
          Zip Code: <input type='number' defaultValue={property.zip} onChange={(evt) => setZip(evt.target.value)}/>
        </div>
        <div id='country'>
          Country: <input type='text' defaultValue={property.country} onChange={(evt) => setCountry(evt.target.value)}/>
        </div>
        <div id='name'>
          Nickname: <input type='text' placeholder='Optional' defaultValue={property.name} onChange={(evt) => setName(evt.target.value)}/>
        </div>
      </form>
      <button onClick={() => {
        close()
      }}>
        Save Changes
      </button>
    </div>
  )
}
