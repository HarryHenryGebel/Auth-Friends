import React, { useEffect } from "react";
import { connect } from "react-redux";

import Friend from "./Friend";
import FriendForm from "./FriendForm";
import { getFriends } from "../util/network.js";

function Friends(props) {
  const { friends, getFriends } = props;

  useEffect(() => getFriends());

  return (
    <>
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend} />
      ))}
      <FriendForm />
    </>
  );
}

function mapStateToProps(state) {
  return {
    friends: state.friends,
  };
}

export default connect(mapStateToProps, { getFriends })(Friends);
