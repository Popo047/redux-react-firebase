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
    default:
      return state;
  }
};

export default authReducer;
