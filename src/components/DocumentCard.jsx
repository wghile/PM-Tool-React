import Popup from 'reactjs-popup'
import { updateFunction } from '../services/property-api'
import { useState } from 'react'
import EditDoc from './EditDoc'

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
        <div id='img-container' onClick={() => openLink()}>
            <a href= {`//${doc.url}`} target='_blank'>
                <img src='/images/docs.png' alt='Document Stock Photo'/>
            </a>
        </div>
        <div id='text'>
            <div id='actions'>
                <Popup trigger={<img src='/images/edit-icon.png' alt='Edit Logo'/>} modal nested>
                    {close => (
                        <div className='modal modal-Docs'>
                            <button id='close' onClick={() => close()}>
                                X
                            </button>
                            <EditDoc close={close} property={property} docIndex={findDoc()}/>
                        </div>
                    )}
                </Popup>
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
