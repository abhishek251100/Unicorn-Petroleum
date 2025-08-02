import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from '../Common/Layout'
import HomePage from '../Pages/HomePage'
import AboutPage from '../Pages/AboutPage'



const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },

             {
                path: "/about",
                element: <AboutPage/>
            },
          ]
    }
])

function Routing() {
    return <RouterProvider router={router} />
}

export default Routing