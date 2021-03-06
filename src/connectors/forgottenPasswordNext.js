import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as sel from "../selectors";
import * as act from "../actions";

const forgottenPasswordNextConnector = connect(
  sel.selectorMap({
    email: sel.resetPassEmail || sel.forgottenPassEmail
  }),
  (dispatch) =>
    bindActionCreators(
      {
        resetForgottenPassword: act.resetForgottenPassword,
        resetPasswordReset: act.resetPasswordReset
      },
      dispatch
    )
);

class Wrapper extends Component {
  componentWillUnmount() {
    this.props.resetPasswordReset();
    this.props.resetForgottenPassword();
  }

  render() {
    const { Component, ...props } = this.props;
    return <Component {...{ ...props }} />;
  }
}

const wrap = (Component) =>
  forgottenPasswordNextConnector((props) => (
    <Wrapper {...{ ...props, Component }} />
  ));
export default wrap;
