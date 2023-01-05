import React, { useEffect, useState } from "react";
import { getSignup } from "../servers/UserServices";

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
  const [token, setToken] = useState("");
  const [userInformation, setUserInformation] = useState("");
  const [arrow, setArrow] = useState(true);
  function showArrow() {
    if (arrow) setArrow(false);
    if (!arrow) setArrow(true);
  }
  function showArrowALl() {
    if (!arrow) setArrow(true);
  }
  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        userInformation,
        setUserInformation,
        arrow,
        setArrow,
        showArrow,
        showArrowALl
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
