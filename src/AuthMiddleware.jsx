import React, { useEffect, useState } from 'react';
import PermissionDenied from './Components/PermissionDenied';

const AuthMiddleware = (WrappedComponent) => {
  const AuthComponent = (props) => {
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
      // Check if user is authenticated (e.g., by checking token in localStorage)
      const token = localStorage.getItem('token');
      if (token) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }
    }, []);

    if (authenticated) {
      return <WrappedComponent {...props} />;
    } else {
      // Redirect to login or show a message
      return <PermissionDenied />;
    }
  };

  return AuthComponent;
};

export default AuthMiddleware;