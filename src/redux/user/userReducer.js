import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS
} from "./userTypes";

const initialSatate = {
  isloading: false,
  users: [],
  error: ""
};

const userReducer = (state = initialSatate, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        isloading: true
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        isloading: false,
        users: action.payload,
        error: ""
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        isloading: false,
        users: [],
        error: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
