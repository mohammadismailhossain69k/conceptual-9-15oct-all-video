//amra akane korbo holo user login korle jey jey jinish gola dekthe pabe

import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router";
import { ClimbingBoxLoader } from "react-spinners";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  console.log(user);
  //amra just profile path e gele loading take dekthe parbo loading ta asche react teke
  if (loading) {
    return (
      <div className="h-[97vh] flex justify-center items-center">
        <ClimbingBoxLoader color="#e74c3c" />
      </div>
    );
  }

  //jodi usr singUp and login na thole take profile a niye jabe na use jodi url /profile leke tahole take signin page niye jabe

  if (!user) {
    return <Navigate to="/signin" />;
  }

  return children;
};

export default PrivateRoute;
