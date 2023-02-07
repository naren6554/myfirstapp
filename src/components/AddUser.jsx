import { useState } from "react";
import { FormControl, FormGroup, Input, InputLabel, Typography,styled,Button } from "@mui/material"
import { addUser } from "../service/api";


const defaultValues={
    Name:'',
    uname:'',
    email:'',
    age:'',
    phone:''

}

const Container=styled(FormGroup)`width:50%;margin:5% auto 0 auto ; & > div {margin-top:20px}`;




const AddUser = () => {
    
    const [user, SetUser]=useState(defaultValues);
    
    const onValueChange=(e) => {
        SetUser({...user,[e.target.name]:e.target.value});
        
    }
const addUserDetails = async() => {
    await addUser(user);

}

    return (
            
<FormGroup>
    <Container>
    <Typography variant="h4">Add User</Typography>
    <FormControl>
        <InputLabel>Name</InputLabel>
        <Input name='Name' onChange={(e) => onValueChange(e)}></Input>

    </FormControl>
    <FormControl>
        <InputLabel>UserName</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='uname'></Input>
    </FormControl>
    <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='email'></Input>
    </FormControl>
    <FormControl>
        <InputLabel>Age</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='age'></Input>
    </FormControl>
    <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='phone'></Input>
       
        
    </FormControl>
    <FormControl><Button variant="contained" onClick={()=>addUserDetails()}>Add User</Button></FormControl>
    </Container>
</FormGroup>
    )
}
export default AddUser;