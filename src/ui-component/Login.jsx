import { Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({
    name: "",
    password: "",
  });

  const navigate = useNavigate();

  function submitForm() {
    axios.post("http://localhost:4002/login/", form).then((res) => {
      alert(res.data.message);
      if (res.data.message === "success") {
        navigate("/admin");
      }

    });
  }

  return (
    <div style={{ margin: "10% 35%", textAlign: "center" }}>
      <Typography variant="h3" style={{ color: "Black" }}>
        Employee Login
      </Typography>
      <br />
      <br />
      <TextField
        variant="outlined"
        fullWidth
        label="Username"
        name="username"
        onChange={(e) => {
          setForm({ ...form, name: e.target.value });
        }}
      />
      <br />
      <br />
      <TextField
        variant="outlined"
        fullWidth
        label="Password"
        type="password"
        name="password"
        onChange={(e) => {
          setForm({ ...form, password: e.target.value });
        }}
      />
      <br />
      <br />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={submitForm}
      >
        Login
      </Button>
      <br />
      <br />
    </div>
  );
};

export default Login;
