import React from "react";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

export default function Friend(props) {
  const { friend } = props;

  return (
    <Box m={1}>
      <Card variant="outlined">
        <Typography variant="h3">{friend.name}</Typography>
        <p>
          <Typography
            component="span"
            style={{ fontWeight: "bold", marginRight: "1rem" }}
          >
            Age:
          </Typography>
          <Typography component="span">{friend.age}</Typography>
        </p>
        <p>
          <Typography
            component="span"
            style={{ fontWeight: "bold", marginRight: "1rem" }}
          >
            Email:
          </Typography>
          <Typography component="span">{friend.email}</Typography>
        </p>
      </Card>
    </Box>
  );
}
