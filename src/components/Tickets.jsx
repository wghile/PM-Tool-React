export default function Tickets() {

  const ticket = document.querySelector('.Tickets')

  const flipTicket = () => {
    ticket.animate([
      {transform: "rotateY(180deg)"}
    ],
    {
      duration: 2000,
      fill: "forwards"
    })
  }

  return (
    <div className='Tickets' onClick={() => {flipTicket()}}>
      <nav>
        <h1>
          Ticket ID: <div>4567</div>
        </h1>
        <h2>
          Date Notified: <div>12/12/2023</div>
        </h2>
      </nav>
      <main>
        <ul>
          <li id='list-status'>
            Status: Open
          </li>
          <li id='list-location'>
            Location:
          </li>
          <li id='list-source'>
            Source: 
          </li>
          <li id='list-description'>
            Description: 
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sunt aspernatur tempora eos illo voluptate expedita similique eum debitis omnis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed ducimus in quo, quas eos dicta illum pariatur soluta atque fuga laudantium neque ipsum voluptatum asperiores voluptate aliquam nobis iusto eius tenetur cumque distinctio expedita voluptas! Neque ducimus corporis alias doloribus.
            </p>
          </li>
        </ul>
      </main>
    </div>
  )
}
