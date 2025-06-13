# student-management-system
This is my Intership project - 1. i have build a student management system where we can Add,Delete,Update details of various Students. I have used various API's, nodeJs,and front end languages and manymore u an read all the desrciption in the  readme file in the project.
# 🎓 Student Management System

A full-stack web application that allows administrators to manage student data efficiently. Built using **HTML**, **CSS**, **JavaScript**, **Node.js**, **Express**, and **MongoDB**.

---

## 🚀 Features

- Add new students with name, email, and course
- View all student entries
- Form validation for clean data entry
- RESTful API endpoints
- MongoDB integration for persistent storage

---

## 🛠️ Tech Stack

| Layer       | Technologies                      |
|-------------|-----------------------------------|
| Frontend    | HTML, CSS, JavaScript             |
| Backend     | Node.js, Express.js               |
| Database    | MongoDB, Mongoose ORM             |
| Versioning  | Git & GitHub                      |

---

## 📁 Folder Structure

student-management-system/
├── backend/
│ ├── models/ # Mongoose schemas
│ ├── routes/ # API route handlers
│ └── server.js # Express server setup
│
├── frontend/
│ ├── index.html # Main UI
│ ├── style.css # Styles
│ └── script.js # Frontend logic
│
└── README.md # Project documentation

yaml
Copy code

---

## 🧑‍💻 How to Run Locally

> Make sure MongoDB is installed and running locally on your machine.

### 1. Clone the Repository

```bash
git clone https://github.com/manveshsingh/student-management-system.git
cd student-management-system
2. Install Dependencies
bash
Copy code
npm install
3. Start MongoDB
Ensure mongod is running. You can open a new terminal and run:

bash
Copy code
mongod
4. Start the Server
bash
Copy code
node backend/server.js
5. Open the Frontend
Open frontend/index.html in your browser.

🔄 API Endpoints
Method	Route	Description
GET	/students	Get all student records
POST	/students	Add a new student

📌 Future Improvements
Edit & delete student records

Authentication system for admin login

Responsive mobile-friendly UI

Deployment on Render/Netlify/Vercel

👨‍💻 Author
Manvesh Singh
💼 GitHub: github.com/manvesh12
📧 Email: singhmanvesh04@gmail.com (replace with your real email)

📄 License
This project is open-source and available under the MIT License.



---

Let me know if you'd like a `LICENSE` file too or help deploying it online (e.g
