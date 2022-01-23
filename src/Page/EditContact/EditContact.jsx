import React from 'react';
import Typography from '@mui/material/Typography';
import FormEdit from "../../components/Form/FormEdit";
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
const EditContact=(props) =>{

  const {id}=useParams();
  const data=props.contacts.find(f=>f.id===id);

  return <div className="container">
<Typography variant='h1'>Edit Contact</Typography>
    <div ><FormEdit {...data}/></div>
  </div>;
}
function mapStateToProps(state){
return {contacts:state.contacts}
}
export default connect(mapStateToProps)(EditContact);
