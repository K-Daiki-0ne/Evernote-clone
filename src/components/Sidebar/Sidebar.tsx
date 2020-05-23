import React, { useState } from 'react';
import { 
  List, 
  Divider, 
  Button } from '@material-ui/core';
import useStyles from './style.js';


type HomeProp = {
  notes: Array<FirebaseData>; 
}

export function Sidebar<HomeProp>() {
  const [addingNote, setAddingNote] = useState<addingNoteType>(false);
  const [title, setTitle] = useState<titleType>('');

  function newNote(): newNote {
    setAddingNote(!addingNote);
    setTitle('');
  };

  function updateTitle(e): updateTitle {
    e.preventDefault();
    setTitle(e.target.value);
  };

  function createNote(): createNote {
    console.log(title);
  };

  function selecteItem(): selectItem {
    console.log('Selected Note')
  };

  function deleteItem(): deleteItem {
    console.log('Delete Note');
  };

  const classes: any = useStyles();

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
          notes.map((_note, _index) => {
            return (
              <div key={_index}>
                <SidebarItem 
                  _note={_note}
                  _index={_index}
                  selecte
                />
              </div>
            )
          })
        }
      </List>
    </div>
  )
}