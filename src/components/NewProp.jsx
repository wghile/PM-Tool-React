export default function NewProp({close}) {
  return (
    <div className='NewProp'>
      <h1>
        New Property
      </h1>
      <form>
        <div id='street'>
          Street Address: <input type='text'/>
        </div>
        <div id='city'>
          City: <input type='text'/>
        </div>
        <div id='zip'>
          Zip Code: <input type='number'/>
        </div>
        <div id='country'>
          Country: <input type='text'/>
        </div>
        <div id='name'>
          Nickname: <input type='text' placeholder='Optional'/>
        </div>
      </form>
      <button onClick={() => close()}>
        Save
      </button>
    </div>
  )
}
