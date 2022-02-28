import axios from "axios";
const API_URL = "http://localhost:4000/space/";

export function storyFetched(data){
    return {
        type:"story/storiesbyspace",
        payload:data,
    }
   
}
export default function fetchStoriesBySpace(id) {
   // console.log("id",id)
    return async function thunk(dispatch,getState){
        const storyResponse = await axios.get(`${API_URL}/${id}`)
     
        dispatch(storyFetched(storyResponse.data));
      

    }
}