import {useState} from 'react';
import './App.css';
import Mensaje from './Mensaje.js';
import Contador from './Contador.js';
import {Note} from './Note';
  
export default function App(props) {

  const [notes, setNotes] = useState(props.notes);

  const codigo = "Hola mundo";
  
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
    </div>
  );
}
