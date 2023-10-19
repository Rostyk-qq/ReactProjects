import React from 'react';
import {Link} from "react-router-dom";
import Button from "../components/UI-UX/Button/Button";
import {useContext} from "react";
import {AuthContext} from "../context/context";
import {useNavigate} from "react-router-dom";
const Navbar = () => {
   const { isAuth, setIsAuth, canRender, setRender} = useContext(AuthContext)
   const navigate = useNavigate()
    const PagePosts = () => {
        navigate('/posts')
    }
    const PageInfo = () => {
        navigate('/about')
    }
    const ExitFromPosts = () => {
        setIsAuth(false)
        localStorage.setItem('setAuth1', 'false')
        localStorage.removeItem('setAuth')
    }
    return (
       <div className='navbar'>
           &ensp;<Button onClick={ExitFromPosts} >Exit</Button>
            <div className="navbar__content">
                <Button onClick={PagePosts}>All Posts</Button>&ensp;
                <Button onClick={PageInfo}>About</Button>
            </div>
       </div>
    );
};

export default Navbar;