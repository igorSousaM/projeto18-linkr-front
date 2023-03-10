import React, { useState } from "react";
import styled from "styled-components";
import { AuthContext } from "../../providers/Context";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { Link, useNavigate } from "react-router-dom";
export const NavBar = () => {
  const { userInformation, arrow, showArrow, showArrowALl } =
    React.useContext(AuthContext);
  const navigate = useNavigate();
  const { photo } = userInformation;
  function logout() {
    localStorage.removeItem("tokenLikr");
    navigate("/");
  }
  return (
    <>
      <ContainnerNav onClick={showArrowALl}>
      <Link to={"/timeline"}><h1>linkr</h1></Link>
      <UserPhoto>
          {arrow ? (
            <SlArrowDown onClick={showArrow} className="arrow" />
          ) : (
            <SlArrowUp onClick={showArrow} className="arrow" />
          )}
          <img onClick={showArrow} src={photo} />
        </UserPhoto>
      </ContainnerNav>
      {!arrow ? <Logout onClick={logout}>Logout</Logout> : null}
    </>
  );
};

export const ContainnerNav = styled.div`
  display: flex;
  align-items: center;
  justify-content:space-between;
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

`;
export const Logout = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 47px;
  color: #fff;
  background: #171717;
  border-radius: 0px 0px 20px 20px;
  font-weight: 700;
  font-size: 17px;
  line-height: 20px;
  letter-spacing: 0.05em;
  cursor: pointer;
`;

export const UserPhoto = styled.div`

  
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right:20px;
    gap:20px;
    img {
    width: 53px;
    height: 53px;
    background: url(image);
    border-radius: 26.5px;
 
    cursor: pointer;
  }
  .arrow {
   
    cursor: pointer;
  }

`
