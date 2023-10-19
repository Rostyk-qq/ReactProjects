import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {routesPrivate, routesPublic} from "./router/routes";
import {AuthContext} from "../context/context";
const AppRouter = () => {
    const {isAuth, setIsAuth,  canRender, setRender} = useContext(AuthContext)
    console.log(canRender)
    if (canRender){
        return <h2>Loading...</h2>
    }
    return (
        <div>
            {isAuth ?
                <Routes>
                    {
                        routesPrivate.map(page =>
                                <Route key={page.path} path={page.path}  element={page.element} exact={page.exact} />
                        )
                    }
                    <Route path="*" element={<Navigate to="/posts" replace />} />
                </Routes>
                :
                <Routes>
                    {
                        routesPublic.map(page =>
                                <Route key={page.path} path={page.path}  element={page.element} exact={page.exact} />
                        )
                    }
                    <Route path="*" element={<Navigate to="/login" replace />} />
                </Routes>
            }
        </div>
    );
};

export default AppRouter;