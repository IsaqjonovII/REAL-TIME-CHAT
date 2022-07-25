const auth = (state=null, action) => {
    switch(action.type){
        case "SIGN_USER":
            return state = action.payload
        case "SIGN_OUT_USER":
            return state = null
        default:
            return state
    }
}
export default auth