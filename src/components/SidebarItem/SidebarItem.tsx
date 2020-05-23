import React from 'react';
import {
  ListItem,
  ListItemText,
} from '@material-ui/core';
import DeleteIcon from '@materila-ui/icons';
import { useStyles } from './style.js'
import { removeHTMLTags } from '../../util/helper';

export function SidebarItem() {
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