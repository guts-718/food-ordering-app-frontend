import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";


type Props = {
  children: React.ReactNode;
};


//this provider will wrap all the components in our app so that those components can get access to the auth0 stuff if it needs it
const Auth0ProviderWithNavigate = ({ children }: Props) => {
  const navigate=useNavigate();
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;
  const audience = import.meta.env.VITE_AUTH0_AUDIENCE;

  if (!domain || !clientId || !redirectUri || !audience) {
    throw new Error("unable to initialize auth");
  }

  // a function which is called when the user gets redirected to our app -- can use (appState?:AppState, user?:User) 
  const onRedirectCallback = () => {
      navigate("/auth-callback");
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
        audience,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithNavigate;
