import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';



const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 200,
    backgroundColor: "#fff",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const FiltersBar = ({ optionsList }) => {

  FiltersBar.propTypes = {
    optionsList: PropTypes.array
  }

  const classes = useStyles();
  // const dispatch = useDispatch();

  // const handleOption = (optionId) => {
  //   dispatch(optionFilter(optionId));
  // }

  return (
    <div>
      <FormControl variant="outlined" className={ classes.formControl }>
        <Select
          native
        >
          {
            optionsList.map((option, index) => (
              <option
                key={ index }
              // onClick={ handleOption(option.id) }
              >
                { option.name }
              </option>
            ))
          }
        </Select>
      </FormControl>
    </div>
  )
}

export default FiltersBar;