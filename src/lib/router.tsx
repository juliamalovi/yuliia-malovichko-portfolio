import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/RootLayout";
import HomePage from "../pages/HomePage";
import AboutMe from "../pages/AboutMe";
import ErrorPage from "../pages/ErrorPage";
import Resume from "@/pages/Resume";
import Contact from "@/pages/Contact";

export const enum AppRoutes {
    HOME = '/',
    ABOUT = '/about',
    RESUME = '/resume',
    CONTACT = '/contact'
}

const router = createBrowserRouter([
    {
        path: AppRoutes.HOME,
        element: <RootLayout />,
        id: 'root',
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: AppRoutes.RESUME,
                element: <Resume />
            },
            {
                path: AppRoutes.ABOUT,
                element: <AboutMe />
            },
            {
                path: AppRoutes.CONTACT,
                element: <Contact />
            },
        ]
    }
])

export default router;