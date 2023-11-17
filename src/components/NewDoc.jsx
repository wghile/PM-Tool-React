import { useState } from 'react'
// import { addNewProperty } from '../services/property-api'

export default function NewDoc({close, docs}) {

  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')

  let dateNow = new Date()
  
  const newDoc = {
    title,
    url,
    timestamp: `${dateNow.getMonth() + 1}/${dateNow.getDate()}/${dateNow.getFullYear()} ${dateNow.getHours()}:${dateNow.getMinutes()}`
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
        docs.splice(0, 0, newDoc)
        console.log(docs)
        close()
      }}>
        Save
      </button>
    </div>
  )
}
