const initialState = {
    stories:[]
}
export default function StorySliceReducer(state=initialState,action)
{
    console.log("payload",action.payload);
    switch(action.type) {
        case "story/storiesbyspace": 
        {
           return {
            ...state,
            stories: action.payload,
            }
        }
        
        default:
            return state;
    }
}