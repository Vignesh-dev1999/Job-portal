import { createBrowserRouter, RouterProvider } from "react-router-dom"
import  Login  from "./pages/Login"
import  Register  from "./pages/Register"
import  Home  from "./pages/Home"
import  Carrer  from "./components/Carrer"
import  Viewjob  from "./components/ViewJobs"
import  Apply  from "./components/Apply"

export const Router =()=>{

    const router = createBrowserRouter([
        {
            path:"/login",
            element:<Login/>
        },
        {
            path:"/register",
            element:<Register />
        },
        {
            path:"/",
            element:<Home/>,
            children:[
                {
                    path:"/",
                    element:<Carrer />
                },{
                    path:"/:id",
                    element:<Viewjob />
                }
                ,{
                    path:"/:name/:id",
                    element:<Apply />
                }

            ]
        }
    ])

    return(
        <RouterProvider router={router}/>
    )

}