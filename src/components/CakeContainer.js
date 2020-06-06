import React from "react";
import { connect } from "react-redux";
import buyCake from "../redux/cake/cakeAction";

const CakeConatiner = props => {
  return (
    <div>
      <p>Number of cake is available: {props.numOfCakes}</p>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    numOfCakes: state.cake.numOfCakes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CakeConatiner);
