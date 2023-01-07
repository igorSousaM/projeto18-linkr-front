import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getPosts } from "../../servers/PostsServices";
import { Post } from "./Post";


export const ListPost = ( config, photo, createPost ) => {

    const [posts, setPosts] = useState();

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

    console.log(posts);

    return (
        <>
            {posts.map((p, index) =>
                <Post
                p={p}
                key={index}
                config={config}
                />
            )}
        </>
    )
}

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