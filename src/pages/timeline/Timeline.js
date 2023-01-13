import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NavBar } from "../../components/nav/NavBar";
import { AuthContext } from "../../providers/Context";
import { postPosts } from "../../servers/PostsServices";
import { getSignup } from "../../servers/UserServices";
import { ListPost } from "./ListPost";
import { getHashtags } from "../../servers/PostsServices";
import { Link } from "react-router-dom";

export const Timeline = () => {
  const { userInformation, setUserInformation, showArrowALl } =
    React.useContext(AuthContext);
  let token = localStorage.getItem("tokenLikr");
  token = JSON.parse(token);
  console.log(userInformation);
  const { photo } = userInformation;
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
      .catch((erro) => {
        console.log("error", erro.config);
      });
    getHashtags(config)
      .then((r) => {
        setTags(r.data);
        console.log(r);
      })
      .catch((erro) => console.log(erro));
  }, []);

  const [link, setLink] = useState("");
  const [text, setText] = useState("");
  const [loadingState, setLoadingState] = useState(false);
  const [tags, setTags] = useState([]);

  function createPost(e) {
    e.preventDefault();

    setLoadingState(true);

    const body = {
      link,
      text
    };
   
    postPosts(body, config)
      .then(() => {
        setLoadingState(false);
        setLink("");
        setText("");
      })
      .catch((err) => {
        console.log(err);
        alert("Houve um erro ao publicar seu link");
        setLoadingState(false);
      });
  }

  return (
    <>
      <NavBar />
      <ContainnerTimeline onClick={showArrowALl}>
        <PostContainner>
          <h1> Timeline</h1>
          <PostWriter>
            <img src={photo} alt="perfil" />
            <form onSubmit={createPost}>
              <h2>What are you going to share today?</h2>
              <input
                className="link"
                placeholder="http://..."
                value={link}
                onChange={(e) => setLink(e.target.value)}
                disabled={loadingState}
                required
              />
              <input
                className="text"
                placeholder="Awesome article about #javascript"
                value={text}
                onChange={(e) => setText(e.target.value)}
                disabled={loadingState}
              />
              <button type="submit">
                {loadingState ? "Publishing..." : "Publish"}
              </button>
            </form>
          </PostWriter>
          <ListPost createPost={createPost} />
        </PostContainner>
        <TrendingBox>
          <h4>trending</h4>
          <div></div>
          <ul>
            {tags.map((e, index) => (
              <Link to={`/hashtags/${e.name}`}>
                <li key={index}># {e.name}</li>
              </Link>
            ))}
          </ul>
        </TrendingBox>
      </ContainnerTimeline>
    </>
  );
};

export const ContainnerTimeline = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  overflow-x: scroll;
  background: #3a3939;
  justify-content: center;
`;

export const PostContainner = styled.div`
  display: flex;
  flex-direction: column;
  width: 620px;

  h1 {
    width: 611px;
    height: 64px;
    margin-top: 78px;
    margin-bottom: 42px;
    font-family: "Oswald";
    font-style: normal;
    font-weight: 700;
    font-size: 43px;
    line-height: 64px;

    color: #ffffff;
  }
`;
const PostWriter = styled.div`
  display: flex;
  width: 611px;
  min-height: 230px;
  margin-bottom: 28px;

  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;

  img {
    min-width: 50px;
    height: 50px;
    margin-top: 16px;
    margin-left: 18px;
    background: url(image);
    border-radius: 26.5px;
  }

  form {
    margin-left: 18px;
    position: relative;
    h2 {
      width: 445px;
      height: 40px;
      margin-top: 20px;
      font-family: "Lato";
      font-style: normal;
      font-weight: 300;
      font-size: 20px;
      line-height: 24px;

      color: #707070;
    }

    .link {
      width: 503px;
      height: 30px;
      margin-bottom: 5px;

      background: #efefef;
      border-radius: 5px;

      ::placeholder {
        font-family: "Lato";
        font-style: normal;
        font-weight: 300;
        font-size: 15px;
        line-height: 18px;

        color: #949494;
      }
    }

    .text {
      width: 502px;
      height: 66px;
      margin-bottom: 5px;

      background: #efefef;
      border-radius: 5px;

      ::placeholder {
        font-family: "Lato";
        font-style: normal;
        font-weight: 300;
        font-size: 15px;
        line-height: 18px;

        color: #949494;
      }
    }

    button {
      position: absolute;
      width: 112px;
      height: 31px;
      bottom: 16px;
      right: 22px;

      background: #1877f2;
      border-radius: 5px;

      font-family: "Lato";
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 17px;

      color: #ffffff;
    }
  }
`;

export const TrendingBox = styled.div`
  margin-top: 183px;
  width: 301px;
  height: 406px;
  background: #171717;
  border-radius: 16px;
  box-sizing: border-box;
  padding: 16px;
  position: relative;

  div {
    top: 61px;
    left: 0px;
    position: absolute;
    width: 301px;
    height: 1px;
    background-color: #484848;
  }
  h4 {
    font-family: "Oswald";
    font-style: normal;
    font-weight: 700;
    font-size: 27px;
    line-height: 40px;
    color: #ffffff;
  }
  ul {
    margin-top: 22px;
  }
  li {
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    line-height: 23px;
    letter-spacing: 0.05em;
    color: white;
  }
`;
