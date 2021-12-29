import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import RegisterImg from "./../../images/register.jpg";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import userApi from "./../api/userApi";
import { useHistory } from "react-router-dom";
const divStyle = {
  width: "100%",
  height: "100vh",
  backgroundImage: `url(${RegisterImg})`,
  backgroundSize: "120% 100%",
  backgroundPosition: "60%",
  backgroundRepeat: " no-repeat",
  display: "flex",
  justifyContent: "end",
  paddingTop: "50px",
};
const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#EEB25C",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#262416",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#262416",
      color: "#EEB25C",
    },
    "&:hover fieldset": {
      borderColor: "#90B274",
      color: "#262416",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#90B274",
      color: "#EEB25C",
    },
  },
  "&.css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
    color: "white",
  },
});

const formStyle = {
  width: "50%",
  margin: "auto 0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};
const fontColor = {
  style: { color: "#262416" },
};

const Register = (props) => {
  const { classes } = props;
  const [user, setUser] = useState({ username: "", password: "" });
  const [error, setError] = useState([]);

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onRegisterSubmit = (e) => {
    e.preventDefault();
    userApi
      .register(user)
      .then((res) => {
        localStorage.setItem("auth", res.data.body.accessToken);
        console.log(user);
      })
      .catch((err) => {
        setError([...err.response.data.messages]);
      });
  };
  return (
    <div style={divStyle}>
      <form style={formStyle} onSubmit={onRegisterSubmit}>
        {error.length > 0 &&
          error.map((err) => (
            <p key={err} style={{ color: "red" }}>
              {err}
            </p>
          ))}
        <CssTextField
          style={{ marginBottom: "20px" }}
          name="username"
          value={user.username}
          onChange={onInputChange}
          label="User name"
          id="custom-css-outlined-input"
          InputLabelProps={{
            style: { color: "#262416" },
          }}
          InputProps={fontColor}
        />
        <CssTextField
          style={{ marginBottom: "20px" }}
          name="firstname"
          value={user.username}
          onChange={onInputChange}
          label="First Name"
          id="custom-css-outlined-input"
          InputLabelProps={{
            style: { color: "#262416" },
          }}
          InputProps={fontColor}
        />
        <CssTextField
          style={{ marginBottom: "20px" }}
          name="lastname"
          value={user.username}
          onChange={onInputChange}
          label="Last Name"
          id="custom-css-outlined-input"
          InputLabelProps={{
            style: { color: "#262416" },
          }}
          InputProps={fontColor}
        />
        <CssTextField
          style={{ marginBottom: "20px" }}
          name="email"
          value={user.username}
          onChange={onInputChange}
          label="E-mail"
          id="custom-css-outlined-input"
          InputLabelProps={{
            style: { color: "#262416" },
          }}
          InputProps={fontColor}
        />
        <CssTextField
          style={{ marginBottom: "20px" }}
          label="Password"
          type="password"
          name="password"
          value={user.password}
          onChange={onInputChange}
          id="custom-css-outlined-input"
          InputLabelProps={{ sx: { color: "#262416" } }}
          InputProps={fontColor}
        />
        <CssTextField
          style={{ marginBottom: "20px" }}
          label="Confirm Password"
          type="password"
          name="confirm"
          value={user.password}
          onChange={onInputChange}
          id="custom-css-outlined-input"
          InputLabelProps={{ sx: { color: "#262416" } }}
          InputProps={fontColor}
        />
        <Button
          variant="contained"
          type="submit"
          style={{
            marginLeft: "10px",
            backgroundColor: "#CB8A2D",
            width: "200px",
          }}
        >
          Register
        </Button>
      </form>
    </div>
  );
};

export default Register;
