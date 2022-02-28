import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import SpaceSliceReducer from "./space/reducer";
import StorySliceReducer from "./story/reducer";
export default combineReducers({
  appState,
  user,
  SpaceSliceReducer,
  StorySliceReducer
});
