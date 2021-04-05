const initialData = {
  taskItems: [],
};
function taskReducer(state = initialData, action) {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        taskItems: [...state.taskItems, action.payload],
      };

    default:
      return state;
  }
}
export default taskReducer;
