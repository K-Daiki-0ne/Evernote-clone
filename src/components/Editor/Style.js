import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme)  => {
  createStyles({
    titleInput: {
      height: '50px',
      boxSizing: 'border-box',
      border: 'none',
      padding: '5px',
      fontSize: '24px',
      width: 'calc(100% - 300px)',
      backgroundColor: '#29487d',
      color: 'white',
      paddingLeft: '50px'
    },
    editIcon: {
      position: 'absolute',
      left: '310px',
      top: '12px',
      color: 'white',
      width: '10',
      height: '10'
    },
    editorContainer: {
      height: '100%',
      boxSizing: 'border-box'
    }
  })
});