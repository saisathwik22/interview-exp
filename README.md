# Interview Experience Dashboard

Link to Loom video
[project walkthrough](https://www.loom.com/share/be36b34ce1dc460b903444784247b4b7?sid=6577b473-d026-4268-81b1-1fb24052b327)

This project is a web application where users can submit and view their interview experiences. The application allows users to register, log in, and submit their interview experiences with details such as company, country, interview questions, etc. It provides a dashboard where users can view their submissions and search for others’ experiences.

The project is built using **ReactJS** for the frontend and **Node.js** with **MongoDB** for the backend.

## Features

- **User Authentication**: Users can register, log in, and manage their interview submissions.
- **Submission Creation**: Users can submit their interview experiences with details such as company, country, and interview questions.
- **Submission List**: View all submissions on the dashboard.
- **Search Functionality**: Search for interview experiences based on company name.
- **Responsive Design**: The application is responsive and works well on mobile, tablet, and desktop devices.
- **JWT Authentication**: Ensures secure access to the dashboard, allowing users to manage their own submissions only.

## Tech Stack

- **Frontend**: ReactJS, React Router, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token)
- **Styling**: Custom CSS

## Installation and Setup

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/interview-experience-dashboard.git
cd interview-experience-dashboard
```

2. Backend Setup (Node.js + MongoDB)
   Navigate to the backend directory:

```bash
Copy code
cd backend
```

Install dependencies:
Install the necessary dependencies using npm:

```bash
Copy code
npm install
```

Set up MongoDB:

You need a MongoDB database to store the data. You can use MongoDB Atlas for a cloud database or set up a local MongoDB instance.

Create a .env file in the backend directory and add the following environment variables:

```bash
Copy code
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-secret-key
```

Start the Backend Server:

Run the backend server using the following command:

```bash
Copy code
npm start
```

The backend server will be running at http://localhost:5000.

3. Frontend Setup (ReactJS)
   Navigate to the frontend directory:

```bash
Copy code
cd frontend
```

Install dependencies:

Install the necessary dependencies using npm:

```bash
Copy code
npm install
```

Start the Frontend Server:

Run the frontend server using the following command:

```bash
Copy code
npm start
```

The frontend application will be running at http://localhost:3000.

4. Open the Application
   Open your browser and navigate to http://localhost:3000 to see the application in action.

### Usage

Register a New User:

Go to the registration page and enter your name, email, and password.

### API Endpoints

1. POST /api/auth/register
   Description: Register a new user.
   Body:
   json
   Copy code
   {
   "name": "John Doe",
   "email": "john@example.com",
   "password": "password123"
   }
   Response:
   Success: 201 Created
   Error: 400 Bad Request
2. POST /api/auth/login
   Description: Login to the application.
   Body:
   json
   Copy code
   {
   "email": "john@example.com",
   "password": "password123"
   }
   Response:
   Success: 200 OK with a JWT token.
   Error: 401 Unauthorized
3. POST /api/submissions
   Description: Create a new interview submission.
   Body:
   json
   Copy code
   {
   "company": "Google",
   "country": "USA",
   "questions": ["What is JavaScript?", "Explain closures."]
   }
   Response:
   Success: 201 Created
   Error: 400 Bad Request
4. GET /api/submissions
   Description: Get all interview submissions (with optional search).
   Query Parameters:
   company: Search by company name.
   Response:
   Success: 200 OK with an array of submissions.
   Error: 500 Internal Server Error
   Testing
   Test Cases
   Submission Creation:



### Acknowledgements

ReactJS
Node.js
MongoDB
JWT
Express.js
Axios
