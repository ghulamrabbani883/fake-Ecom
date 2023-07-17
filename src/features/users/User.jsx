import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUserById,
  getSingleUser,
  getUserError,
  getUserStatus,
} from "./userSlice";
import { useParams } from "react-router-dom";
import Loader from "../../Components/Loader";

const User = () => {
  const user = useSelector(getSingleUser);
  const userStatus = useSelector(getUserStatus);
  const userError = useSelector(getUserError);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchUserById());
  // }, []);

  // if (userStatus === "pending") {
  //   return <Loader />;
  // }
  // if (userError) {
  //   return <p>{JSON.stringify(userError)}</p>;
  // }

  return <div>nlsvnlasbfalsfna</div>;
};

export default User;
