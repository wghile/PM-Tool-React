import { useState, useEffect } from 'react'
// import { getDocuments } from '../services/documents-api'
import DocumentCard from './DocumentCard'

export default function Documents() {

  const [docs, setDocs] = useState([])

  useEffect(() => {
    getDocuments().then((response) => {
      setDocs(response.data)
    }), []
  })
  
  return (
    <div className='Docs'>
      <button>
        Upload New Document
      </button>
      <main>
        {docs.map((doc) => {
          return(
            <DocumentCard doc={doc}/>
          )
        })}
      </main>
    </div>
  )
}
