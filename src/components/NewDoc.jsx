import { useState } from 'react'
import { updateFunction } from '../services/property-api'

export default function NewDoc({close, property}) {

  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')

  const [address, setAddress] = useState(property.address)
  const [city, setCity] = useState(property.city)
  const [zip, setZip] = useState(property.zip)
  const [country, setCountry] = useState(property.country)
  const [name, setName] = useState(property.name)
  const [docs, setDocs] = useState([])

  // let dateNow = new Date()
  
  const newDoc = {
    title,
    url
    // timestamp: `${dateNow.getMonth() + 1}/${dateNow.getDate()}/${dateNow.getFullYear()} ${dateNow.getHours()}:${dateNow.getMinutes()}`
  }

  // setDocs(newDoc)
  
  const updates = {
    address,
    city,
    zip,
    country,
    name,
    docs
  }

  return (
    <div className='NewDoc'>
      <h1>
        New Document
      </h1>
      <form>
        <div id='title'>
          Document Title: <input type='text' value={title} onChange={(evt) => setTitle(evt.target.value)}/>
        </div>
        <div id='url'>
          URL: <input type='text' value={url} onChange={(evt) => setUrl(evt.target.value)}/>
        </div>
      </form>
      <button onClick={() => {
        updateFunction(updates)
        console.log(updates)
        console.log(property)
        close()
      }}>
        Save
      </button>
    </div>
  )
}
