const initialState = {
    spaces:[]
}
export default function SpaceSliceReducer(state=initialState,action)
{
    switch(action.type) {
        case "space/getAllSpace": 
        {
            console.log("going inside");
           return {
            ...state,
            spaces: action.payload,
            }
        }
        default:
            return state;
    }
}