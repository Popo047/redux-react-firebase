// export const createProject = (project) => {
//   return {
//     type: "ADD_PROJECT",
//     project: project,
//   };
// };
//Since we use thunk , we can return a value

export const createProject = (project) => {
  return (dispatch, getState) => {
    //async call
    dispatch({ type: "CREATE_PROJECT", project });
  };
};
