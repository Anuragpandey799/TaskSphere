# TaskSphere – MERN Stack Task Management Application

TaskSphere is a **full-stack task management web application** built using the **MERN stack**.  
It allows users to securely manage tasks with authentication, protected REST APIs, and persistent database storage.

This project demonstrates **industry-level full-stack development practices**, including clean architecture, JWT authentication, RESTful APIs, and frontend–backend integration.

---

## Features

- User registration and login using JWT authentication
- Secure and protected REST APIs
- Create, read, update, and delete tasks
- Task status management:
  - Pending
  - In Progress
  - Completed
- User-specific task access (data isolation)
- Responsive and clean UI
- MongoDB persistent storage

---

## Tech Stack

### Frontend
- React.js
- React Router
- Axios
- Context API
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcryptjs

### Tools & Utilities
- Postman (API testing)
- Git & GitHub
- VS code


---

<!-- ## Project Structure -->





---

## Setup Instructions (Local Development)

Follow the steps below to run the project locally.

---

### Clone the Repository

```bash
git clone <your-github-repo-url>
cd TaskSphere
```


## Backend Setup
Navigate to Server Folder

```bash
cd server
npm install

```

### Create Environment variable 

```bash
PORT=5000
MONGO_URI=you_MONGO_URI
JWT_SECRET=your_jwt_secret_key
```

### Run Backend Server
```bash
npm run dev
```
Backend will start at: http://localhost:5000


## Frontend Setup
### Navigate to Client Folder
```bash
cd ../client
npm install
```
### Run Frontend Application
```bash
npm run dev
```
Frontend will start at: http://localhost:5173


---

## API Endpoints
| Method | Endpoint             | Description         |
| ------ | -------------------- | ------------------- |
| POST   | `/api/auth/register` | Register a new user |
| POST   | `/api/auth/login`    | Login existing user |




## Task APIs (Protected)
| Method | Endpoint         | Description             |
| ------ | ---------------- | ----------------------- |
| GET    | `/api/tasks`     | Fetch all tasks         |
| POST   | `/api/tasks`     | Create a new task       |
| PUT    | `/api/tasks/:id` | Update an existing task |
| DELETE | `/api/tasks/:id` | Delete a task           |

### Protected routes require: Authorization: Bearer <JWT_TOKEN>


---
## Database Details
### Database Name:
  - tasksphere

### Collections:
  - users
  - tasks



---

##  About Me

Hi! I’m **Anurag Pandey**, a passionate **MERN Stack Developer** who enjoys building clean, scalable, and real-world web applications.

I’m particularly interested in:
- Full-stack development using JavaScript
- Designing RESTful APIs
- Writing clean and maintainable code
- Learning industry best practices through hands-on projects

**TaskSphere** reflects my approach to development — focusing not just on functionality, but also on structure, security, and real-world usability.

---

##  Portfolio & Links

 **Portfolio:**  
https://my-portfolio-wheat-zeta-89.vercel.app/

 **GitHub:**  
https://github.com/Anuragpandey799

**Open to opportunities:**  
I am actively seeking **internship / entry-level full stack development roles** where I can learn, contribute, and grow as a developer.

---

##  Thank You

Thank you for taking the time to review this project.  
I would love the opportunity to discuss my work, learn from feedback, and improve further.

**Have a great day!**
