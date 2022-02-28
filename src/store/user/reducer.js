import { LOG_OUT, LOGIN_SUCCESS, TOKEN_STILL_VALID, DELETE_STORY,STORY_POST_SUCCESS,SPACE_UPDATED } from "./actions";

const initialState = {
  token: localStorage.getItem("token"),
  name: null,
  email: null,
  space:null
};

export default (state = initialState, action) => {
  console.log("inside login",action.payload);
  switch (action.type) {
   
    case LOGIN_SUCCESS:
     
      localStorage.setItem("token", action.payload.token);
      return { ...state, ...action.payload };

    case LOG_OUT:
      localStorage.removeItem("token");
      return { ...initialState, token: null };

    case TOKEN_STILL_VALID:
      return { ...state, ...action.payload };

    case DELETE_STORY:
      console.log("my payload", action.payload)
      console.log("state stories",{...state.space.stories});
      const updatedStories = [...state.space.stories.filter(story=>story.id != action.payload)]
      console.log("updatedstories",updatedStories);
      const newState = {...state,space: {...state.space, stories:updatedStories}}
      console.log("My new state", newState)
      return newState;

      case STORY_POST_SUCCESS:
      return {
        ...state,
        space: {
          ...state.space,
          stories: [...state.space.stories, action.payload]
        }
      };
      case SPACE_UPDATED:
      return {
        ...state,
        space: { ...action.payload, stories: state.space.stories }
      };
    default:
      return state;
  }
};
