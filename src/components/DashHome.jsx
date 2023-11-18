export default function DashHome({property}) {

  return (
    <div className='DashHome'>
      <img src='/images/home.png' alt='House Stock Photo' />
      <h2>
        {property?.address}, {property?.city}, {property?.country}
      </h2>
    </div>
  )
}
