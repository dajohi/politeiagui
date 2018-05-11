import React from "react";
import { Field } from "redux-form";
import Message from "../Message";
import ButtonWithLoadingIcon from "./ButtonWithLoadingIcon";
import ErrorField from "../Form/Fields/ErrorField";
import loginConnector from "../../connectors/login";

const LoginForm = ({
  Link,
  formAction="/post/login",
  error,
  isApiRequestingLogin,
  loggedInAsEmail,
  apiLoginError,
  onLogin,
  handleSubmit,
}) =>  loggedInAsEmail ? null : (
  <form
    action={formAction}
    className="form-v2"
    id="login-form"
    method="post"
    name="login-form"
    onSubmit={onLogin ? handleSubmit(onLogin) : null}
  >
    <input name="op" type="hidden" defaultValue="login" />
    <input
      name="dest"
      type="hidden"
      defaultValue="/"
    />
    <div className="c-form-group">
      <label className="screenreader-only" htmlFor="user_login">
        username:
      </label>
      <Field
        autoFocus
        className="c-form-control"
        id="user_login"
        name="email"
        component="input"
        type="text"
        placeholder="Email Address"
        tabIndex={3}
      />
    </div>
    <div className="c-form-group">
      <label className="screenreader-only" htmlFor="passwd_login">
        password:
      </label>
      <Field
        className="c-form-control"
        id="passwd_login"
        tabIndex={3}
        name="password"
        component="input"
        type="password"
        placeholder="Password"
      />
      {apiLoginError ? (
        <Message
          type="error"
          header="Login error"
          body={apiLoginError} />
      ) : null}
      {error ? (
        <Message
          type="error"
          header="Cannot login"
          body={error} />
      ) : null}
      <Field
        name="global"
        component={props => <ErrorField title="Cannot login" {...props} />}
      />
    </div>
    <div className="c-checkbox">
      <input id="rem_login" name="rem" tabIndex={3} type="checkbox" />
      <label htmlFor="rem_login">remember me</label>
      <Link className="c-pull-right reset-password-link" href="/password">
        Reset Password
      </Link>
    </div>
    <div className="c-clearfix c-submit-group">
      <ButtonWithLoadingIcon
        className="c-btn c-btn-primary c-pull-right"
        tabIndex={3}
        text="LOGIN"
        isLoading={isApiRequestingLogin} />
    </div>
    <div>
      <div className="c-alert c-alert-danger" />
    </div>
  </form>
);


export default loginConnector(LoginForm);
