import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getSignup } from "../../servers/UserServices";
import { Pencil } from "react-icons";

export const Post = (p, config) => {

    const [usuario, setUsuario] = useState();

    useEffect(() => {
        getSignup(config)
         .then((response) => {
            setUsuario(response.data);
          })
         .catch((err) => {
            console.log(err);
          });
    }, []);

    if(p.userId === usuario.id){
        return(
            <ContainerPost>
                <User>
                    <img/>
                    <ion-icon></ion-icon>
                    <p></p>
                </User>
                <LinkDescription>
                    <Description></Description>
                    <UrlLink></UrlLink>
                </LinkDescription>
            </ContainerPost>
        )
    }else{
        return (
            <ContainerPost>
                <User>
                    <img/>
                    <ion-icon></ion-icon>
                    <p></p>
                </User>
                <LinkDescription>
                    <Description>
                        <h1>{usuario.name}</h1>
                        <h2>{p.text}</h2>
                    </Description>
                    <UrlLink></UrlLink>
                </LinkDescription>
            </ContainerPost>
        )
    }
}

const ContainerPost = styled.div`
`

const User = styled.div`
`

const LinkDescription = styled.div`
`

const Description = styled.div`
`

const UrlLink = styled.div`
`
