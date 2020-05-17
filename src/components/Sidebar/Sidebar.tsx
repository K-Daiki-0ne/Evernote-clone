import React, { useState } from 'react';
import { 
  List, 
  Divider, 
  Button } from '@material-ui/core';
import { useStyles } from './style.js';


type HomeProp = {

}

export function Sidebar<HomeProp>() {
  const [addingNote, setAddingNote] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');

  function newNote() {
    console.log()
  }


  const classes: any = useStyles();
  return (
    <div className={classes.sidebarContainer}>
      <Button className={classes.newNoteBtn}>
        New Note
      </Button>
    </div>
  )
}