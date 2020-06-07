import React, { useState, useEffect } from 'react';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import useStyles from './Style.js';
import debounce from '../../util/helper.js';
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css";

type SelectNote = {
  body: string;
  title: string;
  id: string;
}

type EditorProps = {
  selectedNote: SelectNote;
  noteUpdate: (id: string, noteObj: DataType) => void;
}


export const Editor: React.FC<EditorProps> = ({ selectedNote, noteUpdate }) => {
  const [text, setText]   = useState<TextType>('');
  const [title, setTitle] = useState<TitleType>('');
  const [id, setId]       = useState<IdType>('');

  useEffect(() => {
    setText(selectedNote.body)
    setTitle(selectedNote.title)
    setId(selectedNote.id)
  }, [])

  useEffect(() => {
    if(selectedNote.id !== id) {
      setText(selectedNote.body)
      setTitle(selectedNote.title)
      setId(selectedNote.id)
    }
  }, [])

  async function updateBody(e: any): Promise<void> {
    await setText(e);
    update();    
  }

  async function updateTitle(text: string): Promise<void> {
    await setText(text);
    update();
  }

  function update(): void {
    const data: DataType = {
      title: title,
      body: text
    };
    debounce(() => {
      noteUpdate(id, data)
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
