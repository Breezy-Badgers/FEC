import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';

import QuantityDropdown from './QuantityDropdown.jsx';

const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3)
    }
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)'
    }
  }
}))(InputBase);

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  margin: {
    margin: theme.spacing(1)
  }
}));

export default function SizeSelector() {
  const classes = useStyles();
  const [size, setAge] = React.useState('');
  const handleChange = event => {
    setAge(event.target.value); //will change to capture size and quantity independently
  };

  return (
    <form className={classes.root} autoComplete='off'>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor='age-customized-select'>Size</InputLabel>
        <Select
          value={size}
          onChange={handleChange}
          input={<BootstrapInput name='age' id='age-customized-select' />}>
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>XS</MenuItem>
          <MenuItem value={20}>S</MenuItem>
          <MenuItem value={30}>M</MenuItem>
          <MenuItem value={40}>L</MenuItem>
          <MenuItem value={50}>XL</MenuItem>
        </Select>
      </FormControl>
      <QuantityDropdown />
    </form>
  );
}
