import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import { connect } from "react-redux";

import { addFriend } from "../util/network.js";

const initialValues = {
  name: "",
  age: "",
  email: "",
};

function FriendForm(props) {
  const { addFriend } = props,
    [values, setValues] = useState(initialValues);

  function onChange(event) {
    const { id, value } = event.target;

    setValues({ ...values, [id]: value });
  }

  if (true)
    return (
      <Box m={1}>
        <Card variant="outlined">
          <Typography variant="h2">Add a Friend</Typography>
          <Box m={1}>
            <TextField
              fullWidth
              id="name"
              label="Name"
              onChange={onChange}
              required
              value={values.name}
              variant="outlined"
            />
          </Box>
          <br />
          <Box m={1}>
            <TextField
              fullWidth
              id="age"
              label="Age"
              onChange={onChange}
              required
              value={values.age}
              variant="outlined"
            />
          </Box>
          <br />
          <Box m={1}>
            <TextField
              fullWidth
              id="email"
              label="Email"
              onChange={onChange}
              required
              value={values.email}
              variant="outlined"
            />
          </Box>
          <br />
          <Box m={1}>
            <Button
              disabled={
                values.name.trim() === "" ||
                values.age.trim() === "" ||
                values.email.trim() === ""
              }
              onClick={() => {
                addFriend({
                  name: values.name.trim(),
                  age: values.age.trim(),
                  email: values.email.trim(),
                });
                setValues(initialValues);
              }}
              startIcon={<AddCircleOutlineOutlinedIcon />}
              variant="contained"
            >
              Add
            </Button>
          </Box>
        </Card>
      </Box>
    );
  // else if (!error) return <h2>Posting...</h2>;
  // else return <h2>Error: {`${error}`}</h2>;
}
export default connect(null, { addFriend })(FriendForm);

//  LocalWords:  AddCircleOutlineOutlined
