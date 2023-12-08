import thunkMiddleware from "redux-thunk";
import authReducer from "./authReducer";
import usersReducer from "./usersReducer";
import {reducer as formReducer} from "redux-form"
import appReducer from "./appReducer";

const { createStore, combineReducers, applyMiddleware } = require("redux");
const { default: profileReducer } = require("./profileReducer");
const { default: dialogsReducer } = require("./dialogsReducer");
const { default: sidebarReducer } = require("./sidebarReducer");

let reducersGetter = combineReducers({
    profilePage: profileReducer,
    chattingPage: dialogsReducer,
    SideBar: sidebarReducer,
    findUser: usersReducer,
    authUser: authReducer,
    form: formReducer,
    app: appReducer
});

let store = createStore(reducersGetter, applyMiddleware(thunkMiddleware));

export default store;