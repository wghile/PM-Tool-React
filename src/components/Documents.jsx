import DocumentCard from './DocumentCard'

export default function Documents({docs}) {

  console.log(docs)
  
  return (
    <div className='Docs'>
      <button>
        Upload New Document
      </button>
      <main>
        {docs.map((doc) => {
          return(
            <DocumentCard doc={doc}/>
          )
        })}
      </main>
    </div>
  )
}
