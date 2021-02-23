import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import DescriptionIcon from '@material-ui/icons/Description';
import { makeStyles } from '@material-ui/core/styles';
import {ADDTABLE,setSelectedDb, TOOGLECARDPOPUP, TOOGLEPOPUP, SHOW_TABLE_ERROR} from "../Actions/Actions"
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import TableCreation from './AccodiansComponent';
import Cardpopup from '../Components/cardpopup'
import FormHelperText from '@material-ui/core/FormHelperText';
import download from './FileCreator';
import Alert from '@material-ui/lab/Alert';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select'
import MenuItem from "@material-ui/core/MenuItem"
import { dbname } from '../App';
import {GETDBTABLES} from "../API/Api"

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));


export default function AddNewRuleComponent() {
const open = useSelector(state => state.popup_state);
const error = useSelector(state => state.SHOW_EMPTY_ERROR);
const table_error = useSelector(state => state.SHOW_TABLE_ERROR);
const DBSELECTED= useSelector(state => state.DBSELECTED);

const enable = useSelector(state => state.allowCreate);
const dispatch =  useDispatch();
  return (
    <div>
      <Cardpopup/>
      <Dialog className="popupStyle" open={open}>
        <DialogTitle className="popupHeader" id="AddNewRule"><DescriptionIcon fontSize="small"/>{"CREATE NEW DRL FILE"}
        </DialogTitle>
        <DialogContent>
        <div style={{display:"flex", marginTop:"10px"}}>
        <FormControl  style={{float:"right",width:'200px'}}> 
        <InputLabel style={{fontSize:"14px",marginLeft:"5px",width:"150px"}} >SELECT DATABASE</InputLabel>
        <Select   autoFocus style={{borderColor:'white',}} id="dbname" variant="outlined"
        onChange={(event) => fetchSomeData(event.target.value,dispatch)}>
        {dbname.map(val => (
            <MenuItem key={val.value} value={val.value}>
            {val.label}
            </MenuItem>
        ))}
        </Select></FormControl>
        <TextField
          id="RuleName"
          label="Enter Rule Name"
          variant="outlined"
          disabled ={DBSELECTED}
          style={{marginLeft:"10px"}}
          helperText = {error ? <FormHelperText error>Please Enter Rule Name!</FormHelperText> : ""}
          onKeyUp={(event) => localStorage.setItem("RuleName",event.target.value)}
        />
        <Fab  disabled ={DBSELECTED} onClick={(() => dispatch(ADDTABLE()))} color="primary" style={{marginLeft:"5px"}} variant="round">
            <AddIcon  /></Fab>

        </div>
        <div style={{marginTop:"10px"}} hidden={!table_error} >
            <Alert severity="error"  onClose={() => {}}>All fields are required!</Alert>
        </div>
        <TableCreation/>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => dispatch(TOOGLEPOPUP())}  variant="contained" autoFocus color="secondary">
            CANCEL
          </Button>
          <Button  disabled={!enable} onClick={(event) => (download())? dispatch(TOOGLECARDPOPUP()): dispatch(SHOW_TABLE_ERROR())}  variant="contained" color="primary" autoFocus>
            CREATE
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

function fetchSomeData (value,dispatch){ 
    let tableData = GETDBTABLES(value)
    if(tableData != ""){
      dispatch(setSelectedDb({tableList:tableData, value:value}));
    }
}