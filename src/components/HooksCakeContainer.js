import React from "react";
import { useSelector, useDispatch } from "react-redux";
import buyCake from "../redux/cake/cakeAction";

const HooksCakeContainer = () => {
  const numOfCakes = useSelector(state => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h4>Number of cakes: {numOfCakes}</h4>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
};

export default HooksCakeContainer;
