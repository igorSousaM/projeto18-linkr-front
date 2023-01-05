import React, { useEffect } from "react";
import styled from "styled-components";
import { NavBar } from "../../components/nav/NavBar";
import { AuthContext } from "../../providers/Context";
import { getSignup } from "../../servers/UserServices";

export const Timeline = () => {
  const { setUserInformation, showArrowALl } = React.useContext(AuthContext);
  let token = localStorage.getItem("tokenLikr");
  token = JSON.parse(token);

  const config = {
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  
  useEffect(() => {
    const userMe = getSignup(config);
    userMe
      .then((response) => {
        setUserInformation(response.data);
      })
      .catch(() => {
        console.log("error");
      });
  }, []);
  return (
    <>
      <NavBar/>
      <ContainnerTimeline onClick={showArrowALl} >{token}</ContainnerTimeline>
    </>
  );
};

export const ContainnerTimeline = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background: #3a3939;
`;
