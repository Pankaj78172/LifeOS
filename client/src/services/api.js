const API_URL = import.meta.env.VITE_API_URL

function getAuthHeaders() {
  const token = localStorage.getItem("token")

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  }
}

// EXPENSES
export async function getExpenses() {
  const response = await fetch(`${API_URL}/api/expenses`, {
    headers: getAuthHeaders()
  })
  return response.json()
}

export async function createExpense(expense) {
  const response = await fetch(`${API_URL}/api/expenses`, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify(expense)
  })
  return response.json()
}

export async function updateExpense(id, expense) {
  const response = await fetch(`${API_URL}/api/expenses/${id}`, {
    method: "PUT",
    headers: getAuthHeaders(),
    body: JSON.stringify(expense)
  })
  return response.json()
}

export async function deleteExpense(id) {
  await fetch(`${API_URL}/api/expenses/${id}`, {
    method: "DELETE",
    headers: getAuthHeaders()
  })
}

// TASKS
export async function getTasks() {
  const res = await fetch(`${API_URL}/api/tasks`, {
    headers: getAuthHeaders()
  })
  return res.json()
}

export async function createTask(task) {
  const res = await fetch(`${API_URL}/api/tasks`, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify(task)
  })
  return res.json()
}

export async function deleteTask(id) {
  await fetch(`${API_URL}/api/tasks/${id}`, {
    method: "DELETE",
    headers: getAuthHeaders()
  })
}

export async function toggleTask(id) {
  const res = await fetch(`${API_URL}/api/tasks/${id}/toggle`, {
    method: "PUT",
    headers: getAuthHeaders()
  })
  return res.json()
}

// AUTH
export async function registerUser(data) {
  const res = await fetch(`${API_URL}/api/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })

  return res.json()
}

export async function loginUser(data) {
  const res = await fetch(`${API_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })

  return res.json()
}

export async function verifyUser(data) {
  const res = await fetch(`${API_URL}/api/auth/verify`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })

  return res.json()
}

export async function resendCode(data) {
  const res = await fetch(`${API_URL}/api/auth/resend-code`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })

  return res.json()
}