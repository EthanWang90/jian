const defaultState = {
    isFocus: false,
    searchList: [],
};

export default (state=defaultState, action)=>{
    if(action.type === "search_focus"){
        return {
            isFocus: true,
            searchList: state.searchList
        }
    }
    if(action.type === "search_blur"){
        return {
            isFocus: false,
            searchList: state.searchList
        }
    }
    if(action.type === "update_list"){
        return Object.assign({},state,{
            searchList: action.data
        })
    }
    return state
}