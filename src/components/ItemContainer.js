import React from "react";
import { connect } from "react-redux";
import buyCake from "../redux/cake/cakeAction";
import buyIceCream from "../redux/iceCream/iceCreamAction";

const ItemContainer = props => {
  return (
    <div>
      <h3>Item - {props.item}</h3>
      <button onClick={props.buyItem}>Buy Item</button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCreams.numOfIceCream;
  return {
    item: itemState
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());
  return {
    buyItem: dispatchFunction
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemContainer);
