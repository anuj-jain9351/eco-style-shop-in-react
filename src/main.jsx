import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter ,useNavigate } from 'react-router-dom'
import { Auth0Provider } from "@auth0/auth0-react";
  import { Bounce, ToastContainer} from 'react-toastify';

const AuthProviderWithRedirect = ({ children }) => {
  const navigate = useNavigate();

  const onRedirectCallback = (appState) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain="dev-x846k1fr4nf4f0cb.us.auth0.com"
      clientId="XgT3ieKh9ADEF312NiOuz7tfJRwKwaXQ"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProviderWithRedirect>
  <App/>
  <ToastContainer
  
position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
transition={Bounce}
/>
  
  </AuthProviderWithRedirect>
  </BrowserRouter>
)
