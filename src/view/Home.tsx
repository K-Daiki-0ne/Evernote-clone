import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import 'firebase/firestore';
import { Editor } from '../components/Editor/Editor';
import { Sidebar } from '../components/Sidebar/Sidebar';
import './Home.css';

export function Home() {
  const [selectedNoteIndex, setSelectedNoteIndex] = useState<number>(0);
  const [selectedNote, setSelectedNote] = useState<any>(0);
  const [note, setNote] = useState<any>([]);
  

  useEffect(() => {
    firebase
      .firestore()
      .collection('notes')
      .onSnapshot(serverUpdate => {
        const notes: any = serverUpdate.docs.map(_doc => {
          const data = _doc.data();
          data['id'] = _doc.id;
          return data;
        });
        setNote(notes)
      })
  }, [])

  function selectNote(note: any, index: number): void {
    setSelectedNoteIndex(index);
    setSelectedNote(note);
  };

  function noteUpdate(id: string, noteObj: any): void {
    firebase  
      .firestore()
      .collection('notes')
      .doc(id)
      .update({
        title: noteObj.title,
        body: noteObj.body,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });
  }

  async function newNote(newTitle: any): Promise<void> {
    const newNote: any = {
      title: newTitle,
      body: ''
    };

    const newData = await firebase
      .firestore()
      .collection('notes')
      .add({
        title: newNote.newTitle,
        body: newNote.title,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });
      const newId = newData.id;
      await setNote([...note, newNote]);
      
      const newNoteIndex = note.indexOf(note.filter((_note: any) => _note.id === newId)[0]);
      setSelectedNote(note[newNoteIndex]);
      setSelectedNoteIndex(newNoteIndex);
  }

  async function deleteNote(note: any) {
    const noteIndex = note.indexOf(note);
    await setNote(note.filter((_note: any) => _note !== note));

    if(selectedNoteIndex === noteIndex) {
      setSelectedNoteIndex(0);
      setSelectedNote(null);
    } else {
      note.length > 1
        ? selectNote(note[selectedNoteIndex -1], selectedNoteIndex - 1)
        : setSelectedNoteIndex(0)
          setSelectedNoteIndex(0)
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
