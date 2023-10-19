import React, {useContext} from 'react';
import Input from "../../components/UI-UX/Input/Input";
import Button from "../../components/UI-UX/Button/Button";
import {AuthContext} from "../../context/context";
const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const login = (e) => {
        e.preventDefault()
        setIsAuth(true)
        localStorage.setItem('setAuth', 'true')
        localStorage.removeItem('setAuth1')
    }
    return (
        <div style={{display:'flex', alignItems:'center', justifyContent:'center', marginTop:'200px'}}>
            <form style={{fontFamily:'cursive'}} onSubmit={login} >
                <h2 style={{textAlign:'center'}} >Login</h2>
                <Input type='search' placeholder='Username' /><br/>
                <Input type='password' placeholder='Password' /><br/>
                <Button>Login</Button>
            </form>
        </div>
    );
};

export default Login;