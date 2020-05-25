import React, { useState } from 'react';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { 
  List, 
  Divider, 
  Button } from '@material-ui/core';
import useStyles from './style.js';

// type FirebaseData = {
//   notes: ({
//     title: string;
//     body: string;
//     id: string;
//   })
// }

type HomeProps = {
  notes: Array<FirebaseData>;
  selectedNoteIndex: any;
}

export const Sidebar: React.FC<HomeProps> = ({ notes, selectedNoteIndex }) => {
  const [addingNote, setAddingNote] = useState<AddingNoteType>(false);
  const [title, setTitle] = useState<TitleType>('');
  console.log(notes)
  function newNote(): void {
    setAddingNote(!addingNote);
    setTitle('');
  };

  function updateTitle(e: any): void {
    e.preventDefault();
    setTitle(e.target.value);
  };

  function createNote(): void {
    console.log(title);
  };

  function selectItem(): void {
    console.log('Selected Note')
  };

  function deleteItem(): void {
    console.log('Delete Note');
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