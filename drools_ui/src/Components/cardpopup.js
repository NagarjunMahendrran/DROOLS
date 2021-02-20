import { Dialog, DialogContent, Grid } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select'
import MenuItem from "@material-ui/core/MenuItem"
import { useSelector } from "react-redux";


const status = [{
    value: 'Created',
    label: 'Created'
  }, {
    value: 'OnHold',
    label: 'onHold'
  },{
  value: 'InReview',
  label: 'InReview'
}, {
  value: 'Published',
  label: 'Published'
}];

export default function Cardpopup() {

    const card_popup = useSelector(state => state.CARD_POPUP);
return(
    <div>
        <Dialog open={card_popup}>
            <DialogTitle>
                Please file Drl File Detials
            </DialogTitle>
            <DialogContent>
                <Grid container>
                    <Grid item xs={12}>
                    <TextField
                     id="outlined-full-width"
                    label="Label"
                    style={{ margin: 8 }}
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
                     id="outlined-full-width"
                    label="Label"
                    style={{ margin: 8 }}
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
                    <FormControl > 
        <InputLabel style={{fontSize:"10px",marginLeft:"5px"}} >Status</InputLabel>
        <Select variant="outlined" 
        fullWidth
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
                     id="outlined-full-width"
                    label="Label"
                    style={{ margin: 8 }}
                    placeholder="Enter DRL File Name:"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                     shrink: true,
                    }}
                    variant="outlined"
                    />

                    </Grid>

                </Grid>
            </DialogContent>
        </Dialog>
    </div>
)
    
}