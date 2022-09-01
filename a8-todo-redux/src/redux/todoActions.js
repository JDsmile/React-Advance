export const fetchTodosRequest = (todos) => {
  return {
    type: "FETCH_TODO",
    payload: todos,
  };
};

export const addTodo = (todo) => {
  return {
    type: "ADD_TODO",
    payload: todo,
  };
};

export const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    payload: id,
  };
};

export const competeTodo = (todo) => {
  return {
    type: "COMPELTE_TODO",
    payload: todo,
  };
};
