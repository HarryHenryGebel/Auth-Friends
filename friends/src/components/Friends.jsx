import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getFriends } from "../util/network.js";

function Friends(props) {
  const { getFriends } = props;
  useEffect(() => getFriends());

  return <div />;
}

export default connect(null, { getFriends })(Friends);
