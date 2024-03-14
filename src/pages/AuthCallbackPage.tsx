import { useCreateMyUser } from "@/api/MyUserApi";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const AuthCallbackPage = () => {
  const navigate=useNavigate();
  //this will give the access to the current logged in user and once we have the user we can make the call to create a user
  const {user}=useAuth0();
  const {createUser}=useCreateMyUser();
  
  //below line is there to make sure that useEffect to run only once
  // useRef stores a state value but whenever the state changes it does not trigger the component to re-render
  // whereas in useState() if update a state value in react using the useState hook .. it causes everything to re-render including the useEffect hooks and 
  const hasCreatedUser=useRef(false);
  useEffect(() => {
    if(user?.sub && user?.email && !hasCreatedUser.current){
        createUser({auth0Id:user.sub, email:user.email})
        hasCreatedUser.current=true;
      }

      navigate("/");
    
  }, [createUser, navigate, user])
  return <>Loading...</>
}

export default AuthCallbackPage;