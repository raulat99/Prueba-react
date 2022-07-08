import {useEffect, useState} from 'react';
import './App.css';
import Mensaje from './Mensaje.js';
import Contador from './Contador.js';
import {Note} from './Note';
  
export default function App() {

  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const codigo = "Hola mundo";
  
  useEffect(() => {
    console.log('effect');
    fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then((json) => {
    setNotes(json)
  })
  }, [])
  

  const handleChange = (event)=>{
    setNewNote(event.target.value);
  }

  const handleSubmit = (event)=>{
    event.preventDefault();
    const noteToAddToState = {
      id: notes.length+1,
      title: newNote,
      body: newNote,
    }
    setNotes([...notes, noteToAddToState]);
    setNewNote('');
  }

  return (
    <div className="App">
      <h1>{codigo}</h1>
      <br /><br /><br />
      <Mensaje  message = 'Esto es un curso de React'/>
      <Contador />
      <ol>
          {notes.map((note) => (
            <Note key = {note.id} {...note} />
          ))}
      </ol>

      <form onSubmit={handleSubmit}>
        <input type = 'text' onChange={handleChange} value={newNote}/>
        <button > Crear nota </button>
      </form>

    </div>
  );
}
