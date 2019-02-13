import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class AuthButton extends React.Component {
    render() {
        const { history } = this.props;
        return (
            <div>
                {
                    this.props.fakeAuth.isAuthenticated ? (
                        <p>
                            Welcome!{" "}
                            <button
                                onClick={() => {
                                    this.props.fakeAuth.signout(() => history.push("/"));
                                }}
                            >
                                Sign out
                      </button>
                        </p>
                    ) : (
                            <p>You are not logged in.</p>
                        )
                }
            </div>
        )
    }
}

export class SideMenuScreen extends Component {
    render() {
        return (
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/topics">Topics</Link>
                </li>
                <li>
                    <AuthButton {... this.props} />
                </li>
            </ul>
        )
    }
}

export default SideMenuScreen
