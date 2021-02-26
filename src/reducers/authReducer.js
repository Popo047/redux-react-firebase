const initialState = {
  authError: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      return {
        ...state,
        authError: "Login Rejected",
      };
    case "LOGIN_SUCCESS":
      console.log("login success");
      return {
        ...state, //to avoid overwriting
        authError: null,
      };
    case "SIGN_OUT_SUCCESS":
      console.log("Signed Out Successfully");
      return {
        state,
      };
    case "SIGN_UP_SUCCESS":
      console.log("Signed Up Successfully");
      return {
        ...state,
        authError: null,
      };
    case "SIGN_UP_ERROR":
      console.log("Sign Up Error");
      return {
        ...state,
        authError: action.error.message, //names of variables between actions are reducers must be same.
      };
    default:
      return state;
  }
};

export default authReducer;
