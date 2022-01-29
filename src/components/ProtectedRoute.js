import React from 'react';
import { Route , Redirect } from 'react-router-dom';

// Protect Routes - only auth.

const ProtectedRoute =  ({isAuth: isAuth, component: Component, ...rest }) =>{
return(
  
    <Route {...rest} render={ (props) => {

        if(isAuth) return <Component {...props} />;
        if(!isAuth) return <Redirect to={{path:"/" ,state:{from: props.location} }} />;


    }} />
    
);

};
export default ProtectedRoute