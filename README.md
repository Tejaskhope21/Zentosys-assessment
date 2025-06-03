# 🚀 Zentosys MERN Stack Internship Challenges

This repository contains solutions for the **Zentosys MERN Stack Internship Primer** challenges. Each challenge is implemented in a separate folder with its own code and documentation. The projects demonstrate proficiency in the **MERN stack (MongoDB, Express.js, React, Node.js)** and related tools and practices.

---

## 📚 Table of Contents

1. [React Todo App](#1-react-todo-app)
2. [MongoDB eCommerce Schema](#2-mongodb-ecommerce-schema)
3. [Express Notes API](#3-express-notes-api)
4. [Node.js Weather CLI Tool](#4-nodejs-weather-cli-tool)
5. [General Setup Instructions](#5-general-setup-instructions)
6. [Notes](#6-notes)

---

## 1. ✅ React Todo App

**Purpose**: Build a task management app with local storage persistence and TailwindCSS styling.

### 🧰 Tech Stack

- React (v18+)
- TailwindCSS
- LocalStorage for data persistence

### 🔧 Features

- Add, delete, edit, and mark tasks as completed (strike-through)
- Filter tasks: **All**, **Completed**, **Pending**
- Responsive design with TailwindCSS
- **Bonus**: Light/Dark theme toggle

### ⚙️ Setup

### Navigate to project folder
cd react-todo-app

### Install dependencies
npm install

### Run the app
npm start
Open in browser: http://localhost:3000

📁 Folder: ./react-todo-app



## 2. ✅ MongoDB eCommerce Schema
**Purpose**: Design and implement a MongoDB schema for an eCommerce application using Mongoose.

### 🧰 Tech Stack
MongoDB

Mongoose

Node.js

### 📦 Features
Schemas for:

User: name, email, password hash, role, cart

Product: name, price, stock, category, vendorId

Order: userId, productIds, status, timestamps

Cart: userId, products (with quantity), total

**Bonus**: API to fetch products by vendorId

⚙️ Setup
cd mongodb-ecommerce
npm install
Set up MongoDB Atlas or local MongoDB

Create .env file with:

env
MONGO_URI=your_mongo_uri

## Run script
node index.js
📁 Folder: ./mongodb-ecommerce



## 3. ✅ Express Notes API
**Purpose**: Develop a secure REST API for managing user notes with JWT authentication.

### 🧰 Tech Stack
Express.js

MongoDB + Mongoose

JWT

bcrypt

### 🔐 Features
User registration & login with JWT auth

CRUD operations for notes (title, content, tags)

Auth middleware to protect routes

Basic validation (e.g. required title)

⚙️ Setup

cd express-notes-api
npm install
Create .env file with:

env

MONGO_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret


### Run the server
npm start
Test API using Postman or ThunderClient

📁 Folder: ./express-notes-api

### 4. ✅ Node.js Weather CLI Tool
Purpose: Create a command-line tool to fetch and display weather data using OpenWeatherMap API.

### 🧰 Tech Stack
Node.js

axios

OpenWeatherMap API

### 🌦️ Features
Accepts city name from command line

Displays temperature, weather condition, wind speed

Bonus: Cache results in JSON file to avoid duplicate API calls

⚙️ Setup

cd weather-cli
npm install
Create .env file with:

env

OPENWEATHER_API_KEY=your_api_key

##  Run the tool
node index.js <city-name>
📁 Folder: ./weather-cli



```bash

5. 🧩 General Setup Instructions
Make sure you have Node.js (LTS) and MongoDB (local or Atlas) installed.

Clone this repository:


git clone https://github.com/Tejaskhope21/Zentosys-assessment.git
cd zentosys-mern-challenges
Follow setup instructions in each challenge folder.

Add .env files for each app that requires it (MONGO_URI, JWT_SECRET, OPENWEATHER_API_KEY).

Use VS Code with extensions:

ESLint

Prettier

TailwindCSS IntelliSense

6. 📝 Notes
All code uses ES6+ syntax and follows clean code practices.

All API-based projects were tested using Postman or ThunderClient.

I'm ready to:

Explain the logic in interviews

Extend features on demand

Debug live if needed

🙋‍♂️ Author
Name: Tejas Khope
GitHub: @Tejaskhope21
Email: tejaskhope600@gmail.com