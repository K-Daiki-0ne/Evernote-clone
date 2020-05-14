import React, { useState } from 'react';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { useStyles } from './Style.js';
import debounce from '../../util/helper.js';
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css";

export function Editor() {
  const [text, setText] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [id, setId] = useState<string>('');

  const classes: any = useStyles();

  return (
    <div className={classes.editorContainer}>
      <BorderColorIcon className={classes.editIcon}/>
      <ReactQuill 
        value={text}
        onChange={e => updateBody(e)}
      />
    </div>
  )

  async function updateBody(e: string): Promise<void> {
    await setText(e);
    update();    
  }

  function update(): void {
    debounce(() => {
      console.log('Update Database ...OK');
    }, 1500);
  }


}
