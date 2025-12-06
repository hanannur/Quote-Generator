# Quote Generator

A simple web application that generates random quotes. Built with **React** for the frontend and **Node.js/Express** for the backend. The backend fetches quotes from an external API and serves them to the frontend.



## Features

- Generate random quotes on demand.
- Displays quotes dynamically without page reload.
- Backend handles external API requests (avoiding CORS issues).
- Frontend deployed on **Vercel**.
- Backend deployed on **Render**.


## Technologies Used

- **Frontend:** React, JavaScript, CSS (Deployed on Vercel)
- **Backend:** Node.js, Express, Fetch API (Deployed on Render)
- **External API:** ZenQuotes (via backend)



## Getting Started (Local Development)

### Prerequisites
- Node.js installed  
- npm or yarn

### Run the Frontend

bash
cd frontend
npm install'
npm run dev```

Frontend will run on:
http://localhost:5173

### Run the Backend
cd backend
npm install
npm start

Backend API endpoint:
http://localhost:3000/quote


#Deployment
🔹 Frontend (Vercel)

The React app is deployed on Vercel.
You only need to update your .env or code to use the deployed backend URL:

https://your-backend.onrender.com/quote

🔹 Backend (Render)

Backend is deployed on Render and provides a single endpoint:

GET /quote


#Usage

Click Generate Quote to display a new random quote.

Frontend sends a request to your backend.

Backend fetches a fresh quote from ZenQuotes and returns it to the frontend.

License

This project is open-source and free to use.


Here is the UI

<img width="1788" height="1003" alt="image" src="https://github.com/user-attachments/assets/c3b8ba94-c340-46bf-a2e4-67f20f546fda" />
