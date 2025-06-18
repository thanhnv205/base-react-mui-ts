import { Outlet } from "react-router"

const AuthLayout = () => {
  return (
    <>
      <header>Header</header>
      <Outlet />
    </>
  )
}

export default AuthLayout
// Compare this snippet from base-react-mui-ts/src/layouts/AuthLayout/index.tsx: