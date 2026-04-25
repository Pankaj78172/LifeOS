const API_URL = import.meta.env.VITE_API_URL

export async function getExpenses() {
  const response = await fetch(`${API_URL}/api/expenses`)
  return response.json()
}

export async function createExpense(expense) {
  const response = await fetch(`${API_URL}/api/expenses`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(expense)
  })
  return response.json()
}

export async function updateExpense(id, expense) {
  const response = await fetch(`${API_URL}/api/expenses/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(expense)
  })
  return response.json()
}

export async function deleteExpense(id) {
  await fetch(`${API_URL}/api/expenses/${id}`, {
    method: "DELETE"
  })
}

// TASKS services
export async function getTasks() {
  const res = await fetch(`${API_URL}/api/tasks`)
  return res.json()
}

export async function createTask(task) {
  const res = await fetch(`${API_URL}/api/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(task)
  })
  return res.json()
}

export async function deleteTask(id) {
  await fetch(`${API_URL}/api/tasks/${id}`, {
    method: "DELETE"
  })
}

export async function toggleTask(id) {
  const res = await fetch(`${API_URL}/api/tasks/${id}/toggle`, {
    method: "PUT"
  })
  return res.json()
}