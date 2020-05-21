import React, { useState } from 'react';
import { 
  List, 
  Divider, 
  Button } from '@material-ui/core';
import useStyles from './style.js';


type HomeProp = {

}

export function Sidebar<HomeProp>() {
  const [addingNote, setAddingNote] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');

  function newNote() {
    setAddingNote(!addingNote);
    setTitle('');
  }

  function updatetitle(e: any) {
    e.preventDefault();
    setTitle(e.target.value);
  }

  const classes: any = useStyles();

  return (
    <div className={classes.sidebarContainer}>
      <Button 
        className={classes.newNoteBtn}
        onClick={newNote}
      >
        New Note
      </Button>
      {
        addingNote ? 
        <div>
          <input 
            type="text" 
            className={classes.newNoteInput}
            placeholder='Enter note title'
            onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>): void => updatetitle(e)}
          />
        </div>

        : null
      }
    </div>
  )
}