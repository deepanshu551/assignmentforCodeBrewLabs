import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useHistory} from "react-router-dom";
import {connect} from "react-redux";
import {deleteContact,addFavourite} from "../../redux/actions/actions";
const Cards=(props) =>{
  const history=useHistory();

const Fav=()=>{

  const t=document.getElementById('favirout');
 
  props.addFavourite(props.id);

}

const editHandler=(id)=>{
history.push(`/edit/${id}`)
}
const deleteHandler=(id)=>{
  props.deleteContact(id);
}
  return <Card sx={{ minWidth: 275 }}>
  <CardContent>
    <Typography sx={{ fontSize: 30 }} color="text.secondary" gutterBottom>
      {props.name}
    </Typography>
    <Typography variant="h5" component="div">
     +91-{props.contact}

    </Typography>
    <Typography sx={{ mb: 1.5 }} color="text.secondary">
      {props.email}
    </Typography>
    <Typography variant="body2">
   
    </Typography>
  </CardContent>
  <CardActions>
    <Button variant='outlined' size="small" onClick={()=>{editHandler(props.id)}}>Edit</Button>
    <Button variant='outlined' size="small" color='error' onClick={()=>{deleteHandler(props.id)}}>Delete</Button>
    <Button onClick={()=>Fav()}><FavoriteIcon color={props.favI?'warning':''} id='favirout'/></Button>
  </CardActions>


</Card>;
}
function mapStateToProps(state){
  console.log('card',state)
  return {
    contacts:state.contacts,
    fav:state.fav
  }
}
function mapDispatchToProps(dispatch){

  return {

    deleteContact:(d)=>dispatch(deleteContact(d)),
    addFavourite:(d)=>dispatch(addFavourite(d))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cards)