import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from './AppRoutes';
import Auth0ProviderWithNavigate from './auth/Auth0ProviderWithNavigate';
import {QueryClient, QueryClientProvider} from "react-query";
import { Toaster } from 'sonner';

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      refetchOnWindowFocus: false,
    },
  },

});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
        <QueryClientProvider client={queryClient}>
            <Auth0ProviderWithNavigate>
                <AppRoutes/>
                <Toaster visibleToasts={1} position="top-right" richColors/>
            </Auth0ProviderWithNavigate>
        </QueryClientProvider>
    </Router>
  </React.StrictMode>,
)

/*
OUR AUTH PROVIDER IS GOING TO NEED THE ACCESS TO THE ROUTER AND IN ORDER TO DO THE REDIRECTS TO DIFFERENT PAGES IN OUR APP SO
Auth0ProviderWithNavigate immediately inside <Router> in the main.tsx
inside AppRoutes we have defined our pages and then each page is going to have a bunch of components and they might in tern have more compoennts
SO COMPONENT TREE IS WITHIN THE AUTH PROVIDER that means all the components will get access to any auth0 stuffs it might need 
AppRoutes represents the component tree
*/
