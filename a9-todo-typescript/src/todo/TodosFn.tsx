import { text } from 'body-parser';
import React, { HtmlHTMLAttributes } from 'react'
const API_URL:String = "http://localhost:3000";
const PATH:String = "todos";


interface Todo{
    title:String,
    completed:boolean,
    id:Number,
}
function TodosFn() {
   const [todoList, setTotoList] = React.useState<Todo[]>([]);
  const [input, setInput] = React.useState<String>("");
  const [editble, setEditble] = React.useState<Boolean>(false);
  const textInput = React.useRef <HTMLInputElement>(null);
  const [id, setId] = React.useState<Number>();
 

  React.useEffect(() => {
    loadData();
  }, []);

    const loadData = () => {
    fetch([API_URL, PATH].join("/"))
      .then((res) => res.json())
      .then((data) => renderTodos(data));
    setInput(() => "");
  };



  function renderTodos(data:any) {
    let completedTodos = data.filter((element:any) => element.completed === true);
    let newList = data.filter((element:any) => !completedTodos.includes(element));
    newList = newList.concat(completedTodos);
    setTotoList(newList);
  }
  function handleChange(event:React.FormEvent) {
    setInput((event.target as HTMLInputElement).value);
  }

  function deleteTodo(id:Number) {
    fetch([API_URL, PATH, id].join("/"), { method: "DELETE" }).then(() =>
      loadData()
    );
  }

  function addTodo(e:React.FormEvent) {
    e.preventDefault();
    fetch([API_URL, PATH].join("/"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: input,
        completed: false,
      }),
    }).then(() => loadData());
  }

  function completedTodo(id:Number, complete:Boolean) {
    fetch([API_URL, PATH, id].join("/"), {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        completed: !complete,
      }),
    }).then(() => loadData());
  }

  function editTodo(id:Number) {
    if (textInput.current &&textInput.current.tagName.toLowerCase() === "p") {
      setId(() => id);
      setEditble(() => true);
    } else {
      setEditble(() => false);
      fetch([API_URL, PATH, id].join("/"), {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: input,
        }),
      }).then(() => loadData());
    }
  }


  return (
    <>
      <div className="form" onSubmit={(e) => addTodo(e)}>
        <form>
          <input
            type="text"
            className="form-input"
            onChange={handleChange}
            onClick={(e) => ((e.target as HTMLInputElement).value = "")}
          />
          <button className="form-submit" type="submit">
            Submit
          </button>
        </form>
      </div>

      <div className="todos-container">
        {todoList.map((element) => {
          return (
            <div className="todo-item">
                {editble && (element.id === id) ? (
                <input
                  className="todo-edit-input"
                  ref={textInput}
                  onChange={handleChange}
                ></input>
              ) : (
                <p
                  ref={textInput}
                  className={`todo-content ${
                    element.completed ? "completed" : ""
                  }`}
                  onClick={() => completedTodo(element.id, element.completed)}
                >
                  {element.title}
                </p>
              )}

              <div>
                <svg
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="EditIcon"
                  onClick={() => editTodo(element.id)}
                  aria-label="fontSize small"
                  className="small edit"
                  fill="#e6e2d3"
                >
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
                </svg>

                <svg
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="DeleteIcon"
                  aria-label="fontSize small"
                  className="small delete"
                  fill="#e6e2d3"
                  onClick={() => deleteTodo(element.id)}
                >
                  <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
                </svg>
              </div>
            </div>
          );
        })}
      </div>
    </>
  )
}

export default TodosFn