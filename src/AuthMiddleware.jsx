import React, { useEffect, useState } from 'react';
import PermissionDenied from './Components/PermissionDenied';

const AuthMiddleware = (WrappedComponent) => {
  const AuthComponent = (props) => {
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
        setAuthenticated(true);
      } else {
        setAuthenticated(true);
      }
    }, []);

    if (authenticated) {
      return <WrappedComponent {...props} />;
    } else {
      return <PermissionDenied />;
    }
  };

  return AuthComponent;
};

export default AuthMiddleware;
