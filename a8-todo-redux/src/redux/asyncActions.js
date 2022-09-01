import {
  fetchTodosRequest,
  deleteTodo as removeItem,
  competeTodo as todoStatus,
} from "./todoActions";

const API_URL = "http://localhost:3000";
const PATH = "todos";
export const loadData = () => {
  return (dispatch) => {
    fetch([API_URL, PATH].join("/"))
      .then((res) => res.json())
      .then((data) => dispatch(fetchTodosRequest(data)));
  };
};

export const addTodo = (input) => {
  return (dispatch) => {
    fetch([API_URL, PATH].join("/"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: input,
        completed: false,
      }),
    }).then(() => dispatch(loadData()));
  };
};

export const deleteTodo = (id) => {
  return (dispatch) => {
    fetch([API_URL, PATH, id].join("/"), { method: "DELETE" }).then(
      dispatch(removeItem(id))
    );
  };
};

export const updateTodo = () => {
  return (dispatch) => {};
};

export const competeTodo = (todo) => {
  let status = todo.completed;
  let id = todo.id;
  return (dispatch) => {
    fetch([API_URL, PATH, id].join("/"), {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        completed: !status,
      }),
    }).then(dispatch(todoStatus(todo)));
  };
};
