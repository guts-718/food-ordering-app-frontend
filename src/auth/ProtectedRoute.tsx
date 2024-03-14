//this is bcuz we can go to /user-profile without actually being logged in

import { useAuth0 } from "@auth0/auth0-react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  if(isLoading){
    return null;
  }

  if(isAuthenticated){
    return <Outlet/>;
  }
  return <Navigate to="/" replace/>

  //return isAuthenticated?(<Outlet/>):(<Navigate to="/" replace/>);
  // above line ko use karne se problem ho rha tha jab bhi refresh kr rhe the to wo redirect kr de rha tha to "/"
}

export default ProtectedRoute;