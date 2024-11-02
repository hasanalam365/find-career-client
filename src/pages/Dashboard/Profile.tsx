import React from "react";
import useAuth from "../../hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();

  return (
    <div>
      <ul>
        <li> Name: {user?.displayName}</li>
        <li> Email: {user?.email}</li>
      </ul>
    </div>
  );
};

export default Profile;
