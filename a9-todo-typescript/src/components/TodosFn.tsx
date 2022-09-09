import React from 'react'
import { Todo } from '../interfaces/todo.interface'
import {
  getTodos,
  deleteTodo,
  addTodo,
  completedTodo,
  editTodo,
} from '../apis/todo.api'

function TodosFn() {
  const [todoList, setTotoList] = React.useState<Todo[]>([])
  const [input, setInput] = React.useState<String>('')
  const [editble, setEditble] = React.useState<Boolean>(false)
  const textInput = React.useRef<HTMLInputElement>(null)
  const [id, setId] = React.useState<Number>()

  React.useEffect(() => {
    loadData()
  }, [])

  const loadData = () => {
    getTodos().then((data) => renderTodos(data))
    setInput(() => '')
  }

  function renderTodos(data: Todo[]) {
    let completedTodos = data.filter(
      (element: Todo) => element.completed === true,
    )
    let newList = data.filter(
      (element: Todo) => !completedTodos.includes(element),
    )
    newList = newList.concat(completedTodos)
    setTotoList(newList)
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    let todo: Todo = {
      title: input,
      completed: false,
    }
    addTodo(todo).then(() => loadData())
  }
  function handleChange(event: React.FormEvent) {
    setInput((event.target as HTMLInputElement).value)
  }

  function handleDeleteTodo(id: Number) {
    deleteTodo(id).then(() => loadData())
  }

  function handleCompletedTodo(id: Number, completed: Boolean) {
    completedTodo(id, !completed).then(() => loadData())
  }

  function handelEditTodo(id: Number) {
    if (textInput.current && textInput.current.tagName.toLowerCase() === 'p') {
      setId(() => id)
      setEditble(() => true)
    } else {
      setEditble(() => false)
      editTodo(id, input).then(() => loadData())
    }
  }

  return (
    <>
      <div
        className="form"
        onSubmit={(e) => {
          handleSubmit(e)
        }}
      >
        <form>
          <input
            type="text"
            className="form-input"
            onChange={handleChange}
            onClick={(e) => ((e.target as HTMLInputElement).value = '')}
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
              {editble && element.id === id ? (
                <input
                  className="todo-edit-input"
                  ref={textInput}
                  onChange={handleChange}
                ></input>
              ) : (
                <p
                  ref={textInput}
                  className={`todo-content ${
                    element.completed ? 'completed' : ''
                  }`}
                  onClick={() =>
                    handleCompletedTodo(element.id as Number, element.completed)
                  }
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
                  onClick={() => {
                    return handelEditTodo(element.id as Number)
                  }}
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
                  onClick={() => handleDeleteTodo(element.id as Number)}
                >
                  <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
                </svg>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default TodosFn
