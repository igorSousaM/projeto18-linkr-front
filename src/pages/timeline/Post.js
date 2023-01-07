import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AuthContext } from "../../providers/Context";

export const Post = ( { p } ) => {

    const { userInformation } = React.useContext(AuthContext);

    console.log("Post", userInformation, p);

    if(p.userId === userInformation.id){
        return(
            <ContainerPost>
                <User>
                    <img src={userInformation.photo} alt="Foto de usuário"/>
                    <ion-icon name="heart-outline"></ion-icon>
                    <p>13 likes</p>
                </User>
                <LinkDescription>
                    <Description>
                        <h2>{userInformation.name}</h2>
                        <h3>{p.text}</h3>
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
                        <h3>{p.text}</h3>
                    </Description>
                    <UrlLink></UrlLink>
                </LinkDescription>
            </ContainerPost>
        )
    }
}

const ContainerPost = styled.div`
width: 611px;
height: 276px;
display: flex;
align-items: center;
justify-content: space-around;
background: #171717;
border-radius: 16px;
`

const User = styled.div`
width: 88px;
height: 250px;
display: flex;
flex-direction: column;
align-items: center;
img{
    min-width: 50px;
    height: 50px;
    margin: 5px;
    background: url(image);
    border-radius: 26.5px;
}
ion-icon{
    width: 25px;
    height: 25px;
    color: white;
    margin:5px;
}
p{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    text-align: center;
    color: #FFFFFF;
}
`

const LinkDescription = styled.div`
width: 503px;
height: 250px;
`

const Description = styled.div`
width: 503px;
height: 80px;
display: flex;
flex-direction: column;
justify-content: flex-start;
position: relative;
padding: 10px;
h2{
    width: 200px;
    height: 40px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    color: #FFFFFF;
    margin:10px 0 0 0;
    line-height: 0;
}
h3{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    color: #B7B7B7;
}
`

const Icon = styled.div`
width: 80px;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
position: absolute;
right: 20px;
top: 0;
ion-icon{
    width: 25px;
    height: 25px;
    color: white;
    margin:5px;
}
`

const UrlLink = styled.div`
width: 503px;
height: 155px;
background-color: red;
border: 1px solid #4D4D4D;
border-radius: 11px;
`
