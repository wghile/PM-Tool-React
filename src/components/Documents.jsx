import Popup from 'reactjs-popup'
import DocumentCard from './DocumentCard'
import NewDoc from './NewDoc'

export default function Documents({docs, property}) {

  // console.log(docs)
  
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
          // console.log(docs)
          return(
            <DocumentCard property={property} doc={doc}/>
          )
        })}
      </main>
    </div>
  )
}
