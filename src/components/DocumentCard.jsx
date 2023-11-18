import { updateFunction } from '../services/property-api'
import { useState } from 'react'

export default function DocumentCard({doc, property}) {

    const [address, setAddress] = useState(property.address)
    const [city, setCity] = useState(property.city)
    const [zip, setZip] = useState(property.zip)
    const [country, setCountry] = useState(property.country)
    const [name, setName] = useState(property.name)
    const [docs, setDocs] = useState(property.docs)

    const id = property._id

    function findDoc(){
        const found = docs.findIndex((el) => {
            return el._id === doc._id
        })
        return found
    }

    function removeDoc(){
        let index = findDoc()
        const docArray = docs.splice(index, 1)  // returns new array with removed doc
        setDocs(docs) 
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
    <div className='DocCard'>
        <div id='img-container'>
            <img src='/images/docs.png' alt='Document Stock Photo'/>
        </div>
        <div id='text'>
            <div id='actions'>
                <img src='/images/edit-icon.png' alt='Edit Logo'/>
                <img 
                    src='/images/trashcan.png' 
                    alt='Trash Can'
                    onClick={() => {
                        findDoc()
                        removeDoc()
                        updateFunction(id, updates)
                    }}
                />
            </div>
            <h1>
                {doc.title}
            </h1>
            <p>
                Updated: {doc.updatedAt}
            </p>
        </div>
    </div>
  )
}
