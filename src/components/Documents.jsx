import Popup from 'reactjs-popup'
import DocumentCard from './DocumentCard'
import NewDoc from './NewDoc'

export default function Documents({docs, property}) {
  
  return (
    <div className='Docs'>
      <Popup trigger={<button>Upload New Document</button>} modal nested>
        {close => (
          <div className='modal modal-Docs'>
            <button id='close' onClick={() => close()}>
              X
            </button>
            <NewDoc close={close} property={property}/>
          </div>
        )}
      </Popup>
      <main>
        {docs?.map((doc) => {
          return(
            <DocumentCard key={doc._id} property={property} doc={doc}/>
          )
        })}
      </main>
    </div>
  )
}
