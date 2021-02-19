import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import DescriptionIcon from '@material-ui/icons/Description';
import { makeStyles } from '@material-ui/core/styles';
import { ADDCARD, ADDTABLE, TOOGLEPOPUP} from "../Actions/Actions"
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import TableCreation from './AccodiansComponent';

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
const dispatch =  useDispatch();
  return (
    <div>
      <Dialog className="popupStyle" open={open}>

        <DialogTitle className="popupHeader" id="AddNewRule"><DescriptionIcon fontSize="small"/>{"CREATE NEW DRL FILE"}</DialogTitle>
        <DialogContent>
        <div style={{display:"flex", marginTop:"10px"}}>
        <TextField
          id="RuleName"
          label="Enter Rule Name"
          variant="outlined"
          onKeyUp={(event) => localStorage.setItem("RuleName",event.target.value)}
        />
        <Fab onClick={(() => dispatch(ADDTABLE()))} color="primary" style={{marginLeft:"5px"}} variant="round">
            <AddIcon  /></Fab>
        </div>
        <TableCreation/>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => dispatch(TOOGLEPOPUP())}  variant="contained" autoFocus color="secondary">
            CANCEL
          </Button>
          <Button  variant="contained" color="primary" autoFocus>
            CREATE
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
