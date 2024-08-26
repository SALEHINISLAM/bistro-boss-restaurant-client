import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut.jsx/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Pages/Secret/Secret";
import Dashboard from "../LayOut.jsx/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/order/:category",
        element: <Order />,
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/register',
        element:<Register/>
      },
      {
        path:'/secret',
        element:<PrivateRoute><Secret/></PrivateRoute>,
      }
    ],
  },
  {
    path:'/dashboard',
    element: <Dashboard/>,
    children:[
      {
        path:'cart',
        element:<Cart/>,
      },
      //admin
      {
        path:'users',
        element:<AllUsers/>
      }
    ]
  }
]);

export default router;
