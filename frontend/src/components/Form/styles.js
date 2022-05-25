import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    borderRadius: '17px',
    boxShadow: 'none'


  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',


  },
  font: {
    fontFamily: '"Roboto Flex", sans-serif;',
    fontWeight: '300'

  },

  inputFieldCustom: {
    border: 'none'
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
    color: '#000',
    fontWeight: '300'

  },

}));