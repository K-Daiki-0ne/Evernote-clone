import React from 'react';
import {
  ListItem,
  ListItemText,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from './style.js'
import { removeHTMLTags } from '../../util/helper';

type SidebarItemProps = {
  _note: any;
  _index: any;
  selectedNoteIndex: any;
  selectItem: () => void;
  deleteItem: () => void;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({ _note, _index, selectedNoteIndex, selectItem, deleteItem }) => {
  const classes: Classes = useStyles();
  return (
    <div>
      <ListItem>
        <div>
          <ListItemText />
        </div>
        <DeleteIcon />
      </ListItem>
    </div>
  )
}