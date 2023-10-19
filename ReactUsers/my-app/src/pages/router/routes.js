import About from "../About";
import Posts from "../Posts";
import InfoPage from "../InfoPage";
import Login from "../login/Login";

export const routesPrivate = [
    {path:'/about', element: <About />, exact: true},
    {path:'/posts', element: <Posts />, exact: true},
    {path:'/posts/:id', element: <InfoPage />, exact: true},
]
export const routesPublic = [
    {path: '/login', element: <Login/>, exact: true}
]
