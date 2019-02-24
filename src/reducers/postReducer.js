export default (postList = [], action)=>{
    if(action.type === "FETCH_POST"){
        return action.payload
    }
    return postList;
}