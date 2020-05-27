import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import 'firebase/firestore';
import { Editor } from '../components/Editor/Editor';
import { Sidebar } from '../components/Sidebar/Sidebar';
import './Home.css';

export function Home() {
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);
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

  async function newNote(title): Promise<void> {
    const note = {
      title: title,
      body: ''
    };

    const newData = await firebase
      .firestore()
      .collection('notes')
      .add({
        title: note.title,
        body: note.title,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });
      const newId = newData.id;
      await setNote(...notes, note);
      const newNoteIndex = notes.indexOf(notes.filter(_note => _note.id === newId)[0]);
      setSelectedNote(notes[newNoteIndex]);
      setSelectedNoteIndex(newNoteIndex);
  }

  async function deleteNote(note): Promise<void> {
    const noteIndex = notes.indexOf(note);
    await setNote(notes.filter(_note => _note != note));

    if(selectedNoteIndex === noteIndex) {
      setSelectedNoteIndex(null);
      setSelectedNote(null);
    } else {
      note.length > 1
        ? selectNote(notes[selectedNoteIndex -1], selectedNoteIndex - 1)
        : setSelectedNoteIndex(null) && setSelectedNoteIndex(null)
    }

    firebase
      .firestore()
      .collection('notes')
      .doc(note.id)
      .delete();
  }
  
  return (
    <div className="home-container">
      <Sidebar 
        selectedNoteIndex={selectedNoteIndex}
        notes={note}
        deleteNote={deleteNote}
        selectNote={selectNote}
        newNote={newNote}
      />
      <Editor />
    </div>
  )
}
