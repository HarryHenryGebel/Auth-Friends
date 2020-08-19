import React, { useEffect } from "react";
import { connect } from "react-redux";

import Friend from "./Friend";
import { getFriends } from "../util/network.js";

function Friends(props) {
  const { friends, getFriends } = props;

  useEffect(() => getFriends());

  return (
    <>
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </>
  );
}

function mapStateToProps(state) {
  return {
    friends: state.friends,
  };
}

export default connect(mapStateToProps, { getFriends })(Friends);
