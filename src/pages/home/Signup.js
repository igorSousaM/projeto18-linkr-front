import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Containner, ContainnerLeft, ContainnerRight, Signin } from './Signin'
import { postSignup } from '../../servers/UserServices'

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [photo, setPhoto] = useState("");
  const signup = {
    name: username,
    email: email,
    password: password,
    photo: photo,
  };

  const navigate = useNavigate();
  function handleForm(e ) {
    e.preventDefault();
    const register = postSignup(signup);
    register.then((response) => {
      navigate("/");
    }).catch((error) => {
      console.log(error);
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
            <input
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="photo"
            placeholder="photo"
            onChange={(e) => setPhoto(e.target.value)}
            required
          />

          <button type="submit"> Sign Up </button>
          <Link to={'/'}>
            <p>Switch back to log in</p>
          </Link>
        </form>
      </ContainnerRight>
    </Containner>
  )
}