import React, {useState} from 'react';
import {connect} from 'react-redux';

import Header from "../layout/Header";
import Footer from "../layout/Footer";
import {LoginAuthAction, RegisterAuthAction} from "../../redux/actions/AuthAction";
import {useHistory} from "react-router-dom";

const Login = (props) => {

    const {login} = props;
    const [errorHandler, setErrorHandler] = useState({hasError: false, message: ""});

    const [loginState, setLoginState] = useState({});
    const history = useHistory();

    return (
        <div>
            <Header errorHandler={errorHandler} />
            <div className="sign-in-main">
                <div className="container d-flex">
                    <div className="sign-in-container py-5 m-auto border">
                        <div className="sign-in-header">
                            <h4 className="font-weight-bold">Login</h4>
                            <p className="sign-in-intro">
                                <span className="text-muted">New to Food Delivery App ? </span>
                                <span className="text-danger font-weight-bold">Sign Up</span>
                            </p>
                            <div className="login-social-media py-3">
                                <button className="btn btn-primary btn-block btn-sm">
                                    Continue with Google
                                </button>
                            </div>
                        </div>
                        <form
                            onSubmit={(event) => {
                                event.preventDefault();
                                login(loginState, history, setErrorHandler);
                            }}
                        >
                            <div className="form-group">
                                <label htmlFor="InputEmail">Email address</label>
                                <input
                                    type="email"
                                    className="form-control form-control-sm"
                                    onChange={(event) => {
                                        const email = event.target.value;
                                        setLoginState({ ...loginState, ...{ email } });
                                    }}
                                />
                                <small id="emailHelp" className="form-text text-muted">
                                    We'll never share your email with anyone else.
                                </small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="InputPassword1">Password</label>
                                <input
                                    type="password"
                                    className="form-control form-control-sm"
                                    onChange={(event) => {
                                        const password = event.target.value;
                                        setLoginState({ ...loginState, ...{ password } });
                                    }}
                                />
                            </div>
                            <button type="submit" className="btn btn-danger btn-sm">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        user: state,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (userState, history, setErrorHandler) => {
            dispatch(LoginAuthAction(userState, history, setErrorHandler));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);