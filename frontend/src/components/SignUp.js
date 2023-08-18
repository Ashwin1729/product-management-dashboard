import React, { useState } from "react";
import { TextField } from "@mui/material";

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import styles from "./SignUp.module.css";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [confirmPassword, setConfirmPassword] = useState(false);
  const handleClickConfirmPassword = () => setConfirmPassword((show) => !show);
  const handleMouseDownConfirmPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.form_container}>
      <div className={styles.login_card}>
        <p>Sign up as a New User!</p>
        <form>
          <div className={styles.form_field}>
            <TextField
              id="standard-basic"
              label="Full Name"
              type="text"
              variant="standard"
              fullWidth
              size="small"
            />
          </div>
          <div className={styles.form_field}>
            <TextField
              id="standard-basic"
              label="Email"
              type="email"
              variant="standard"
              fullWidth
              size="small"
            />
          </div>
          <div className={styles.form_field}>
            <TextField
              id="standard-basic"
              label="Username"
              variant="standard"
              fullWidth
              size="small"
            />
          </div>
          <div className={styles.form_field}>
            <FormControl sx={{ width: "100%" }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password">
                Choose Password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
          <div className={styles.form_field}>
            <FormControl sx={{ width: "100%" }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password">
                Confirm Password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={confirmPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickConfirmPassword}
                      onMouseDown={handleMouseDownConfirmPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
          <button className={styles.submit_button} type="submit">
            Sign Up
          </button>
        </form>
      </div>

      <div className={styles.login_footer}>
        <div className={styles.create_account}>
          Already a User? <Link to="/login">Sign In</Link>{" "}
        </div>
        <div className={styles.privacy_policy}>
          Terms of use | Privacy policy
        </div>
      </div>
    </div>
  );
};

export default SignUp;
