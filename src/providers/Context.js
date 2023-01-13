import React, { useState } from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
  const [token, setToken] = useState("");
  const [userInformation, setUserInformation] = useState("");
  const [arrow, setArrow] = useState(true);
  const [config, setConfig] = useState({});
  const [posts, setPosts] = useState();
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
        config,
        setConfig,
        showArrow,
        showArrowALl,
        posts, 
        setPosts
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
