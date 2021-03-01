import { Dialog, DialogActions, DialogContent, Grid } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select'
import MenuItem from "@material-ui/core/MenuItem"
import { useSelector } from "react-redux";
import { ADDCARD,TOOGLEPOPUP,SHOW_CARD_ERROR } from "../Actions/Actions";
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import Alert from '@material-ui/lab/Alert';
import { cardValidator } from "./CardValidator";
import * as keys from "../Actions/ActionKeys"




const status = [{
    value: 'Created',
    label: 'Created'
  },{
  value: 'Published',
  label: 'Published'
}];

export default function Cardpopup() {
    const dispatch = useDispatch();

    const card_popup = useSelector(state => state.CARD_POPUP);
    const card_error = useSelector(state => state.SHOW_CARD_ERROR);
return(
    <div>
        <Dialog style={{width:"50%",marginLeft:"25%"}} open={card_popup}>
            <DialogTitle  className="popupHeader">
                ENTER DRL FILE DETIALS
            </DialogTitle>
            <DialogContent>
                <Grid container>
                    <Grid item xs={12}>
                    <TextField
                    label="FileName"
                    onKeyUp={(event) => localStorage.setItem("FileName" ,event.target.value)}
                    placeholder="Enter DRL File Name:"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                     shrink: true,
                    }}
                    variant="outlined"
                    />

                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                    label="Version"
                    placeholder="Enter File verison:"
                    fullWidth
                    onKeyUp={(event) => localStorage.setItem("version" ,event.target.value)}
                    margin="normal"
                    InputLabelProps={{
                     shrink: true,
                    }}
                    variant="outlined"
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <FormControl > 
        <InputLabel style={{fontSize:"10px",marginLeft:"5px"}} >Status</InputLabel>
        <Select  id="status" variant="outlined" style={{width:"100px !important"}}
        onChange={(event) => localStorage.setItem("status" ,event.target.value)}>
        {status.map(val => (
            <MenuItem key={val.value} value={val.value}>
            {val.label}
            </MenuItem>
        ))}
        </Select></FormControl>

                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                    label="Discription"
                    placeholder="Optional:"
                    fullWidth
                    margin="normal"
                    onKeyUp={(event) => localStorage.setItem("discription" ,event.target.value)}
                    InputLabelProps={{
                     shrink: true,
                    }}
                    variant="outlined"
                    />

                    </Grid>

                </Grid>
                <div hidden={!card_error} >
                <Alert severity="error"  onClose={() => dispatch(SHOW_CARD_ERROR())}>{keys.CARD_ERROR}</Alert>
                </div>
            </DialogContent>
            <DialogActions>
            <Button onClick={() => dispatch(TOOGLEPOPUP())}  variant="contained" autoFocus color="secondary">
            CANCEL
          </Button>
          <Button   onClick={(event) => (cardValidator() ? dispatch(ADDCARD()):dispatch(SHOW_CARD_ERROR()))}  variant="contained" color="primary" autoFocus>
            CREATE
          </Button>
            </DialogActions>
        </Dialog>
    </div>
)
    
}