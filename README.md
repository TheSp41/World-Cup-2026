# Tournament Bracket Predictor

A full-stack web application that allows users to predict the outcomes of a sports tournament. Users can rank group stages, select advancing third-place teams, build out a full 32-team knockout bracket, and compete against friends on a global leaderboard.

## Key Features

* **Group Stage Predictions:** Interactively rank teams within their groups. Top teams advance automatically based on your selections.
* **Dynamic Knockout Tree:** A responsive, interactive bracket starting from the Round of 32 all the way to the Final.
* **Global Leaderboard:** Compete with other users. Features complex tie-breaker logic and automatically highlights the logged-in user's standing, even if they are outside the top 100.
* **Export & Share:** Built-in "Save Page" functionality allows users to download crisp, high-resolution PNGs of their predictions and leaderboard rankings to share with friends.
* **Secure Authentication:** User signup, login, and session management using JWT (JSON Web Tokens) and HttpOnly cookies.
* **Dark Mode UI:** A sleek, modern dark theme built entirely with Tailwind CSS.

## Tech Stack

**Frontend:**
* React.js (Vite)
* Tailwind CSS (Styling)
* React Router DOM (Navigation)
* Context API (State Management: Auth, Predictions, Knockouts)
* React Toastify (Notifications)
* html-to-image (DOM to PNG generation)

**Backend:**
* Node.js & Express.js
* MongoDB & Mongoose (Database)
* JSON Web Tokens (JWT Auth)
* Cors & Dotenv

## Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites
* Node.js installed
* MongoDB database (MongoDB Atlas cluster)

### 1. Clone the Repository
```bash
git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
cd your-repo-name
```

### 2. Backend Setup
Navigate to the server directory and install the necessary dependencies:
```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder and add the following variables. Replace the placeholder values with your actual database connection string and a secure secret key:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_jwt_key
```

Start the backend development server:
```bash
npm run dev
```

### 3. Frontend Setup
Open a new terminal window, navigate to the frontend directory, and install the required dependencies:
```bash
cd frontend
npm install
```

Create a `.env` file in the `frontend` directory to link your React app to the local backend API:
```env
VITE_BACKEND=http://localhost:5000
```

Start the frontend development server:
```bash
npm run dev
```

The application should now be running. Open your browser and navigate to `http://localhost:5173` (or the port Vite provides) to view the app.

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page if you want to contribute.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.