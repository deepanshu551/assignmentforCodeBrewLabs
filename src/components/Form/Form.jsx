import React,{useState} from 'react';
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import {connect} from 'react-redux';
import Input from "@mui/material/Input";
import {addContact} from "../../redux/actions/actions";
import {v4 as uuidv4} from "uuid";
import {useHistory} from "react-router-dom";
const Forms=(props)=> {
    
    const history=useHistory();
    const [name,setName]=useState('');
    const [contact,setContact]=useState('');
    const [email,setEmail]=useState('');
    const submitButton=(e)=>{
        e.preventDefault();
        const data={id:uuidv4(),name:name,contact:contact,email:email,favI:false};
       props.addContact(data);
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
          <Input type='text' onChange={(e)=>setName(e.target.value)}/>
      </FormControl>
      <br/>
      <FormControl>

<FormLabel>
    Phone
</FormLabel>
<Input type='number' onChange={(e)=>setContact(e.target.value)}/>
</FormControl>
<br/>
<FormControl>

<FormLabel>
    Email
</FormLabel>
<Input type='email' onChange={(e)=>setEmail(e.target.value)}/>
</FormControl>
<br/>
<Button sx={{m:2}} variant='contained' onClick={(e)=>submitButton(e)}>Add</Button>
  </div>;
}
function mapStateToProps(state){

    
    return {contacts:state.contacts}
}

function mapDispatchToProps(dispatch){
    return {
        addContact:(d)=>dispatch(addContact(d))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Forms);