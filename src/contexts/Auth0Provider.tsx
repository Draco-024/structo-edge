
import { Auth0Provider } from "@auth0/auth0-react";
import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

interface Auth0ProviderWithNavigateProps {
  children: ReactNode;
}

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9dJ5qp-8UygAGg242yjjBiLwELyasXK4",
  authDomain: "structo-8e0df.firebaseapp.com",
  projectId: "structo-8e0df",
  storageBucket: "structo-8e0df.firebasestorage.app",
  messagingSenderId: "408026091387",
  appId: "1:408026091387:android:3584dcd6b1189c6db237de"
};

export const Auth0ProviderWithNavigate = ({ children }: Auth0ProviderWithNavigateProps) => {
  const navigate = useNavigate();
  const domain = "dev-i5yz2ihqnbif2i7m.us.auth0.com";
  const clientId = "gjgjc6jWckxSSPKUN6zfnGwXAR9Qhwst";

  useEffect(() => {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    console.log("Firebase initialized");
  }, []);

  const onRedirectCallback = (appState: any) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};
