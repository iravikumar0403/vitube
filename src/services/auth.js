import axios from "axios";
const { REACT_APP_API_URL } = process.env;

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
    axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
    const user = {
      user: data.createdUser,
      token: data.encodedToken,
    };
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
    axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
    const user = {
      user: data.foundUser,
      token: data.encodedToken,
    };
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
  delete axios.defaults.headers.common["Authorization"];
  dispatch({
    type: "LOGOUT",
  });
};
