import React from 'react';
import {Container , AppBar,Typography,Grow,Grid} from '@material-ui/core';
import Show from './components/showFlight/showFlight';
import Create from './components/createFlight/createFlight';
import Search from './components/searchFlight';
import useStyles from './styles';
import { Outlet } from 'react-router-dom';
import "./Admin.css"
function Admin() {
  const classes =useStyles();

  return (

    <div className="Admin">
      <Container maxWidth="lg"> 
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className= {classes.heading} variant= "h4" align="center" >Show and Create flights</Typography>
        </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch">
           <Grid item xs={12} sm={7}>
             <AppBar className={classes.appBar}position="static" color="inherit">
               <Show>
               </Show>
             </AppBar>
             <AppBar className={classes.appBar}position="static" color="inherit">
             <Search>
             </Search>
             </AppBar>
           </Grid>
           <Grid item xs={12} sm={4}>
           <AppBar className={classes.appBar}position="static" color="inherit">
             <Create>
             </Create>
             </AppBar>
           </Grid>
          </Grid>
        </Container>
      </Grow>
      </Container>
      <Outlet/>
    </div>
  );
}

export default Admin;