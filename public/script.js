// script.js (Frontend connected to backend API)
const API_URL = 'http://localhost:5000/api/students'; // Update if your backend is hosted elsewhere

// ADD Student
async function saveStudent(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const course = document.getElementById("course").value.trim();

  if (!name || !email || !course) {
    return alert("❌ Please fill in all fields!");
  }

  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, course }),
  });

  if (res.ok) {
    alert("✅ Student added successfully!");
    document.getElementById("studentForm").reset();
    window.location.href = "view-students.html";
  } else {
    alert("❌ Failed to add student!");
  }
}

// DISPLAY Students
async function displayStudents() {
  const res = await fetch(API_URL);
  const students = await res.json();

  const tableBody = document.getElementById("studentTableBody");
  tableBody.innerHTML = "";

  students.forEach((student) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${student.name}</td>
      <td>${student.email}</td>
      <td>${student.course}</td>
      <td>
        <button class="btn btn-sm btn-warning me-2" onclick="editStudent('${student._id}')">✏️ Edit</button>
        <button class="btn btn-sm btn-danger" onclick="deleteStudent('${student._id}')">🗑️ Delete</button>
      </td>
    `;
    tableBody.appendChild(row);
  });
}

// DELETE Student
async function deleteStudent(id) {
  const confirmDelete = confirm("Are you sure you want to delete this student?");
  if (!confirmDelete) return;

  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  displayStudents();
}

// EDIT Student
async function editStudent(id) {
  const name = prompt("Enter new name:");
  const email = prompt("Enter new email:");
  const course = prompt("Enter new course:");

  if (name && email && course) {
    await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: name.trim(), email: email.trim(), course: course.trim() }),
    });
    displayStudents();
  }
}

// INIT
if (window.location.pathname.includes("add-student.html")) {
  document.getElementById("studentForm").addEventListener("submit", saveStudent);
}

if (window.location.pathname.includes("view-students.html")) {
  window.onload = displayStudents;
}
