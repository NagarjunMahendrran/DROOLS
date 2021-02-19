import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Select, Input, MenuItem, TextField } from "@material-ui/core";
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Divider from '@material-ui/core/Divider';
import { useSelector } from 'react-redux';
import { AccordionActions } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { ADDROW } from '../Actions/Actions';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import store from '../Store/store';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    flexGrow:1
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '33.33%',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

const datatypeoptions = [{
    value: "getAsInt",
    label: 'Number'
  }, {
    value: 'getAsFloat',
    label: 'Decimel'
  }, {
    value: 'getAsBoolean',
    label: 'True/False'
  }, {
    value: 'getAsString',
    label: 'Text'
  }];
  const columnOptions = [{
    value: "Name",
    label: 'Name'
  }, {
    value: 'Age',
    label: 'Age'
  }, {
    value: 'City',
    label: 'City'
  }, {
    value: 'Password',
    label: 'Password'
  }];
  const conditionOptions = [{
    value: "greater",
    label: 'GreaterThan'
  }, {
    value: 'lesser',
    label: 'LessThan'
  }, {
    value: 'equal',
    label: 'EqualTo'
  }, {
    value: 'notequal',
    label: 'NotEqualTo'
  }];
  

export default function TableCreation() {
  const classes = useStyles();
  const table = useSelector(state => state.tables);
  const dispatch = useDispatch();
  return (
    <div  style={{marginTop:"10px"}} className={classes.root}>
     {table.map((row,index) =>
      <Accordion >
        <AccordionSummary
          expandIcon={ <ExpandMoreIcon />}
          aria-controls="panel1c-content"
        >
         <Typography  style={{fontWeight:"bold"}} className={classes.heading}>RULE NAME : {row.name}</Typography>
        </AccordionSummary>
        <Divider />
        <AccordionDetails>
        <div className={classes.root}>
          {FormRow(row,classes,index)}
          <Divider/>
          {CreateResult(row,index)}
        </div>
        </AccordionDetails>
        <Divider />
        <AccordionActions>
        <Fab size="small" onClick={(store.getState().tables[index].row == 0) ?(() => dispatch(ADDROW({id:index}))):(() => showPopup(index))} color="primary"  variant="extended">
                <AddIcon  aria-label="AddConditonn" style={{float:"right"}} ></AddIcon>Add Condition
            </Fab>
            <Fab size="small" color="secondary"  variant="extended">
                <DeleteForeverIcon  aria-label="delete" style={{float:"right"}} ></DeleteForeverIcon>Delete Rule
            </Fab>
        </AccordionActions>
      </Accordion>
     )}
    </div>
  );
}

function showPopup(data) {
    console.log("arjun");
    
}
function CreateResult(data,index) {
    if(data.row>0){
        return(
            <div style={{marginTop:"10px"}}>
              <Grid  justify="flex-end" spacing={6} container 
          alignItems="center" >
              <Grid item xs={3}>
            <Typography>
                Set Result
            </Typography>
            </Grid>
        <Grid item xs={4}>
        <TextField  variant="outlined"  placeholder="Field Name" onKeyUp= {(event) => localStorage.setItem("field_"+index ,event.target.value)}>
            </TextField>
            </Grid>
            <Grid item xs={4}>
        <TextField  variant="outlined"  placeholder="Field Value" onKeyUp= {(event) => localStorage.setItem("value_"+index ,event.target.value)}>
            </TextField>
            </Grid>
            </Grid>

            </div>

        );
    }
    return "";
}



function FormRow(data,classes,index) {
    const rowData = [];
    for (let i = 0; i < data.row; i++) {
    rowData.push (
          <Grid style={{marginBottom:"20px"}} spacing={1} container 
          alignItems="center" >
        <Grid item xs={3}>
        <FormControl className={classes.FormControl}>
        <InputLabel className="labelClass" >DataType</InputLabel>
        <Select variant="outlined" autoComplete="Select"
        onChange={(event) => localStorage.setItem(index+"_datatype_"+i ,event.target.value)}
        >
        {datatypeoptions.map(val => (
            <MenuItem key={val.value} value={val.value}>
            {val.label}
            </MenuItem>
        ))}
        </Select>
        </FormControl>
        </Grid>
        <Grid item xs={3}>
        <FormControl className={classes.FormControl}>
        <InputLabel  className="labelClass"  >ColumnName</InputLabel>
        <Select variant="outlined"
        onChange={(event) => localStorage.setItem(index+"_column_"+i ,event.target.value)}
        >
        {columnOptions.map(val => (
            <MenuItem key={val.value} value={val.value}>
            {val.label}
            </MenuItem>
        ))}
        </Select>
        </FormControl>
        </Grid>
        <Grid item xs={3}>
        <FormControl className={classes.FormControl}>
        <InputLabel   className="labelClass"  >ConditionType</InputLabel>
        <Select variant="outlined"
        onChange={(event) => localStorage.setItem(index+"_condition_"+i ,event.target.value)}
        >
        {conditionOptions.map(val => (
            <MenuItem key={val.value} value={val.value}>
            {val.label}
            </MenuItem>
        ))}
        </Select></FormControl>
        </Grid>
        <Grid item xs={3}>
            <TextField  variant="outlined"  placeholder="Enter Value" onKeyUp= {(event) => localStorage.setItem(index+"_value_"+i ,event.target.value)}>
            </TextField>
        </Grid>
        </Grid>
    )
    }
    return rowData;
  }