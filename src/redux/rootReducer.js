import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import userreducer from "./user/userReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCreams: iceCreamReducer,
  user: userreducer
});

export default rootReducer;
