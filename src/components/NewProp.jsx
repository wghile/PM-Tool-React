import { useState } from 'react'
import axios from 'axios'

export default function NewProp({close}) {

  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [zip, setZip] = useState('')
  const [country, setCountry] = useState('')
  const [name, setName] = useState('')

  const BASE_URL = 'http://localhost:3001'

  // const addNewProperty = () => {
  //   const newProperty = {
  //     address: address,
  //     city: city,
  //     zip: zip,
  //     country: country,
  //     name: name,
  //   }
  //   console.log(newProperty)
  //   axios.post(BASE_URL, newProperty).then((response) => {
  //     console.log(response.data)
  //   })
  // }
  async function addNewProperty() {
    try{
      const newProperty = {
        address,
        city,
        zip,
        country,
        name,
      }
      console.log(newProperty)
      // await axios.post(BASE_URL, {newProperty})
      await axios({
          url: BASE_URL,
          method: 'POST',
          data: newProperty
      })
      // if(res.status === 200){
      //     console.log(res)
      //     return res.data
      // }
    }catch(error){
      console.log(error)
    }
  }

  return (
    <div className='NewProp'>
      <h1>
        New Property
      </h1>
      <form action='POST'>
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
        addNewProperty()
        close()
      }}>
        Save
      </button>
    </div>
  )
}
