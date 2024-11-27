import React from "react";
import useAuth from "../../hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();

  console.log(user);

  return (
    <div className="bg-[#f1f1f1]">
      <div>
        <div className="avatar">
          <div className="w-24 rounded-xl">
            <img src={user?.photoURL} />
          </div>
        </div>
        <div>
          <h3>{user?.displayName}</h3>
          <h3>General Manager</h3>
          <p>{user?.email}</p>
          <p>0123456789</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
