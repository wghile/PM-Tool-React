export default function DocumentCard({doc}) {
  return (
    <div className='DocCard'>
        <div id='img-container'>
            <img src='/images/docs.png' alt='Document Stock Photo'/>
        </div>
        <div id='text'>
            <div id='actions'>
                <img src='/images/edit-icon.png' alt='Edit Logo'/>
                <img src='/images/trashcan.png' alt='Trash Can'/>
            </div>
            <h1>
                {doc.title}
            </h1>
            <p>
                Updated at: {doc.timestamp}
            </p>
        </div>
    </div>
  )
}
