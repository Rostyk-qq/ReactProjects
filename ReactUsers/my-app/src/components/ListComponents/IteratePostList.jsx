import React from 'react';
import RenderListPost from "./RenderListPost";
import {Link, Outlet} from "react-router-dom";
const IteratePostList = ({post, mainTitle, deletePost, error}) => {
    if (post.length === 0 || error){
        return <h1 style={{textAlign:'center'}}>List is empty or No Response</h1>
    }
    return (
        <div>
            <h1 style={{textAlign:'center', fontFamily:'cursive'}}>{mainTitle}</h1>
            {
                post.map((post, idx) => (
                    <div key={idx} >
                        <RenderListPost currentPost={deletePost} posts={post} />
                    </div>
                ))
            }
        </div>
    );
};

export default IteratePostList;