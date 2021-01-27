import React from 'react';
import {connect} from 'react-redux';
import {Link, useHistory} from "react-router-dom";
import {LogOutAuthAction, RegisterAuthAction} from "../../redux/actions/AuthAction";
import ErrorHandler from "../error/ErrorHandler";

const Header = (props) => {
    const {auth, logout, errorHandler} = props;
    const history = useHistory();

    return (
        <div className="header d-flex justify-content-center py-2 shadow-sm">
            <ErrorHandler errorHandler={errorHandler || {hasError: false, message: ""}} />
            <Link to="">
                <h5 className="font-weight-bold text-danger mx-3">Food Delivery App</h5>
            </Link>
            <div className="ml-auto">
                {
                    !auth.isLoggedIn ? (
                        <>
                            <Link to="./login">
                                <button className="btn btn-danger btn-sm mx-2">Login</button>
                            </Link>
                            <Link to="./register">
                                <button className="btn btn-danger btn-sm mx-5">Sign Up</button>
                            </Link>
                        </>
                    ) : (
                        <>
                            <h5>{auth.user.user_data.user_name}</h5>
                            <button
                                className="btn btn-danger btn-sm mx-2"
                                onClick={() => {
                                    logout(history);
                                }}
                            >Log Out</button>
                        </>
                    )
                }
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    console.log(state)

    return {
        auth: state,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: (history) => {
            dispatch(LogOutAuthAction(history));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);