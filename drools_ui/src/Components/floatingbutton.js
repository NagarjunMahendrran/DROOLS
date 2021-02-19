import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {TOOGLEPOPUP} from "../Actions/Actions"
import { useDispatch } from 'react-redux';

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

export default function FloatingActionButtons() {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
      <Fab className={"AddButtonStyle"} color="primary" onClick={() => dispatch(TOOGLEPOPUP())} aria-label="add">
        <AddIcon />
      </Fab>
    </div>
  );
}
