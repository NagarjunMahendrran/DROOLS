import Container from '@material-ui/core/Container';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid'
import EditIcon from '@material-ui/icons/Edit';
import React from 'react';
import IconButton from '@material-ui/core/IconButton'
import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { green } from '@material-ui/core/colors';
import GetAppOutlinedIcon from '@material-ui/icons/GetAppOutlined';

function CardCreator() {
    const cards = useSelector(state => state.cards);
  return (
      <Grid  spacing={2} style={{marginTop:20}}  container>
      {cards.map(card =>
            CREATECARD(card)
      )}
      </Grid>
  );
}

function CREATECARD(card) {
    if(card != null){
    return(
        <Grid  item spacing={2} style={{marginTop:10}} xs={6} md={4} lg={4} >
            <Card >
      <CardActionArea>
        <CardContent style={{display:"block"}}>
          <Typography style={{float:"left"}}  variant="h4" component="h1">
            {card.name}
          </Typography>
          </CardContent>
          <br/>
          <CardContent>
          <Typography style={{float:"left"}}  variant="h6" component="">
            Status:{card.Status}
          </Typography>
          </CardContent>
          <CardContent>
          <Typography style={{float:"left"}}  variant="h6" component="">
            Verison:{card.version}
          </Typography>
          </CardContent>
      </CardActionArea>
      <CardActions style={{float:"right"}}>
        <IconButton onClick={() => downloadFile(card)} component="span" size="medium" style={{ color: green[500] }}>
          <GetAppOutlinedIcon/>
        </IconButton>
        <IconButton component="span" size="medium" color="primary">
          <EditIcon/>
        </IconButton>
        <IconButton component="span" size="medium" color="secondary">
          <DeleteOutlineRoundedIcon/>
        </IconButton>
      </CardActions>
        </Card>
        </Grid>
    )
        } 
}


function downloadFile(file) {
    var element = document.createElement('a');
    console.log(file);
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(file.fileData.split("|").join("\n")));
    element.setAttribute('download',(file.name)+".drl");
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    
}


export default CardCreator;
