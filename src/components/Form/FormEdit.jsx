import React,{useState} from 'react';
import {Form,Formik,Field} from "formik";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import {connect} from 'react-redux';
import Input from "@mui/material/Input";
import {editContact} from "../../redux/actions/actions";

import {useHistory} from "react-router-dom";
const Forms=(props)=> {
    console.log(props)
    const history=useHistory();
    const [name,setName]=useState(props.name);
    const [contact,setContact]=useState(props.contact);
    const [email,setEmail]=useState(props.email);
    const submitButton=(e)=>{
        e.preventDefault();
        const data={id:props.id,name:name,contact:contact,email:email};
       props.editContact(data);
       setName('');
       setContact('');
       setEmail('');
       history.push("/");

    }
  return <div className="form-controler">
      <FormControl>
          <FormLabel>
              Name
          </FormLabel>
          <Input value={name} onChange={(e)=>setName(e.target.value)}/>
      </FormControl>
      <br/>
      <FormControl>

<FormLabel>
    Phone
</FormLabel>
<Input value={contact} onChange={(e)=>setContact(e.target.value)}/>
</FormControl>
<br/>
<FormControl>

<FormLabel>
    Email
</FormLabel>
<Input value={email} onChange={(e)=>setEmail(e.target.value)}/>
</FormControl>
<br/>
<Button sx={{m:2}} variant='contained' onClick={(e)=>submitButton(e)}>Edit</Button>
  </div>;
}
function mapStateToProps(state){

    
    return {contacts:state.contacts}
}

function mapDispatchToProps(dispatch){
    return {
        editContact:(d)=>dispatch(editContact(d))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Forms);