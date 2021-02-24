// export const createProject = (project) => {
//   return {
//     type: "ADD_PROJECT",
//     project: project,
//   };
// };
//Since we use thunk , we can return a value

export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //async call
    const firestore = getFirestore();
    firestore
      .collection("projects")
      .add({
        ...project, //project contains title and content from creteProject.js
        authorFirstName: "Soham", //hardcoded for time being
        authorLastName: "Debanth",
        authorId: 1,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_PROJECT_FAILURE", err });
      }); //async call

    // dispatch({ type: "CREATE_PROJECT", project }); //if there was no sync call
  };
};
