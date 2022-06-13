import {Button,TextField,Grid,Container } from "@mui/material"
//import { Container } from "@mui/system";
import { useState } from "react";
const Home =() =>{
    const [values,setValues]=useState({
        name:"",
        lastname:"",
        email:"",
        telephone:"",
        dni:"",
    })

    const handleInputChange=(event)=>{
        const {name,value}=event.target;
        console.log(value);
        console.log(name);
        //console.log(event.target.value);
        //console.log(event.target.name);
        setValues({
            ...values,
            [name]:value,
        })
    };
    const handleSendData =() => {
        console.log(values);
    }
    return (
        <Container>
            <Grid container spacing={3}>
            <Grid item xs={12}>

            <h1>Home DL</h1>
            </Grid>
            <Grid item xs={6}>
            <TextField label="Ingrese su correo" fullWidth
            onChange={handleInputChange} name="email"/>
            </Grid>
            <Grid item xs={6}>
            <TextField label="Ingrese su nombre" fullWidth 
            onChange={handleInputChange} name ="name"/>
            </Grid>
            <Grid item xs={6}>
            <TextField label="Ingrese su apellido" fullWidth 
            onChange={handleInputChange} name="lastname" />
            </Grid>
            <Grid item xs={6}>
            <TextField label="Ingrese su telefono" fullWidth 
            onChange={handleInputChange} name="telephone"/>
            </Grid>
            <Grid  item xs={0} direction="row" justifyContent="center" alignItems="center" container  >
            <TextField label="Ingrese su dni" fullWidth  
            onChange={handleInputChange} name="dni"/>
            </Grid>
            
            <Grid item xs={12}>
            <Button color="primary" variant="contained" onClick={handleSendData}>
                Home button
            </Button>
            </Grid>
            </Grid>
        </Container>
    )
};
export default Home;