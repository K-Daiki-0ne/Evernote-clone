import React from 'react';
import {
  ListItem,
  ListItemText,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
// import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from './style.js'
import { removeHTMLTags } from '../../util/helper';

type SidebarItemProps = {
  _note: Note;
  _index: number;
  selectedNoteIndex: number;
  selectItem: (n: any, i:any) => void;
  deleteItem: (note: any) => void;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({ _note, _index, selectedNoteIndex, selectItem, deleteItem }) => {

  const classes: Classes = useStyles();

  function selectOneItem(n: Note, e: number): void {
    selectItem(n, e);
  };

  function deleteOneItem(note: Note): void {
    if(window.confirm('Are you sure delete this one ?')) {
      deleteItem(note);
    };
  };


  return (
    <div key={_index}>
      <ListItem 
        className={classes.listItem}
        selected={selectedNoteIndex === _index}
        alignItems='flex-start'
      >
        <div 
          className={classes.textSection}
          onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => selectOneItem(_note, _index)}
        >
          <ListItemText 
            primary={_note.title}
            secondary={removeHTMLTags(_note.body.substring(0, 30)) + '...'}
          />
        </div>
        <DeleteIcon 
          className={classes.deleteIcon}
          onClick={(event: React.MouseEvent<any>): void => deleteOneItem(_note)}
        />
      </ListItem>
    </div>
  )
}