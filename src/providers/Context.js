import React, { useEffect, useState } from "react";
import { getSignup } from "../servers/UserServices";

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
  const [token, setToken] = useState("");
  const [userInformation, setUserInformation] = useState("");

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        userInformation,
        setUserInformation,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
