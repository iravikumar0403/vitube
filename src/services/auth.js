import axios from "axios";

export const signup = async ({ name, email, password }, dispatch) => {
  dispatch({
    type: "INITIATE_AUTH",
  });
  try {
    const { data } = await axios.post(`api/auth/signup`, {
      name,
      email,
      password,
    });
    const user = {
      user: data.createdUser,
      token: data.encodedToken,
    };
    axios.defaults.headers.common["authorization"] = user.token;
    localStorage.setItem("user", JSON.stringify(user));
    dispatch({
      type: "AUTH_SUCCESS",
      payload: user,
    });
  } catch (error) {
    dispatch({
      type: "AUTH_FAILURE",
      payload:
        error.response.data?.message ||
        "Something went wrong! Please try again later",
    });
  }
};

export const login = async ({ email, password }, dispatch) => {
  dispatch({
    type: "INITIATE_AUTH",
  });
  try {
    const response = await axios.post(`api/auth/login`, {
      email,
      password,
    });
    const { data } = response;
    const user = {
      user: data.foundUser,
      token: data.encodedToken,
    };
    axios.defaults.headers.common["authorization"] = user.token;
    localStorage.setItem("user", JSON.stringify(user));
    dispatch({
      type: "AUTH_SUCCESS",
      payload: user,
    });
  } catch (error) {
    localStorage.clear();
    dispatch({
      type: "AUTH_FAILURE",
      payload:
        error.response.data?.errors[0] ||
        "Something went wrong! Please try again",
    });
  }
};

export const logout = (dispatch) => {
  localStorage.clear();
  delete axios.defaults.headers.common["authorization"];
  dispatch({
    type: "LOGOUT",
  });
};
