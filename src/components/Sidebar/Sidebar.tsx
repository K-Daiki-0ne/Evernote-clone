import React, { useState } from 'react';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { 
  List, 
  Divider, 
  Button } from '@material-ui/core';
import useStyles from './style.js';

type HomeProps = {
  notes: Array<FirebaseData>;
  selectedNoteIndex: number;
  deleteNote: () => Promise<void>;
  selectNote: () => void;
  newNote: () => Promise<void>;
}

export const Sidebar: React.FC<HomeProps> = ({ notes, selectedNoteIndex, deleteNote, selectNote, newNote }) => {
  const [addingNote, setAddingNote] = useState<AddingNoteType>(false);
  const [title, setTitle] = useState<TitleType>('');
  function newNote(): void {
    setAddingNote(!addingNote);
    setTitle('');
  };

  function updateTitle(e: any): void {
    e.preventDefault();
    setTitle(e.target.value);
  };

  function createItem(): void {
    newNote(title);
    setTitle('');
    setAddingNote(false);
  };

  function selectItem(n: any, i: any): void {
    selectNote(n, i);
  };

  function deleteItem(note: any): void {
    deleteNote(note);
  };

  const classes: Classes = useStyles();

  if(notes) {
    return (
      <div className={classes.sidebarContainer}>
        <Button 
          className={classes.newNoteBtn}
          onClick={newNote}
        >
          {
            addingNote 
              ? 'Cancel'
              : 'New Note'
          }
        </Button>
        {
          addingNote ? 
          <div>
            <input 
              type="text" 
              className={classes.newNoteInput}
              placeholder='Enter note title'
              onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>): void => updateTitle(e)}
            />
            <Button 
              className={classes.newNoteSubmitBtn}
              onClick={createNote}
            >
              Create New Note
            </Button>
          </div>

          : null
        }
        <List>
          {
            notes.map((_note: any, _index: any) => {
              return (
                <div key={_index}>
                  <SidebarItem 
                    _note={_note}
                    _index={_index}
                    selectedNoteIndex={selectedNoteIndex}
                    selectItem={selectItem}
                    deleteItem={deleteItem}
                  />
                  <Divider />
                </div>
              )
            })
          }
        </List>
      </div>
    )
  } else {
    return (
      <div>
        <p>
          Sorry...  <br />
          Note is nothing .
        </p>
      </div>
    )
  }

}