# 🤖 AI Code Reviewer

An AI-powered code review tool that helps developers quickly analyze their code and receive instant suggestions for improvements.  
Built with a **React (JSX) frontend** and an **Express.js backend** integrated with **Google Generative AI API**.

---

## 🚀 Features
- AI-powered code review for quick analysis and feedback
- Simple web interface – paste code, submit, and get results
- Lightweight setup – no database required
- Separate frontend and backend for clarity

---

## 🏗️ Tech Stack

### Frontend
- React.js (JSX)
- Vite
- Tailwind CSS

### Backend
- Node.js
- Express.js
- Google Generative AI API

### Deployment
- Vercel → Frontend
- Render → Backend

---

## 📂 Project Structure

```
AICODE REVIEWER/
│
├── Backend/                         # Backend with Express.js + AI API
│   ├── src/
│   │   ├── controllers/
│   │   │   └── ai.controller.js     # Handles request/response logic
│   │   ├── routes/
│   │   │   └── ai.routes.js         # Defines API endpoints
│   │   ├── services/
│   │   │   └── ai.service.js        # AI integration service
│   │   └── app.js                   # Express app configuration
│   ├── .env                         # Backend environment variables
│   ├── package.json
│   ├── package-lock.json
│   ├── server.js                    # Server entry point
│   ├── vercel.json                  # Deployment config for Vercel
│   └── .gitignore
│
├── Frontend/                        # Frontend with React + Vite
│   ├── public/                      # Static files
│   ├── src/
│   │   ├── App.jsx                  # Root React component
│   │   └── App.css                  # Styles for App.jsx
│   ├── dist/                        # Build output
│   ├── .env
│   ├── .env.production
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   ├── eslint.config.js
│   └── .gitignore
│
└── README.md                        # Documentation
```

---

## ⚙️ Setup & Installation

### Backend
```bash
cd Backend
npm install
```
Create a `.env` file in the `Backend/` folder and add:
```
GOOGLE_API_KEY=your_api_key
```
Run the backend:
```bash
npm start
```
By default: [http://localhost:5000](http://localhost:5000)

### Frontend
```bash
cd Frontend
npm install
npm run dev
```
By default: [http://localhost:5173](http://localhost:5173)

---

## 📜 License
This project is licensed under the MIT License.
