export default function DocumentCard({doc}) {

    // const dateNow = new Date()
    // let timestamp = `${dateNow.getMonth() + 1}/${dateNow.getDate()}/${dateNow.getFullYear()} ${dateNow.getHours()}:${dateNow.getMinutes()}`

    const timestamp = new Date(doc.createdAt)
    // console.log(timestamp)

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
                Updated: {`${timestamp.getMonth() + 1}/${timestamp.getDate()}/${timestamp.getFullYear()} ${timestamp.getHours()}:${timestamp.getMinutes()}`}
            </p>
        </div>
    </div>
  )
}
