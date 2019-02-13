import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Redirect,
} from "react-router-dom";

const PrivateRoute = ({ component: Component, fakeAuth, ...rest}) => (
    <Route
        {...rest}
        render={props =>
            fakeAuth.isAuthenticated ? (
                <Component {...props} fakeAuth={fakeAuth} />
            ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: props.location }
                        }}
                    />
                )
        }
    />
);

export default PrivateRoute;