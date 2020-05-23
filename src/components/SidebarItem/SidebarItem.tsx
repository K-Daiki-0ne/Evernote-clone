import React from 'react';
import {
  ListItem,
  ListItemText,
} from '@material-ui/core';
import DeleteIcon from '@materila-ui/icons';
import { removeHTMLTags } from '../../util/helper';

export function SidebarItem() {
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