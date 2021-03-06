import React from 'react';
import {connect} from "react-redux";
import {useHistory} from "react-router-dom";
import Cards from "../../components/Card/Cards";
import {Grid,Box,Typography} from "@mui/material";
const Favourite=(props)=> {
  console.log("p",props);
  const history=useHistory();
const fav=props.contacts.filter(f=>f.favI===true);
  
  return <div className='container'>
    <Typography variant='h2'>Favourite Contacts</Typography>
 <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8 }}>
        {fav.map((p, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Cards {...p}/>
          </Grid>
        ))}
      </Grid>
    </Box>

  </div>;
}
function mapStateToProps(state){

return {contacts:state.contacts}
}

export default connect(mapStateToProps)(Favourite);