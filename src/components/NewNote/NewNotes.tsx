
import React, { useState } from 'react';
import BtnNotes from './BtnNotes'
import './newNotes.css';

type NewNotesProps = {
    newNote: string,
    setNewNote: (text: string) => void,
    addNote: () => void
}

const NewNotes: React.FC<NewNotesProps> = ({ newNote, setNewNote, addNote }) => {

  return (
    <form className="input">
     
      <label className="label-title">New Note
        <textarea
        className='textarea'
        id='newNote'
        name='NewNote'
          value={newNote}
          onChange={e => setNewNote(e.target.value)}
        >
        </textarea>
        <BtnNotes handler={addNote}>
        </BtnNotes>
      </label>
    </form>
  )
}

export default NewNotes