const initState = {
    count:0,
}
const counter = (state=initState,action)=>{
    if(action.type == 'INCREMENT'){
        return {
            ...state,
            count:state.count + 1
        }
    }else{
        return state
    }
}
export default counter;