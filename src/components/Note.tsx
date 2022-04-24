import React from 'react'

interface NoteProps {
    note: {
        content: string;
        important: boolean;
    },
    toggleImportance: () => void,
}

export const Note = ({note,toggleImportance}:NoteProps) => {

  const label = note.important ? 'make not important' : 'make important'

  return (
    <div>
        <p>{note.content}</p>
        <button onClick={toggleImportance}>{label}</button>
    </div>
  )
}
