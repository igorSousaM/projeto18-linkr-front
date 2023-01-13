import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AuthContext } from "../../providers/Context";
import { postLike } from "../../servers/PostsServices";
import { ReactTagify } from "react-tagify";
import { useNavigate } from "react-router-dom";
import { deletePost } from "../../servers/PostsServices";
import { ThreeCircles } from "react-loader-spinner";
import Modal from "../../components/nav/Modal";

export const Post = ({ p,setRenderFlag,renderFlag }) => {
  const navigate = useNavigate();


export const Post = ({ p }) => {
  const navigate = useNavigate();

  const { userInformation, posts, setPosts } = React.useContext(AuthContext);
  //console.log(posts)

  let token = localStorage.getItem("tokenLikr");
  token = JSON.parse(token);

  const config = {
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const [loadingState, setLoadingState] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  function deleteIcon(id) {
    setLoadingState(true);
    deletePost(id, config)
      .then(() => {
        setLoadingState(false);
        setOpenModal(false);
        setRenderFlag(!renderFlag)
      })
      .catch((err) => {
        console.log(err);
        setOpenModal(false);
        setLoadingState(false);
        alert("Houve um erro ao deletar seu post");
      });
  }

  function updateIcon() {
    alert("atualizar apertado!");
  }

  async function likePost(postId) {
    let token = localStorage.getItem("tokenLikr");
    token = JSON.parse(token);
    const config = {
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const likeBody = { postId: postId };
    postLike(likeBody, config);
  }

  function navigateToHashtag(tag) {
    navigate(`/hashtags/${tag.substring(1)}`);
  }
  let postLink = p.link;
  postLink = JSON.parse(postLink);
  const { metadata } = postLink;
  console.log(postLink);
  if (p.userId === userInformation.id) {
    return (
      <ContainerPost>
        <User>
          <img src={userInformation.photo} alt="Foto de usuário" />
          <ion-icon
            onClick={() => likePost(p.id)}
            name="heart-outline"
          ></ion-icon>
          <p>{p.likeCount}</p>
        </User>
        <LinkDescription>
          <Description>
            <h2>{userInformation.name}</h2>
            <ReactTagify
              colors={"white"}
              tagClicked={(tag) => navigateToHashtag(tag)}
            >
              <h3>{p.text}</h3>
            </ReactTagify>

            <Icon>
              <ion-icon name="trash-outline"></ion-icon>
              <ion-icon name="brush-outline"></ion-icon>
            </Icon>
          </Description>
          <UrlLink>
            <div>
              <h3>{metadata.title}</h3>
              <p>{metadata.description}</p>
              <h4>{metadata.website}</h4>
            </div>

            <img src={metadata.banner} className="banner" />
          </UrlLink>
        </LinkDescription>
      </ContainerPost>
    );
  } else {
    return (
      <ContainerPost>
        <User>
          <img src={userInformation.photo} alt="Foto de usuário" />
          <ion-icon name="heart-outline"></ion-icon>
          <p></p>
        </User>
        <LinkDescription>
          <Description>
            <h2>{userInformation.name}</h2>
            <ReactTagify
              colors={"white"}
              tagClicked={(tag) => navigateToHashtag(tag)}
            >
              <h3>{p.text}</h3>
            </ReactTagify>
          </Description>
          <UrlLink></UrlLink>
        </LinkDescription>
      </ContainerPost>
  function navigateToHashtag(tag) {
    navigate(`/hashtags/${tag.substring(1)}`);
  }
  let postLink = p.link;
  postLink = JSON.parse(postLink);
  const { metadata } = postLink;
  console.log(postLink);
  
  if (p.userId === userInformation.id) {
    return (
        <>
      <ContainerPost>
        <User>
          <img src={userInformation.photo} alt="Foto de usuário" />
          <ion-icon
            onClick={() => likePost(p.id)}
            name="heart-outline"
          ></ion-icon>
          <p>{p.likeCount}</p>
        </User>
        {loadingState ? (
            <LoadingContainer>
              <ThreeCircles
                height="100"
                width="100"
                color="#4fa94d"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="three-circles-rotating"
                outerCircleColor=""
                innerCircleColor=""
                middleCircleColor=""
              />
            </LoadingContainer>
          ) : (
        <LinkDescription>
          <Description>
            <h2>{userInformation.name}</h2>
            <ReactTagify
              colors={"white"}
              tagClicked={(tag) => navigateToHashtag(tag)}
            >
              <h3>{p.text}</h3>
            </ReactTagify>

            <Icon>
              <ion-icon 
                name="trash-outline"  
                onClick={() => setOpenModal(true)}
              ></ion-icon>
              <ion-icon 
              name="brush-outline" 
              onClick={() => updateIcon()}    
              ></ion-icon>
            </Icon>
          </Description>
          <UrlLink>
            <div>
              <h3>{metadata.title}</h3>
              <p>{metadata.description}</p>
              <h4>{metadata.website}</h4>
            </div>

            <img src={metadata.banner} className="banner" />
          </UrlLink>
        </LinkDescription>
        )}
      </ContainerPost>
      {openModal && (
          <Modal
            setOpenModal={setOpenModal}
            deleteIcon={deleteIcon}
            id={p.id}
          />
        )}
      </>
    );
  } else {
    return (
      <ContainerPost>
        <User>
          <img src={userInformation.photo} alt="Foto de usuário" />
          <ion-icon name="heart-outline"></ion-icon>
          <p></p>
        </User>
        <LinkDescription>
          <Description>
            <h2>{userInformation.name}</h2>
            <ReactTagify
              colors={"white"}
              tagClicked={(tag) => navigateToHashtag(tag)}
            >
              <h3>{p.text}</h3>
            </ReactTagify>
          </Description>
          <UrlLink></UrlLink>
        </LinkDescription>
      </ContainerPost>
    );
  }
};

const ContainerPost = styled.div`
  box-sizing: border-box;
  width: 611px;
  min-height: 246px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #171717;
  border-radius: 16px;
  margin-bottom: 16px;
  padding: 20px;

`;

const User = styled.div`
  width: 88px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
 
  img {
    width: 50px;
    height: 50px;
    margin: 5px;
    background: url(image);
    border-radius: 26.5px;
  }
  ion-icon {
    width: 25px;
    height: 25px;
    color: white;
    margin: 5px;
    :hover {
      cursor: pointer;
    }
  }

  p {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    text-align: center;
    color: #ffffff;
  }
`;

const LinkDescription = styled.div`
  box-sizing: border-box;
  width: 503px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;

const Description = styled.div`

  width: 503px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  padding: 10px;
  h2 {
    width: 200px;
    height: 40px;
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    color: #ffffff;
    margin: 10px 0 0 0;
    line-height: 0;
  }
  h3 {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    color: #b7b7b7;
  }
`;

const Icon = styled.div`
  width: 80px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 20px;
  top: 0;
  ion-icon {
    width: 20px;
    height: 20px;
    color: white;
    margin: 5px;
  }
`;

const UrlLink = styled.div`
  box-sizing: border-box;

  width: 503px;
  min-height: 155px;
  display: flex;

  border: 1px solid #4d4d4d;
  border-radius: 11px;
  padding: 10px;
  div {
  
    display: flex;
    flex-direction: column;
    gap: 13px;
  }
  h3 {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
  }
  p {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    color: #9b9595;
  }
  h4 {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    color: #cecece;
  }

  color: #cecece;
  img {
    min-width: 130.44px;
    min-height: 100px;
    background: url(image.png);
    border-radius: 0px 12px 13px 0px;
    padding: 5px;
  }
`;

const LoadingContainer = styled.div`
  width: 503px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
