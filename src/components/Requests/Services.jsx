import Popup from 'reactjs-popup'
import Tickets from './Tickets'
import NewReq from './NewReq'

export default function Services({property}) {

  return (
    <div className='Services'>
      <Popup trigger={<button>New Request</button>} modal nested>
        {close => (
          <div className='modal modal-Reqs'>
            <button id='close' onClick={() => close()}>
              X
            </button>
            <NewReq close={close} property={property}/>
          </div>
        )}
      </Popup>
      <main id='tickets-container'>
        {property.requests.map((request) => {
          return(
            <Tickets key={request._id} request={request} property={property}/>
          )
        })}
      </main>
    </div>
  )
}
