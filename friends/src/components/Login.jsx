import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";

import login from "../util/network";

const initialValues = {
  username: "",
  password: "",
};

export default function Login() {
  const [values, setValues] = useState(initialValues);

  function onChange(event) {
    const { id, value } = event.target;

    setValues({ ...values, [id]: value });
  }

  return (
    <Box m={1}>
      <Card variant="outlined">
        <Typography variant="h2">Log In</Typography>
        <Box m={1}>
          <TextField
            fullWidth
            id="username"
            label="Username"
            onChange={onChange}
            required
            value={values.username}
            variant="outlined"
          />
        </Box>
        <br />
        <Box m={1}>
          <TextField
            autoComplete="current-password"
            fullWidth
            id="password"
            label="Password"
            onChange={onChange}
            required
            type="password"
            value={values.age}
            variant="outlined"
          />
        </Box>
        <Box m={1}>
          <Button
            disabled={values.username.trim() === "" || values.password.trim()}
            onClick={() => {
              login(values.username, values.password);
              setValues(initialValues);
            }}
            startIcon={<ExitToAppRoundedIcon />}
            variant="contained"
          >
            Add
          </Button>
        </Box>
      </Card>
    </Box>
  );
}

//  LocalWords:  ExitToAppRounded
