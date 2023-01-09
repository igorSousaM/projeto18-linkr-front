import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AuthContext } from "../../providers/Context";
import { postLike } from "../../servers/PostsServices";
import { ReactTagify } from "react-tagify";
import { useNavigate } from "react-router-dom";
import { deletePost } from "../../servers/PostsServices";
import { ThreeDots } from "react-loader-spinner";

export const Post = ({ p }) => {
    const navigate = useNavigate();
    
  const { userInformation } = React.useContext(AuthContext);
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

  function deleteIcon(id) {
    if (window.confirm("Aperte Ok para confirmar a exclusão do post")) {
      setLoadingState(true);
      deletePost(id, config)
        .then(() => {
          alert("deletado!");
          setLoadingState(false);
        })
        .catch((err) => {
          console.log(err);
          alert("Houve um erro ao deletar seu post");
          setLoadingState(false);
        });
    }
  }

  function updateIcon() {
    alert("atualizar apertado!");
  }



    async function likePost(postId){
        let token = localStorage.getItem("tokenLikr");
        token = JSON.parse(token);
        const config = {
            headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            },
        };

        const likeBody = { postId: postId}
        postLike(likeBody, config);

    }
    function navigateToHashtag(tag){
       navigate(`/hashtags/${tag.substring(1)}`)
    }

    if(p.userId === userInformation.id){
        return(
            <ContainerPost>
                <User>
                    <img src={userInformation.photo} alt="Foto de usuário"/>
                    <ion-icon onClick={()=>likePost(p.id)} name="heart-outline"></ion-icon>
                    <p>{p.likeCount}</p>
                </User>
                <LinkDescription>
                    <Description>
                        <h2>{userInformation.name}</h2>
                        <ReactTagify colors={"white"} tagClicked={(tag)=> navigateToHashtag(tag)}  >
                            
                            <h3>{p.text}</h3>
                        </ReactTagify>
                        

                        <Icon>
                            <ion-icon name="trash-outline"></ion-icon>
                            <ion-icon name="brush-outline"></ion-icon>
                        </Icon> 
                    </Description>
                    <UrlLink></UrlLink>
                </LinkDescription>
            </ContainerPost>
        )
    }else{
        return (
            <ContainerPost>
                <User>
                    <img />
                    <ion-icon name="heart-outline"></ion-icon>
                    <p></p>
                </User>
                <LinkDescription>
                    <Description>
                        <h2>{userInformation.name}</h2>
                        <ReactTagify colors={"white"} tagClicked={(tag)=> navigateToHashtag(tag)}><h3>{p.text}</h3></ReactTagify>
                        
                    </Description>
                    <UrlLink></UrlLink>
                </LinkDescription>
            </ContainerPost>
        )
    }
}

const ContainerPost = styled.div`
box-sizing:border-box;
  width: 611px;
  min-height: 276px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #171717;
  border-radius: 16px;
margin-bottom:16px;
`;

const User = styled.div`
  width: 88px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    min-width: 50px;
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
      :hover{
        cursor: pointer  
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
box-sizing:border-box;
  width: 503px;
  height: 250px;
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
    width: 25px;
    height: 25px;
    color: white;
    margin: 5px;
  }
`;

const UrlLink = styled.div`
  box-sizing:border-box;  
width: 503px;
  height: 155px;
  background-color: red;
  border: 1px solid #4d4d4d;
  border-radius: 11px;
`;

const LoadingIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
`;
