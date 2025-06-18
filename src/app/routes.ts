import { createBrowserRouter } from "react-router"
import HomePage from "./home-page"
import RootLayout from "../layouts/RootLayout"
import AuthLayout from "../layouts/AuthLayout"
import LoginPage from "./auth-page"


const authRouter = [
  {
    path: "auth",
    Component: AuthLayout,
    children: [
      { path: "login", Component: LoginPage },
    ],
  },
]


const rootRouter = [
  { index: true, Component: HomePage },
]

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      ...authRouter,
      ...rootRouter,
      // {
      //   path: "concerts",
      //   children: [
      //     { index: true, Component: ConcertsHome },
      //     { path: ":city", Component: ConcertsCity },
      //     { path: "trending", Component: ConcertsTrending },
      //   ],
      // },
    ],
  }
])

export default router