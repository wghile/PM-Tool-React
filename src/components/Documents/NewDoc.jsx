import { useState } from 'react'
import { updateFunction } from '../../services/property-api'

export default function NewDoc({close, property}) {

  const id = property._id
  
  const dateNow = new Date()
  const formatMin = () => {
    if(dateNow.getMinutes() >= 0 && dateNow.getMinutes() <= 9){
      return `0${dateNow.getMinutes()}`
    }else{
      return dateNow.getMinutes()
    }
  }
  const timestamp = () => {
    let formattedDate = `${dateNow.getMonth() + 1}/${dateNow.getDate()}/${dateNow.getFullYear()} ${dateNow.getHours()}:${formatMin()}`
    return formattedDate
  }

  const [address, setAddress] = useState(property.address)
  const [city, setCity] = useState(property.city)
  const [zip, setZip] = useState(property.zip)
  const [country, setCountry] = useState(property.country)
  const [name, setName] = useState(property.name)
  const [docs, setDocs] = useState(property.docs)
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')
  const [updatedAt, setUpdatedAt] = useState(timestamp())

  const newDoc = {
    title,
    url, 
    updatedAt
  }

  function inputDoc(){
    const newDocArray = property.docs.splice(0, 0, newDoc)
    setDocs(newDocArray)
  }
  
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
          <div style={{fontSize: '13px', lineHeight: '0.4in', textAlign: 'center', color: 'red'}}>
            Do Not Include <em>https://</em> in url
          </div>
        </div>
      </form>
      <button onClick={() => {
        inputDoc()
        updateFunction(id, updates)
        close()
      }}>
        Save
      </button>
    </div>
  )
}
