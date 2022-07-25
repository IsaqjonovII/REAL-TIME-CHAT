const theme = (state = false, action) => {
    switch(action.type){
        case "CHANGE_THEME":
            return state = !state
        default:
            return state
    }
}
export default theme
