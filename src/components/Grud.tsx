import { useEffect, useState } from 'react';
import Notes from './Notes/Notes';
import NewNotes from './NewNote/NewNotes';
import Button from './Button';
import createRequest from './CreateReq/createRequest.js'



function Grud() {
  const [newNote, setNewNote] = useState('');
  const [notes, setNotes] = useState([]);

  
  const updateHandler = async() => {
    const notes = await createRequest.getNotes();
    notes && setNotes(notes);
    console.log(notes)
  };

  const addNote = async() => {
    const value = newNote;
    if (!value) return;
    await createRequest.addNote(value);
    await updateHandler();
    setNewNote('');
  }

  const deleteHandler = async(id: number) => {
    await createRequest.deleteNote(id);
    await updateHandler();
  }
  
  useEffect(() => {
    updateHandler();
  }, []);

  return (
    <div className='container'>
      <header className='container-head'>
        <h2 className='container_title'>Notes</h2>
        <Button updateHandler={updateHandler} />
      </header>
      <ul className='notes-container'>
        {notes.map(item => 
          <Notes key={item.id} note={item} deleteHandler={deleteHandler} />
        )}
      </ul>
      <NewNotes newNote={newNote}
        setNewNote={setNewNote}
        addNote={addNote} 
        />
    </div>
  );
}



export default Grud;