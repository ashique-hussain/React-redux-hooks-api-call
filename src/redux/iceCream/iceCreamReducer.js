import { BUY_ICE_CREAM } from "./actionTypes";

const initialState = {
  numOfIceCream: 20
};

const IceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICE_CREAM:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1
      };
    default:
      return state;
  }
};

export default IceCreamReducer;
