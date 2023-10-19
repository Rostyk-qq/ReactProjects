import React, {useEffect, useState} from "react";
import {BrowserRouter} from "react-router-dom";
import Navbar from "./pages/Navbar";
import AppRouter from "./pages/AppRouter";
import {AuthContext} from "./context/context";
function App() {
    const [isAuth, setIsAuth] = useState(false)
    const [canRender, setRender] = useState(true)
    useEffect(() => {
        if (localStorage.getItem('setAuth')){
            setIsAuth(true)
        }
        if(localStorage.getItem('setAuth1')){
            setIsAuth(false)
        }
        setRender(false)
    },[])
    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            canRender,
            setRender
        }} >
            <BrowserRouter>
                <Navbar/>
                <AppRouter />
            </BrowserRouter>
        </AuthContext.Provider>
    )
}
export default App

