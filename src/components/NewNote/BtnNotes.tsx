import './newNotes.css'

type BtnNotesProps = {
    handler: () => void
  }
  
  const BtnNotes: React.FC<BtnNotesProps> = ({ handler }) => {
    return (
        <button className='postBtn' onClick={handler}>
        
      </button>
    )
  }
  
  export default BtnNotes