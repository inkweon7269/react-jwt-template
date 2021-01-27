import React, {useState} from 'react';
import {connect} from 'react-redux';

import Header from "../layout/Header";
import Footer from "../layout/Footer";
import {RegisterAuthAction} from "../../redux/actions/AuthAction";
import {useHistory} from "react-router-dom";


const Register = (props) => {
    const {user, register} = props;
    const [errorHandler, setErrorHandler] = useState({hasError: false, message: ""});

    const [userState, setUserState] = useState({});
    const history = useHistory();

    return (
        <div>
            <Header errorHandler={errorHandler} />
            <div className="sign-in-main">
                <div className="container d-flex">
                    <div className="sign-in-container py-5 m-auto border">
                        <div className="sign-in-header">
                            <h4 className="font-weight-bold">Sign Up</h4>
                            <p className="sign-in-intro">
                                <span className="text-muted">New to Food Delivery App ? </span>
                                <span className="text-danger font-weight-bold">Sign In</span>
                            </p>
                            <div className="login-social-media py-3">
                                <button className="btn btn-primary btn-block btn-sm">
                                    Continue with Google
                                </button>
                            </div>
                        </div>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            register(userState, history, setErrorHandler);
                        }}>
                            <div className="form-group">
                                <label htmlFor="InputEmail">Email address</label>
                                <input
                                    type="email"
                                    className="form-control form-control-sm"
                                    onChange={(e) => {
                                        const email = e.target.value;
                                        setUserState({...userState, ...{email}})
                                    }}
                                />
                                <small id="emailHelp" className="form-text text-muted">
                                    We'll never share your email with anyone else.
                                </small>
                            </div>
                            <div className="form-group">
                                <div className="form-row">
                                    <div className="col">
                                        <label htmlFor="InputEmail">Name</label>
                                        <input
                                            type="text"
                                            className="form-control form-control-sm"
                                            placeholder="Name"
                                            onChange={(e) => {
                                                const name = e.target.value;
                                                setUserState({...userState, ...{name}})
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="InputPassword1">비밀번호</label>
                                <input
                                    type="password"
                                    className="form-control form-control-sm"
                                    onChange={(e) => {
                                        const password1 = e.target.value;
                                        setUserState({...userState, ...{password1}})
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="InputPassword1">비밀번호 확인</label>
                                <input
                                    type="password"
                                    className="form-control form-control-sm"
                                    onChange={(e) => {
                                        const password2 = e.target.value;
                                        setUserState({...userState, ...{password2}})
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="InputPassword1">휴대폰번호</label>
                                <input
                                    type="number"
                                    className="form-control form-control-sm"
                                    onChange={(e) => {
                                        const cellphone = e.target.value;
                                        setUserState({...userState, ...{cellphone}})
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="InputPassword1">회사명</label>
                                <input
                                    type="text"
                                    className="form-control form-control-sm"
                                    onChange={(e) => {
                                        const companyName = e.target.value;
                                        setUserState({...userState, ...{company: {name: companyName}}})
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
            <Footer/>
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
        register: (userState, history, setErrorHandler) => {
            dispatch(RegisterAuthAction(userState, history, setErrorHandler));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);