import axios from "axios"
const API_URL = "http://localhost:4000/space/"

export function spacesFetched(data){
    return{
        type:"space/getAllSpace",
        payload:data
    }
}

export default async function fetchSpace(dispatch,getState){

    const response= await axios.get(API_URL);
    dispatch(spacesFetched(response.data));
}

