import React from "react";
import { connect } from "react-redux";
import buyIceCream from "../redux/iceCream/iceCreamAction";

const IceCreamContainer = props => {
  return (
    <div>
      <p>Number of Ice Cream is available: {props.numOfIceCream}</p>
      <button onClick={props.buyIceCream}>Buy icecream</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    numOfIceCream: state.iceCreams.numOfIceCream
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyIceCream: () => dispatch(buyIceCream())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IceCreamContainer);
