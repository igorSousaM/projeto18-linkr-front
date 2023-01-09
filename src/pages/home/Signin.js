import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/Context";
import { postSignin } from "../../servers/UserServices";
export const Signin = () => {
  const { token, setToken, setArrow } = React.useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [on, setOn] = useState(false);
  const navigate = useNavigate();

  const signin = {
    email: email,
    password: password,
  };

  function handleForm(e) {
    e.preventDefault();
    const user = postSignin(signin);
    setOn(true);
    user
      .then((response) => {
        const { token } = response.data;
        setToken(token);
        localStorage.setItem("tokenLikr", JSON.stringify(token));
        setArrow(true);
        navigate("/timeline");
      })
      .catch((error) => {
        alert("email ou password incorretos");
        setOn(false);
      });
  }
  return (
    <Containner>
      <ContainnerLeft>
        <h1>linkr</h1>
        <p>
          save, share and discover <br /> the best links on the web
        </p>
      </ContainnerLeft>
      <ContainnerRight>
        <form onSubmit={handleForm}>
          <input
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Button disabled={on} type="submit">
            Sign Up
          </Button>
          <Link to={"/sign-up"}>
            <p>First time? Create an account!</p>
          </Link>
        </form>
      </ContainnerRight>
    </Containner>
  );
};

export const Containner = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;
  }
`;
export const ContainnerLeft = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: #fff;
  background: #000;
  width: 70%;
  height: 100vh;
  @media (max-width: 1500px) {
    width: 60%;
  }
  @media (max-width: 1000px) {
    width: 60%;
  }
  @media (max-width: 450px) {
    width: 100%;
    height: 175px;
    align-items: center;
    padding: 15px 0;
    background: #151515;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  

  h1 {
    font-weight: 700;
    font-size: 106px;
    font-family: 'Passion One';
    line-height: 117px;
    letter-spacing: 0.05em;
    margin-left: 250px;
    @media (max-width: 1000px) {
      font-weight: 700;
      font-size: 80px;
      margin-left: 130px;
    }
    @media (max-width: 450px) {
      font-size: 76px;
      line-height: 84px;
      color: #ffffff;
      margin-left: 0;
    }
  }
  p {
    font-family: 'Oswald';
    font-weight: 700;
    font-size: 43px;
    line-height: 64px;
    margin-left: 250px;
    @media (max-width: 1000px) {
      font-weight: 700;
      font-size: 33px;
      margin-left: 130px;
      line-height: 44px;
    }
    @media (max-width: 450px) {
      font-weight: 700;
      font-size: 23px;
      line-height: 34px;
      margin-left: 0;
    }
  }
`;
export const ContainnerRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #3a3939;
  width: 30%;
  height: 100vh;
  color: #000;
  @media (max-width: 1500px) {
    width: 40%;
  }
  @media (max-width: 1000px) {
    width: 40%;
  }
  @media (max-width: 450px) {
    width: 100%;
    height: 100vh;
    padding: 40px 0;
   align-items:flex-start;
  }
 
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 13px;
    input {
      border-radius: 6px;
      width: 409px;
      height: 35px;
      padding: 20px;
      font-weight: 700;
      font-size: 27px;
      line-height: 40px;
      color: #9f9f9f;
      font-family: 'Oswald';
      @media (max-width: 1000px) {
        width: 300px;
        height: 13px;
        font-size: 17px;
        border-radius: 9px;
        border-color:#fff;
      }
    }
    
    p {
      color: #fff;
      font-family: 'Lato';
    }
  }
`;

export const Button = styled.button`
  width: 450px;
  height: 65px;
  background: #1877f2;
  border-radius: 6px;
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  line-height: 40px;
  color: #fff;
  font-family: 'Oswald';
  cursor: pointer;
  ${(props) => {
    if (props.disabled === true) {
      return `
           background:#3a3939;
         `;
    }
  }}
  @media (max-width: 1000px) {
    width: 344px;
    height: 55px;
    font-size: 17px;
    border-radius: 9px;
    border-color:#1877f2;
  }
`;
