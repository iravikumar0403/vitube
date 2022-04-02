import { useReducer } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "context";
import { signupFormReducer } from "reducer";
import { signup } from "services";
import { useDocumentTitle } from "hooks";

export const Signup = () => {
  useDocumentTitle("Signup - ViTube");
  const navigate = useNavigate();
  const { state } = useLocation();
  const { from } = state || {};
  const [{ name, email, password, confirmPassword, showPass }, formDispatch] =
    useReducer(signupFormReducer, {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      showPass: false,
    });
  const { loading, user, dispatch } = useAuth();

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      await signup({ name, email, password }, dispatch);
    } catch (error) {
      console.log(error);
    }
  };

  if (user) {
    return <Navigate to={from || "/"} />;
  }

  return (
    <div className="container">
      <form className="form" onSubmit={handleSignup}>
        <h2 className="my-3">Signup</h2>
        <div>
          <label className="label" htmlFor="name">
            Full Name
          </label>
          <input
            className="input"
            type="text"
            id="name"
            value={name}
            onChange={(e) =>
              formDispatch({
                type: "NAME",
                payload: e.target.value,
              })
            }
            required
            placeholder="John doe"
          />
        </div>
        <div>
          <label className="label my-3" htmlFor="email">
            Email
          </label>
          <input
            className="input"
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
          <div className="input-icon">
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
        </div>
        <div>
          <label className="label my-3" htmlFor="confirm-password">
            Confirm Password
          </label>
          <div className="input-icon">
            <input
              className="input"
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) =>
                formDispatch({
                  type: "CONFIRM_PASS",
                  payload: e.target.value,
                })
              }
            />
          </div>
        </div>
        <input
          className="btn primary my-2"
          type="submit"
          disabled={loading}
          value="Signup"
        />
        <p>
          Already a member? &nbsp;
          <span
            className="link primary cursor-pointer"
            onClick={() => navigate("/login", { state: { from } })}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
};
