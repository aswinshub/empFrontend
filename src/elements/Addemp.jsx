import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Addemp = (props) => {
  const [form, setForm] = useState({
    name: "",
    position: "",
    salary: "",
    location: "",
    email: "",
    password: "",
  });



  const navigate = useNavigate();
  function submitform(){
    if(props.method==="put"){
      axios.put("http://localhost:4002/emp/edit/"+props.data._id,form)
      .then((response)=>{
       
        if (response.data==="Updated successfully") {
         alert(response.data)
          window.location.reload(false);
    
          
        } else {
          alert("not updated")
        }
      })}
      else{
      axios.post('http://localhost:4002/emp/add',form).then((res)=>{
        alert(res.data);
     
      })}
  navigate("/admin");
  }
 




  // function submitForm() {
  //   axios.post("http://localhost:4002/emp/add", form).then((res) => {
  //     alert(res.data);

  //     navigate("/admin");
  //   });
  // }

  return (
    
    <div
      style={{
        margin: "5% 30%",
        justifyContent: "center",
        display: "flex",
        textAlign: "center",
      }}
    >
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "35ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <h2> Employee Form</h2> <br />
        <div>
          <TextField
            label="Name"
            onChange={(e) => {
              setForm({ ...form, name: e.target.value });
            }}
          />
          <TextField
            label="Designation"
            onChange={(e) => {
              setForm({ ...form, position: e.target.value });
            }}
          />

          <TextField
            label="Location "
            onChange={(e) => {
              setForm({ ...form, location: e.target.value });
            }}
          />
          <TextField
            label="Email"
            onChange={(e) => {
              setForm({ ...form, email: e.target.value });
            }}
          />
          <TextField
            label="Password"
            type="password"
            onChange={(e) => {
              setForm({ ...form, password: e.target.value });
            }}
          />
        </div>
        <br />
        <Button
          size="large"
          variant="contained"
          color="success"
          onClick={submitform}
        >
      
          Save 
        </Button>
      </Box>
    </div>
  );
};

export default Addemp;
