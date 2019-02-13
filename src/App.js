import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Redirect
} from "react-router-dom";

import PrivateRoute from './components/PrivateRouter'

import Login from './pages/auth/LoginScreen'
import Public from './pages/home/HomeScreen'
import Private from './pages/main/HomeScreen'

export default class App extends React.Component {
    state = {
        redirectToReferrer: false
    }

    fakeAuth = {
        isAuthenticated: false,
        token: '',
        authenticate(cb, token) {
            this.isAuthenticated = true;
            this.token = token;
            setTimeout(cb, 100);
        },
        signout(cb) {
            this.isAuthenticated = false;
            this.token = '';
            setTimeout(cb, 100);
        }
    };

    render() {
        const { from } = { pathname: "/" };
        const { redirectToReferrer } = this.state;

        if (redirectToReferrer) {
            return <Redirect to={from} />;
        }

        return (
            <Router>
                <div>
                    <Route path="/" render={props => {
                        return (<div>
                            {
                                this.fakeAuth.isAuthenticated ?
                                <Private {...props} fakeAuth={this.fakeAuth} />
                            :
                                <Public {...props} />
                            }
                        </div>)
                    }} />
                    <Route path="/login" render={props => <Login {...props} fakeAuth={this.fakeAuth} />} />
                    <PrivateRoute path="/admin" component={Private} fakeAuth={this.fakeAuth} />
                </div>
            </Router>
        );
    }
}