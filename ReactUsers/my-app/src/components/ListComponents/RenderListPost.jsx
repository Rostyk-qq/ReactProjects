import React, {useContext} from 'react';
import Button from "../UI-UX/Button/Button";
import {useNavigate} from 'react-router-dom'
import {AuthContext} from "../../context/context";
const RenderListPost = (props) => {
    let navigate = useNavigate()
    const { isAuth, setIsAuth, canRender, setRender} = useContext(AuthContext)
    const InfoPageNonLoad = () => {
        navigate(`/posts/${props.posts.id}`)
    }
    return (
            <div className="post__container">
                <div className="post__content">
                    <div className="left__side">
                        <span>{props.posts.id}. {props.posts.title}</span><br/><br/>
                        Description: <br/>
                        <span>{props.posts.body}</span>
                    </div>
                    <div className="right__side">
                        <Button onClick={InfoPageNonLoad}>Info</Button>
                        <Button onClick={() => props.currentPost(props.posts)} >Delete</Button>
                    </div>
                </div>
            </div>
    );
};

export default RenderListPost;