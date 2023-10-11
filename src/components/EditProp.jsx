import { useRef } from 'react'


export default function EditProp() {

    const streetRef = useRef()
    const cityRef = useRef()
    const zipRef = useRef()
    const stateRef = useRef()
    const countryRef = useRef()
    const nameRef = useRef()

  return (
    <div className='NewProp'>
      <h1>
        Edit Property
      </h1>
      <form>
        <div id='street'>
          Street Address: <input type='text' value={streetRef}/>
        </div>
        <div id='city'>
          City: <input type='text' value={cityRef}/>
        </div>
        <div id='zip'>
          Zip Code: <input type='number' value={zipRef}/>
        </div>
        <div id='state'>
          State: <input type='text' value={stateRef}/>
        </div>
        <div id='country'>
          Country: <input type='text' value={countryRef}/>
        </div>
        <div id='name'>
          Nickname: <input type='text' placeholder='Optional' value={nameRef}/>
        </div>
      </form>
      <button onClick={() => close()}>
        Save
      </button>
    </div>
  )
}
