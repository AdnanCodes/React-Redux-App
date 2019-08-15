import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import { getData } from "../actions";

const Weather = props => {
  return (
    <>
      <button onClick={props.getData}>
        {props.isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={150} width={150} />
        ) : (
          "Let Check that Weather Adnan"
        )}
      </button>
      {/* {props.webcams &&
        props.webcams.map(cam => cam )} */}
    </>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    isLoading: state.isLoading,
    weather: state.weather
  };
};
export default connect(
  mapStateToProps,
  { getData }
)(Weather);
