import React, { useEffect, useState } from 'react';
import PermissionDenied from './Components/PermissionDenied';
import {Loading} from "./Loading";

const AuthMiddleware = (WrappedComponent) => {
  const AuthComponent = (props) => {
    const [authenticated, setAuthenticated] = useState(2);

    useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
        setAuthenticated(1);
      } else {
        setAuthenticated(1);
      }
    }, []);

    if (authenticated==1) {
      return <WrappedComponent {...props} />;
    } else if(authenticated==0) {
      return <PermissionDenied />;
    }
    else
         return <Loading />
  };

  return AuthComponent;
};

export default AuthMiddleware;
