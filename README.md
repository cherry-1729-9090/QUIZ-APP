# Quiz App

## Overview

This is a full-stack Quiz Application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with Vite for the frontend build. The application allows users to register, login, take quizzes, and view their quiz history. The application supports multiple themes (light and dark) and different types of quiz questions, including single-choice, multiple-choice, and true/false questions.

## Features

- **User Authentication**: Users can register, login, and log out.
- **Quizzes**: Users can select quizzes by difficulty level and take them.
- **Question Types**: Supports single-choice, multiple-choice, and true/false questions.
- **Quiz History**: Users can view their quiz history and top scores.
- **Themes**: Supports light and dark themes with a toggle switch.
- **Responsive Design**: The application is fully responsive and works on all screen sizes.

## Tech Stack

### Frontend
- **React.js**: A JavaScript library for building user interfaces.
- **Vite**: A fast frontend build tool that significantly improves the development experience.
- **Ant Design**: A UI library that provides a set of high-quality React components.
- **Context API**: Used for state management (GlobalContext and ThemeContext).
- **Axios**: For making HTTP requests to the backend API.
- **React Router**: For handling client-side routing.

### Backend
- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express.js**: A web application framework for Node.js.
- **MongoDB**: A NoSQL database used to store users, quizzes, questions, and history.
- **Mongoose**: An ODM library for MongoDB and Node.js.
- **JWT (JSON Web Tokens)**: For user authentication and authorization.
- **Bcrypt.js**: For hashing user passwords.

## Installation

### Prerequisites
- Node.js and npm installed
- MongoDB installed and running locally or a MongoDB Atlas account

### Backend Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/quiz-app.git
   cd quiz-app/server
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Environment Variables**

   Create a `.env` file in the `server` directory and add the following variables:

   ```env
   MONGO_URI=your-mongodb-connection-string
   JWT_SECRET=your-jwt-secret
   ```

4. **Running the Backend**

   ```bash
   node server.js
   ```

   The backend should now be running on `http://localhost:5000`.

### Frontend Setup

1. **Navigate to the Frontend Directory**

   ```bash
   cd ../QUIZ APPLICATION
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Running the Frontend**

   ```bash
   npm run dev
   ```

   The frontend should now be running on `http://localhost:5173`.

## Usage

1. **Register**: Create a new account.
2. **Login**: Log in with your credentials.
3. **Select Quiz**: Choose a quiz based on difficulty level.
4. **Take Quiz**: Answer the questions; the app will automatically calculate your score.
5. **View History**: Check your previous quiz attempts and top scores.
6. **Toggle Theme**: Switch between light and dark themes using the theme toggle.

## Folder Structure

```
quiz-app/
│
├── server/                    # Backend
│   ├── controllers/           # Route controllers
│   ├── models/                # Mongoose models
│   ├── routes/                # Express routes
│   ├── middlewares/           # Authentication middlewares
│   ├── server.js              # Express app configuration
│   └── .env                   # Environment variables
│
├── QUIZ APPLICATION/          # Frontend
│   ├── public/                # Public assets
│   ├── src/
│   │   ├── components/        # React components
│   │   ├── context/           # Context API files
│   │   ├── pages/             # React pages
│   │   ├── styles/            # CSS and theming files
│   │   ├── App.jsx            # Main React component
│   │   ├── main.jsx           # Entry point for React
│   └── .env                   # Environment variables (if any)
│
└── README.md                  # Project documentation
```

## Deployment

### Backend Deployment on Render

1. **Create a New Web Service on Render**

   - Here is the link for backend service deployed on `render` 
    <https://quiz-app-l3lc.onrender.com>

2. **Frontend Deployment on Netlify**

   - Here is the link for frontend deployed on Netlify 
    <https://rainbow-cat-7eb907.netlify.app/>

# Video

Here is the video of functioning of the application.
![Demo video](./assets/demo.mp4)

## Contributing

Contributions are welcome! Please create an issue or submit a pull request for any improvements or new features.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Vite](https://vitejs.dev/) for the frontend build tool.
- [Ant Design](https://ant.design/) for the UI components.
- [MongoDB](https://www.mongodb.com/) for the database.
- [React](https://reactjs.org/) for the frontend framework.
- [Node.js](https://nodejs.org/) and [Express](https://expressjs.com/) for the backend.

