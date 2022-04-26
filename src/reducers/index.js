import { combineReducers } from "redux";
import counter from "../reducers/counter"
import users from "../reducers/users"

const allReducers = combineReducers({
    counterReducer:counter,
    userReducer:users
})

export default allReducers;