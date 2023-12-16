import { deleteContact } from '../../services/contact-api'

export default function ContactItem({contact}) {

  function company(){
    return(
      <p>
        <span>
          <em>{contact.occupation}</em>, {contact.company}
        </span>
        <img src='images/trashcan2.jpeg' width={'20px'} onClick={() => {
          deleteContact(contact._id)}}/>
      </p>
    )
  }

  function noCompany(){
    return(
      <p>
        <span>
          <em>{contact.occupation}</em>
        </span>
        <img src='images/trashcan2.jpeg' width={'20px'} onClick={() => {
          deleteContact(contact._id)}}/>
      </p>
    )
  }

  return (
    <div className='ContactItem'>
        <div id='line1'>
          <p>
            {contact.name} 
          </p>
          <span>
            {contact.number}
          </span>
        </div>
        <div id='line2'>
          {contact.company ? company() : noCompany()}
        </div>
    </div>
  )
}
