export default function DeletePrompt({close}) {
  return (
    <div className='DeletePrompt'>
      <h1>Are you sure you want to remove this property?</h1>
      <h2>This action cannot be undone</h2>
      <div>
        <button onClick={() => close()}>Yes</button>
        <button onClick={() => close()}>No</button>
      </div>
    </div>
  )
}
