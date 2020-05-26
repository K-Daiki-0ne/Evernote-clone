import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import 'firebase/firestore';
import { Editor } from '../components/Editor/Editor';
import { Sidebar } from '../components/Sidebar/Sidebar';
import './Home.css';

export function Home() {
  const [selectedNoteIndex, setSelectedNoteIndex] = useState<number>();
  const [selectedNote, setSelectedNote] = useState(null);
  const [note, setNote] = useState<FirebaseData[]>([]);
  

  useEffect(() => {
    firebase
      .firestore()
      .collection('notes')
      .onSnapshot(serverUpdate => {
        const notes: any = serverUpdate.docs.map(_doc => {
          const data = _doc.data();
          console.log(data)
          data['id'] = _doc.id;
          return data;
        });
        setNote(notes)
      })
  }, [])

  function selectNote(note, index): void {
    setSelectedNoteIndex(index);
    setSelectedNote(note);
  };

  function noteUpdate(id, noteObj): void {
    firebase  
      .firestore()
      .collection()
      .doc(id)
      .update({
        title: noteObj.title,
        body: noteObj.body,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });
  }
  
  return (
    <div className="home-container">
      <Sidebar 
        selectedNoteIndex={selectedNoteIndex}
        notes={note}
      />
      <Editor />
    </div>
  )
}
