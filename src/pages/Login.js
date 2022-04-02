import { useReducer } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "context";
import { loginFormReducer } from "reducer";
import { login } from "services";
import { useDocumentTitle } from "hooks";

export const Login = () => {
  useDocumentTitle("Login - ViTube");
  const navigate = useNavigate();
  const { loading, error, user, dispatch: authDispatch } = useAuth();
  const { state } = useLocation();
  const { from } = state || {};

  const [{ email, password, showPass }, formDispatch] = useReducer(
    loginFormReducer,
    { email: "", password: "", showPass: false }
  );

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await login({ email, password }, authDispatch);
    } catch (error) {}
  };

  const handleGuestLogin = async (e) => {
    e.preventDefault();
    try {
      await login(
        { email: "admin@vitube.com", password: "admincreds123" },
        authDispatch
      );
    } catch (error) {}
  };

  if (user) {
    return <Navigate to={from || "/"} />;
  }

  return (
    <div className="container">
      <form className="form" onSubmit={handleLogin}>
        <h2 className="my-3">Login</h2>
        <div>
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            className={`input ${error && "invalid"}`}
            type="email"
            id="email"
            value={email}
            onChange={(e) =>
              formDispatch({
                type: "EMAIL",
                payload: e.target.value.toLowerCase(),
              })
            }
            required
            placeholder="john.doe@email.com"
          />
        </div>
        <div>
          <label className="label my-3" htmlFor="password">
            Password
          </label>
          <div className={` ${error && "invalid"} input-icon`}>
            <input
              className="input"
              type={showPass ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) =>
                formDispatch({
                  type: "PASSWORD",
                  payload: e.target.value,
                })
              }
            />
            <button
              type="button"
              className="btn icon-only text-light"
              onClick={() =>
                formDispatch({
                  type: "SHOW/HIDE_PASS",
                })
              }
            >
              <i
                className={`fa-regular ${showPass ? "fa-eye-slash" : "fa-eye"}`}
              ></i>
            </button>
          </div>
          <span className="invalid-feedback my-1">{error}</span>
        </div>
        <input
          className="btn primary my-2"
          type="submit"
          disabled={loading}
          value="Login"
        />
        <button
          className="btn primary outlined"
          onClick={handleGuestLogin}
          disabled={loading}
        >
          Login as guest user
        </button>
        <p>
          Not a member? &nbsp;
          <span
            className="link primary cursor-pointer"
            onClick={() => navigate("/signup", { state: { from } })}
          >
            Sign up
          </span>
        </p>
      </form>
    </div>
  );
};
