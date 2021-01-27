import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

const App = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default App;