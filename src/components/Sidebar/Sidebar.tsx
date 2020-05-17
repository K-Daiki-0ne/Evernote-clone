import React, { useState } from 'react';
import { 
  List, 
  Divider, 
  Button } from '@material-ui/core';

export function Sidebar() {
  const [addingNote, setAddingNote] = useState<boolean>(false)
  const [title, setTitle] = useState<string>('')

  return (
    <div>
      <p>Hello form Sidebar</p>
    </div>
  )
}