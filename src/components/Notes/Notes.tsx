import './notes.css';
import BtnDelete from './BtnDelete'


type NotesProps = {
  note?: Note,
  deleteHandler: (id: number) => void
}

const Notes: React.FC<NotesProps> = ({ note, deleteHandler }) => {
  return (
    <li className="card">
      <div className="card-content">{note.content}</div>
     <BtnDelete note={note} deleteHandler={() => deleteHandler(note.id)} />
        
    </li>
  )
}
interface Note {
    id: number,
    content: string
  }
export default Notes