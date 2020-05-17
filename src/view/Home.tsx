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
          const data: any = _doc.data();
          data['id'] = _doc.id;
          return data;
        });
        setNote(notes)
      })
  }, [])
  return (
    <div className="home-container">
      <Sidebar />
      <Editor />
    </div>
  )
}
