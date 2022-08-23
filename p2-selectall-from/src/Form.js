import { type } from "@testing-library/user-event/dist/type";
import React, { useReducer } from "react";
import { act } from "react-dom/test-utils";
import "./style.css";

export default function Form() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "selected":
        return {
          ...state,
          todoList: state.todoList.map((item) => {
            if (item.id === action.id) {
              return { ...item, selected: !item.selected };
            } else {
              return item;
            }
          }),
        };

      case "clear":
        return {
          selectAll: false,
          display: "",
          todoList: state.todoList.map((item) => {
            return { ...item, selected: false };
          }),
        };
      case "selectAll":
        return {
          ...state,
          selectAll: !state.selectAll,
        };

      case "showAll":
        return {
          ...state,
          todoList: state.todoList.map((item) => {
            return state.selectAll === false
              ? { ...item, selected: false }
              : { ...item, selected: true };
          }),
        };

      case "displayTodos":
        return {
          ...state,
          display: state.todoList.map((item) => {
            if (item.selected === true) {
              return item.name + " ";
            } else {
              return "";
            }
          }),
        };
      default:
        return state;
    }
  };

  const todoList = [
    {
      id: 1,
      name: "Kosher",
      selected: false,
    },
    {
      id: 2,
      name: "No Celery (inc celeriac)",
      selected: false,
    },
    {
      id: 3,
      name: "No Egg",
      selected: false,
    },
  ];

  const [state, dispatch] = useReducer(reducer, {
    todoList,
    selectAll: false,
    display: "",
  });

  console.log(state);

  return (
    <>
      <div>
        <p>Selected Value :{state.display}</p>
        <input
          type="checkbox"
          checked={state.selectAll}
          onChange={() => {
            dispatch({ type: "selectAll" });
            dispatch({ type: "showAll" });
            dispatch({ type: "displayTodos" });
          }}
        />
        Select All
        <div className="flex">
          {state.todoList.map((element) => {
            return (
              <label key={element.id}>
                <input
                  type="checkbox"
                  onChange={() => {
                    dispatch({
                      type: "selected",
                      id: element.id,
                    });

                    dispatch({ type: "displayTodos" });
                  }}
                  checked={element.selected}
                />
                {element.name}
              </label>
            );
          })}
        </div>
        <button
          onClick={() => {
            dispatch({ type: "clear" });
          }}
        >
          Clear All
        </button>
      </div>
    </>
  );
}
