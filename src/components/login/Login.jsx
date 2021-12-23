import React, { useState } from "react";
import loginImg from "./../../images/login.jpg";
import { alpha, styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import userApi from "./../api/userApi";
import { useHistory } from "react-router-dom";
const divStyle = {
  width: "100%",
  height: "100vh",
  backgroundImage: `url(${loginImg})`,
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
    borderBottomColor: "white",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
      color: "#EEB25C",
    },
    "&:hover fieldset": {
      borderColor: "#90B274",
      color: "white",
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
  style: { color: "white" },
};
const Login = (props) => {
  const history = useHistory();
  const { authUser, setAuthUser } = props;
  const { classes } = props;
  const [user, setUser] = useState({ username: "", password: "" });
  const [error, setError] = useState([]);

  const onInputChange = (e) => {
    console.log(user);
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onLoginSubmit = (e) => {
    e.preventDefault();
    userApi
      .login(user)
      .then((res) => {
        localStorage.setItem("auth", res.data.body.accessToken);
        setAuthUser(res.data.body);
        history.push("/recipes");
      })
      .catch((err) => {
        setError([...err.response.data.messages]);
      });
  };
  return (
    <div style={divStyle}>
      <form style={formStyle} onSubmit={onLoginSubmit}>
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
          label="User Name or E-mail"
          id="custom-css-outlined-input"
          InputLabelProps={{
            style: { color: "white" },
          }}
          InputProps={fontColor}
        />
        <CssTextField
          style={{ marginBottom: "20px" }}
          label="password"
          type="password"
          name="password"
          value={user.password}
          onChange={onInputChange}
          id="custom-css-outlined-input"
          InputLabelProps={{ sx: { color: "white" } }}
          InputProps={fontColor}
        />
        <Button
          variant="contained"
          type="submit"
          style={{
            marginLeft: "10px",
            backgroundColor: "#90B274",
            width: "200px",
          }}
        >
          Sign In
        </Button>
      </form>
    </div>
  );
};

export default Login;
