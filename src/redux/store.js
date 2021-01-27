import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import thunk from "redux-thunk";
import authreducer from "./reducers/AuthReducer";
import authErrorReducer from "./reducers/AuthErrorReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    auth: authreducer,
    authError: authErrorReducer
})

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;