//Creating different named export constants for redability.

export const signIn = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase(); //Firebase initialised

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({
          type: "LOGIN_SUCCESS",
        });
      })
      .catch((err) => {
        dispatch({
          type: "LOGIN_ERROR",
          err,
        });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase(); //Firebase initialised

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({
          type: "SIGN_OUT_SUCCESS",
        });
      });
  };
};
