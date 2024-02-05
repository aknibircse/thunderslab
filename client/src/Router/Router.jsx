import { createBrowserRouter } from "react-router-dom";
import Layout from "../MainLayout/Layout";
import Home from "../Home/Home";
import PageOne from "../Pages/PageOne/PageOne";
import PageTwo from "../Pages/PageTwo/PageTwo";
import PageThree from "../Pages/PageThree/PageThree";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/pageOne",
            element: <PageOne></PageOne>
        },
        {
            path: "/pageTwo",
            element: <PageTwo></PageTwo>
        },
        {
            path: "/pageThree",
            element: <PageThree></PageThree>
        },
    ]
  },
]);

export default router;
