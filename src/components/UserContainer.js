import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux/user/userAction";

const UserComponent = ({ userData, fetchUser }) => {
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);
  return userData.isLoading ? (
    <h2>Loading...</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>user lists</h2>
      <div>
        {userData &&
          userData.users &&
          userData.users.map(user => <p>{user.name}</p>)}
      </div>
    </div>
  );
};

const mapStateToProps = satte => {
  return {
    userData: satte.user
  };
};

const mapDspatchToProps = dispatch => {
  return {
    fetchUser: () => dispatch(fetchUsers())
  };
};

export default connect(
  mapStateToProps,
  mapDspatchToProps
)(UserComponent);
