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
  const [addingNote, setAddingNote] = useState<AddingNoteType>(false);
  const [title, setTitle] = useState<TitleType>('');

  function newNote(): NewNote {
    setAddingNote(!addingNote);
    setTitle('');
  };

  function updateTitle(e): UpdateTitle {
    e.preventDefault();
    setTitle(e.target.value);
  };

  function createNote(): CreateNote {
    console.log(title);
  };

  function selecteItem(): SelectItem {
    console.log('Selected Note')
  };

  function deleteItem(): DeleteItem {
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
            notes.map((_note, _index) => {
              return (
                <div key={_index}>
                  <SidebarItem 
                    _note={_note}
                    _index={_index}
                    // selecte
                  />

                  <Divider 
                  
                  />
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