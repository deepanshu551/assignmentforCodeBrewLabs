import React,{useState} from 'react';
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import FormHelperText from "@mui/material/FormHelperText";
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
    const [nameError,setNameError]=useState(false);
    const [phoneError,setPhoneError]=useState(false)

    const [emailError,setEmailError]=useState(false)



    const submitButton=(e)=>{
        e.preventDefault();
        let nameErro=false;
        let phoneErro=false;
        let emailErro=false;
        function checkForm(){
          if(!name){
           setNameError(true)
           nameErro=true;
          }
        else{
          setNameError(false)
          nameErro=false;
        }
         if(!contact){
           
           setPhoneError(true)
           phoneErro=true
         } 
         else if(!/^\d{10}$/.test(contact)){
          setPhoneError(true)
          phoneErro=true
         }
else{
  setPhoneError(false)
          phoneErro=false
}
         if(!email){
           
          setEmailError(true)
          emailErro=true;
         }
         else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
          setEmailError(true)
          emailErro=true;

         }
         else{
          setEmailError(false)
          emailErro=false;
         }
        
        }
      
       checkForm();
       console.log("errors",nameErro,phoneErro,emailErro);
        if(!nameErro && !phoneErro && !emailErro){
          const data={id:uuidv4(),name:name,contact:contact,email:email,favI:false};
          props.addContact(data);
          setName('');
          setContact('');
          setEmail('');
          setNameError(false);
          setPhoneError(false);
          setEmailError(false);
          history.push("/");

        }
      
       
        

    }
  return <div className="form-controler">
       <FormControl error={nameError} variant="standard">
        <FormLabel>Name</FormLabel>
        <Input
        type="text"
          id="component-error"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          
        />
      
      </FormControl>
      <br/>
      <FormControl error={phoneError}>

<FormLabel>
    Phone
</FormLabel>
<Input type='number' onChange={(e)=>setContact(e.target.value)}/>
</FormControl>
<br/>
<FormControl error={emailError}>

<FormLabel>
    Email
</FormLabel>
<Input type='email' onChange={(e)=>setEmail(e.target.value)}/>
</FormControl>
<br/>
<Button sx={{m:2}} variant='contained'  onClick={(e)=>submitButton(e)}>Add</Button>
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