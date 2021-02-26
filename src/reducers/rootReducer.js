import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore"; //syncing firestore data in background premade
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer, //sync firestore into state obj in database
  firebase: firebaseReducer, //sync auth status on firebase with respect to redux

  //NOTE: fireBase prop changed to firebase   [B -> b] , refer for any errors here
});

export default rootReducer;
