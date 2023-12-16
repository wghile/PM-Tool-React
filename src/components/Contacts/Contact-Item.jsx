export default function ContactItem({contact}) {

  function company(){
    return(
      <p>
        <span>{contact.occupation}</span>, {contact.company}
      </p>
    )
  }

  function noCompany(){
    return(
      <p>
        <span>{contact.occupation}</span>
      </p>
    )
  }

  return (
    <div className='ContactItem'>
        <div>
          <p>
            {contact.name} 
          </p>
          <span>
            {contact.number}
          </span>
        </div>
        {contact.company ? company() : noCompany()}
    </div>
  )
}
