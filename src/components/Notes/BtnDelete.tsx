import './notes.css'

type BtnDeleteProps = {
    deleteHandler?: () => void,
    note: string
  }
  
  const BtnDelete: React.FC<BtnDeleteProps> = ({ deleteHandler, note }) => {
    return (
        <button className='card-delete' onClick={() => deleteHandler(note.id)}>
        
      </button>
    )
  }
  
  export default BtnDelete