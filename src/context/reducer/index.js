import {combineReducers} from "redux"
import theme from "./theme"
import auth from "./auth"
 
const reducer = combineReducers({
    darkMode: theme,
    auth: auth
})

export default reducer