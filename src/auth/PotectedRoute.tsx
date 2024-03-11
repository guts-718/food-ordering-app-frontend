//this is bcuz we can go to /user-profile without actually being logged in

import { useAuth0 } from "@auth0/auth0-react";
import { Navigate, Outlet } from "react-router-dom";

const PotectedRoute = () => {
  const { isAuthenticated } = useAuth0();
  return isAuthenticated?(<Outlet/>):(<Navigate to="/" replace/>);
}

export default PotectedRoute;