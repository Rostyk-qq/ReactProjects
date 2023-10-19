import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getPostById} from "../Api/getPosts";
import useFetching from "../components/ownHooks/useFetching";
const InfoPage = () => {
    const [curPost, setCurPost] = useState({})
    const params = useParams()
    const [GetPostWithCurId, param] = useFetching(async (id) => {
      const currentPost = await getPostById(params.id)
        console.log(currentPost.data)
        setCurPost(currentPost.data)
    })
    useEffect(() => {
        GetPostWithCurId(params.id)
    },[params.id])

    if (param.error !== ''){
        return (
            <h1 style={{textAlign:'center'}}>Parsing Error</h1>
        )
    }
    return (
        <div style={{fontFamily:'cursive'}}>
            {param.loading ? <h1>Loading...</h1> :
            <div style={{padding: '0 0 0 20px'}}>
                <h1 style={{marginBottom:'0',padding:'initial'}}>Description about post {params.id}</h1>
                <span ><h3 style={{marginBottom:'0'}}>Post title: </h3> <br/> {curPost.title}</span>
                <span ><h3 style={{marginBottom:'0'}}>Post description: </h3> <br/> {curPost.body}</span>
            </div>}
        </div>
    );
};

export default InfoPage;