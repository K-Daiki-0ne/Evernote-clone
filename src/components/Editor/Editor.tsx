import React, { useState, useEffect } from 'react';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import useStyles from './Style.js';
import debounce from '../../util/helper.js';
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css";

type EditorProps = {
  selectNote: SelectNoteType;
  noteUpdate: () => void;
}


export function Editor<EditorProps>({ selectNote, noteUpdate }) {
  const [text, setText]   = useState<TextType>('');
  const [title, setTitle] = useState<TitleType>('');
  const [id, setId]       = useState<IdType>('');

  useEffect(() => {
    setText(selectNote.body)
    setTitle(selectNote.title)
    setId(selectNote.id)
  }, [selectNote])

  useEffect(() => {
    if(selectNote.id !== id) {
      setText(selectNote.body)
      setTitle(selectNote.title)
      setId(selectNote.id)
    }
  }, [])

  async function updateBody(e: any): Promise<void> {
    await setText(e);
    update();    
  }

  updateTitle()

  function update(): void {
    debounce(() => {
      noteUpdate(id, {
        title: title,
        body: text
      })
    }, 1500);
  }

  const classes: any = useStyles();

  return (
    <div className={classes.editorContainer}>
      <BorderColorIcon className={classes.editIcon}/>
      <input 
        className={classes.titleInput}
        placeholder='Note title ...'
        value={
          title
          ? title
          : ''
        }

        onChange={(e: any) => updateTitle(e.target.value)}
      />
      <ReactQuill 
        value={text}
        onChange={e => updateBody(e)}
      />
    </div>
  )
}
