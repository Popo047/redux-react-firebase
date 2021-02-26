// export const createProject = (project) => {
//   return {
//     type: "ADD_PROJECT",
//     project: project,
//   };
// };
//Since we use thunk , we can return a value

//Action Creator

export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //async call
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    firestore
      .collection("projects")
      .add({
        ...project, //project contains title and content from creteProject.js
        authorFirstName: profile.firstName, //hardcoded for time being
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT_SUCCESS", project });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_PROJECT_FAILURE", err });
      }); //async call

    // dispatch({ type: "CREATE_PROJECT", project }); //if there was no sync call
  };
};
