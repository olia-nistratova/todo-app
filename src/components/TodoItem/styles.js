import { red, indigo, teal } from '@material-ui/core/colors';

const styles = {
  root: {
    cursor: 'pointer',
    padding: '0',
    marginBottom: '8px',
    transition: 'opacity .3s',
    justifyContent: 'space-between',
    '&:hover': {
      opacity: '.8',
    },
  },
  completedTask: {
    textDecoration: 'line-through',
  },
  iconCheckbox: {
    color: teal[500],
  },
  iconEdit: {
    color: indigo[500],
  },
  iconDelete: {
    color: red['A400'],
  },
};

export default styles;
