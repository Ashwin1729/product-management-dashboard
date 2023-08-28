import React, { useContext, useEffect, useState } from "react";
import styles from "./Login.module.css";
import { TextField } from "@mui/material";

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../context/application-context";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import {
  notifyIncompleteFields,
  notifyError,
  notifyLoginSuccessful,
  notifyAlreadyLoggedIn,
} from "../../utils/toastify-objects";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const appCtx = useContext(AppContext);
  const user = appCtx.user;
  const setUser = appCtx.setUser;

  useEffect(() => {
    if (user) {
      notifyAlreadyLoggedIn();
      navigate("/");
    }
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (!email || !password) {
      notifyIncompleteFields();
      setLoading(false);
      return;
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/users/login",
        { email, password },
        config
      );

      notifyLoginSuccessful();
      setUser(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      navigate("/");
    } catch (error) {
      notifyError();
      setLoading(false);
    }
  };

  return (
    <div className={styles.form_container}>
      <div className={styles.login_card}>
        <p>Sign in to your Account</p>
        <form onSubmit={submitHandler}>
          <div className={styles.form_field}>
            <TextField
              id="standard-basic"
              label="Email / Username"
              variant="standard"
              fullWidth
              size="small"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.form_field}>
            <FormControl sx={{ width: "100%" }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={showPassword ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
          <button className={styles.submit_button} type="submit">
            Log In
          </button>
        </form>
      </div>

      <div className={styles.login_footer}>
        <div className={styles.create_account}>
          New here? <Link to="/sign_up">Create an account</Link>{" "}
        </div>
        <div className={styles.privacy_policy}>
          Terms of use | Privacy policy
        </div>
      </div>
    </div>
  );
};

export default Login;
