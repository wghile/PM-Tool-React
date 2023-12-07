import { useState } from 'react'
import { updateFunction } from '../services/property-api'

export default function newReq({close, property}) {

  const id = property._id
  
  const dateNow = new Date()
  // const formatMin = () => {
  //   if(dateNow.getMinutes() >= 0 && dateNow.getMinutes() <= 9){
  //     return `0${dateNow.getMinutes()}`
  //   }else{
  //     return dateNow.getMinutes()
  //   }
  // }
  // const timestamp = () => {
  //   let formattedDate = `${dateNow.getMonth() + 1}/${dateNow.getDate()}/${dateNow.getFullYear()}`
  //   return formattedDate
  // }

  const [address, setAddress] = useState(property.address)
  const [city, setCity] = useState(property.city)
  const [zip, setZip] = useState(property.zip)
  const [country, setCountry] = useState(property.country)
  const [name, setName] = useState(property.name)
  const [docs, setDocs] = useState(property.docs)
  const [requests, setRequests] = useState(property.requests)
  const [date, setDate] = useState('')
  const [status, setStatus] = useState('')
  const [location, setLocation] = useState('')
  const [source, setSource] = useState('')
  const [description, setDescription] = useState('')

  const newReq = {
    date,
    status, 
    location,
    source,
    description
  }

  function submitReq(){
    const newReqArray = requests.push(newReq)
    setRequests(newReqArray)
  }
  
  const updates = {
    address,
    city,
    zip,
    country,
    name,
    docs,
    requests
  }
    
  return (
    <div className='NewReq'>
      <h1>
        New Request
      </h1>
      <form>
        <div id='date'>
          Date Notified: <input type='date' value={date} onChange={(evt) => setDate(evt.target.value)}/>
        </div>
        <div id='status'>
          Status: <input type='text' placeholder='Open, Pending, or Closed' value={status} onChange={(evt) => setStatus(evt.target.value)} style={{width: '200px'}}/>
        </div>
        <div id='location'>
          Location: <input type='text' placeholder='Basement, Kitchen, etc.' value={location} onChange={(evt) => setLocation(evt.target.value)} style={{width: '200px'}}/>
        </div>
        <div id='source'>
          Source: <input type='text' placeholder='Light, Heater, Chimney, etc.' value={source} onChange={(evt) => setSource(evt.target.value)} style={{width: '230px'}}/>
        </div>
        <div id='description'>
          Description: <textarea type='text' value={description} onChange={(evt) => setDescription(evt.target.value)} style={{width: '200px', height: '100px'}}/>
        </div>
      </form>
      <button onClick={() => {
        submitReq()
        updateFunction(id, updates)
        close()
      }}>
        Save
      </button>
    </div>
  )
}
