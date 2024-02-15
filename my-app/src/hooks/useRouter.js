import {createBrowserRouter} from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import Home from "../Home";

let routes=createBrowserRouter([{
    path:"/login",
    element:<Login/>
},
{
    path:"/register",
    element:<Register/>
},
{
    path:"/",
    element:<Home/>
}



])
export default routes