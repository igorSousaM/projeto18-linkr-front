import { useParams } from "react-router-dom";
import { Post } from "../timeline/Post";
import { AuthContext } from "../../providers/Context";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getPostsByHashtag } from "../../servers/PostsServices"
import { NavBar } from "../../components/nav/NavBar";
import { ContainnerTimeline, PostContainner } from "../timeline/Timeline";
import { TrendingBox } from "../timeline/Timeline";
import { Link } from "react-router-dom";
import { getHashtags } from "../../servers/PostsServices";

export function HashtagPage() {
    const { hashtag } = useParams();

    const { userInformation } = React.useContext(AuthContext);
    const [posts, setPosts] = useState();
    const [tags, setTags] = useState([]);

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
        getPostsByHashtag(hashtag, config)
            .then((response) => {
                setPosts(response.data);
            })
            .catch((err) => {
                console.log(err);
                alert("An error occured while trying to fetch the posts, please refresh the page");
            });

            getHashtags(config).then((r)=>{setTags(r.data);console.log(r)}).catch(erro=>console.log(erro))

    }, [hashtag]);

    if (posts === undefined) {
        return <ContainerCarregamento><img src="https://miro.medium.com/max/1400/1*e_Loq49BI4WmN7o9ItTADg.gif" /></ContainerCarregamento>
    };

    return (
        <>
            <NavBar />
            <ContainnerTimeline>

                <PostContainner>
                    <h1> {hashtag}</h1>
                    {posts.map((p, index) =>
                        <Post
                            p={p}
                            key={index}
                        />
                    )}
                </PostContainner>
                <TrendingBox>
                    <h4>trending</h4>
                    <div></div>
                    <ul>
                        {tags.map((e, index) => (<Link to={`/hashtags/${e.name}`}><li key={index}># {e.name}</li></Link>))}
                    </ul>
                </TrendingBox>
            </ContainnerTimeline>


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