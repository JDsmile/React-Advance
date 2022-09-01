const reducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_TODO":
      return action.payload;

    case "ADD_TODO":
      return [...state, action.payload];
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);

    case "COMPELTE_TODO":
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        } else return item;
      });

    default:
      return state;
  }
};

export default reducer;
