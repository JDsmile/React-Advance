import { Todo } from '../interfaces/todo.interface'

const API_URL: String = 'http://localhost:3000'
const PATH: String = 'todos'

export async function getTodos() {
  const res = await fetch([API_URL, PATH].join('/'))
  return await res.json()
}

export async function deleteTodo(id: Number) {
  const res = await fetch([API_URL, PATH, id].join('/'), {
    method: 'DELETE',
  })
  return await res.json()
}

export async function addTodo(todo: Todo) {
  const res = await fetch([API_URL, PATH].join('/'), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  })
  return await res.json()
}

export async function completedTodo(id: Number, completed: Boolean) {
  const res = await fetch([API_URL, PATH, id].join('/'), {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      completed,
    }),
  })
  return await res.json()
}

export async function editTodo(id: Number, input: String) {
  const res = await fetch([API_URL, PATH, id].join('/'), {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: input,
    }),
  })
  return await res.json()
}
