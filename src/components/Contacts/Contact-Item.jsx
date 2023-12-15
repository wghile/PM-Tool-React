export default function ContactItem({contact}) {

  return (
    <div className='ContactItem'>
        {contact.name} 
        Cell {contact.number} <br />
        {contact.occupation}, {contact.company}
    </div>
  )
}
