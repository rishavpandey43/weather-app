import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as actionCreators from './actions/actionCreators';

import App from "../App";

function mapStateToProps(state) {
  return {
    sentenceData: state.loginInfo,
    userAnswer: state.sidebar
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const ReduxApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default ReduxApp;
