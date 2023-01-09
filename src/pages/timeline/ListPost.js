import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getPosts } from "../../servers/PostsServices";
import { Post } from "./Post";
import { AuthContext } from "../../providers/Context";


export const ListPost = ( createPost ) => {
    
    const { userInformation } = React.useContext(AuthContext);
    const [posts, setPosts] = useState();
    
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
        getPosts(config)
         .then((response) => {
            setPosts(response.data);
          })
         .catch((err) => {
            console.log(err);
            alert("An error occured while trying to fetch the posts, please refresh the page");
          });
    }, [createPost]);

    if(posts === undefined){
        return <ContainerCarregamento><img src="https://miro.medium.com/max/1400/1*e_Loq49BI4WmN7o9ItTADg.gif"/></ContainerCarregamento>
    };

    if(posts.length < 1){
        return <>There are no posts yet</>
    }

    return (
        <List>
            {posts.map((p, index) =>
                <Post
                p={p}
                key={index}
                />
            )}
        </List>
            
    )
}

const List = styled.div`
`

const ContainerCarregamento = styled.div`
    width: 100%;
    height: 667px;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 200px;
    }
`