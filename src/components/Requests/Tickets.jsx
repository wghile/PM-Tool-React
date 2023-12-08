export default function Tickets({request, property}) {

  const index = property.requests.indexOf(request)
  const tickets = [...document.querySelectorAll('.Tickets')]
  
  tickets.forEach((ticket) => {
    const status = ticket.querySelector('#list-status')
    if(status.textContent === 'Status: Open'){
      ticket.style.backgroundColor = 'green'
    }else if(status.textContent === 'Status: Pending'){
      ticket.style.backgroundColor = 'lightyellow'
    }else if(status.textContent === 'Status: Closed'){
      ticket.style.backgroundColor = 'midnightblue'
    }else{
      ticket.style.backgroundColor = 'grey'
    }
  })
  
  // const singleTicket = document.querySelector('.Tickets')
  // const flipTicket = () => {
  //   singleTicket.animate([
  //     {transform: "rotateY(180deg)"}
  //   ],
  //   {
  //     duration: 2000,
  //     fill: "forwards"
  //   })
  // }

  return (
    <div className='Tickets'>
      <nav>
        <h1>
          Ticket ID: <div>{index + 1}</div>
        </h1>
        <h2>
          Date Notified: <div>{request.date}</div>
        </h2>
      </nav>
      <main>
        <ul>
          <li id='list-status'>
            Status: {request.status}
          </li>
          <li id='list-location'>
            Location: {request.location}
          </li>
          <li id='list-source'>
            Source: {request.source}
          </li>
          <li id='list-description'>
            Description: 
            <p>
              {request.description}
            </p>
          </li>
        </ul>
      </main>
    </div>
  )
}
