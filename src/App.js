import React from 'react';
import './App.css';
import Mensaje from './Mensaje';
import Contador from './contador';

const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2019-05-30T17:30:31.098Z',
    important: true,
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    date: '2019-05-30T18:39:34.091Z',
    important: false,
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2019-05-30T19:20:14.298Z',
    important: true,
  },
];

export default function App() {
  const codigo = "Hola mundo";
  
  return (
    <div className="App">
      <h1>{codigo}</h1>
      <br /><br /><br />
      <Mensaje  message = 'Esto es un curso de React'/>
      
      <Contador />

      <div>
        {notes.map((note)=>{
          return <p> {note.id} </p>
        })}
      </div>

    </div>
  );
}
