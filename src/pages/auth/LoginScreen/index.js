import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export class LoginScreen extends Component {
    state = {
        redirectToReferrer: false
    }

    _realizarLogin = () => {
        const { fakeAuth } = this.props;
        fakeAuth.authenticate(() => {
            this.setState({ redirectToReferrer: true });
        }, 'token --1');
    }

    render() {
        const { redirectToReferrer } = this.state;

        if (redirectToReferrer) {
            return <Redirect to={{ pathname: '/' }} />;
        }

        return (
            <div>
                <label>
                    Email:
                <input type="text" name="name" />
                </label>
                <br />
                <label>
                    Senha:
                    <input type="text" name="name" />
                </label>
                <br />
                <button onClick={this._realizarLogin}>
                    Logar
                </button>
            </div>
        )
    }
}

export default LoginScreen
