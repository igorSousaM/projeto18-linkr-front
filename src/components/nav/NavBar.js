import React from "react";
import styled from "styled-components";
import { AuthContext } from "../../providers/Context";

export const NavBar = () => {
  const { userInformation } = React.useContext(AuthContext);
  const  {photo}  = userInformation
  console.log(photo)
  return (
    <ContainnerNav>
      <h1>linkr</h1>
      <img
        src={photo}
      />
    </ContainnerNav>
  );
};

export const ContainnerNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 10vh;
  background: #000;
  color: #fff;
  h1 {
    margin-left: 20px;
    font-weight: 700;
    font-size: 49px;
    line-height: 54px;
    letter-spacing: 0.05em;
  }
  img {
    width: 53px;
    height: 53px;
    background: url(image);
    border-radius: 26.5px;
    margin-right: 20px;
  }
`;
