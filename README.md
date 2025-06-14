
# 🚀 Zentosys MERN Stack Internship Challenges

This repository contains solutions for the **Zentosys MERN Stack Internship Primer** challenges. Each project is implemented in its own folder with full code, tools, and documentation. These demonstrate proficiency in the **MERN stack** (MongoDB, Express.js, React, Node.js) and general backend/frontend concepts.

---

## ✅ Project Overviews

---

### 1. 📝 Todo App – React + TailwindCSS

**Folder:** `todo-app1/todo-app`

#### Features:
- Add, edit, delete, and mark tasks as completed
- Filter tasks: All / Completed / Pending
- Task persistence using `localStorage`
- Styled using TailwindCSS

#### Sample Output:
![{61ACA5C8-CA42-434C-8E15-FE9D29394709}](https://github.com/user-attachments/assets/e62aa07f-11f8-4cda-804d-c1141a64f98d)


#### To Run:

```bash
cd todo-app1/todo-app
npm install
npm start
```

---

### 2. 🛒 Ecommerce Backend – MongoDB + Mongoose

**Folder:** `ecommerce-backend`

#### Features:
- Mongoose schemas for:
  - Users
  - Products
  - Orders
  - Carts
- Data relations and validation
- API to fetch products for a vendor

#### Sample Output:
```json
GET /api/products/vendor/123

[
  {
    "name": "T-Shirt",
    "price": 499,
    "stock": 100,
    "vendorId": "123"
  },
  {
    "name": "Jeans",
    "price": 999,
    "stock": 50,
    "vendorId": "123"
  }
]
```

#### To Run:

```bash
cd ecommerce-backend
npm install
npm run dev
```

> Create a `.env` file:

```
MONGO_URI=your_mongodb_uri
```

---

### 3. 🔐 Notes API – Express.js + JWT

**Folder:** `notes-api`

#### Features:
- Register/Login using JWT
- CRUD APIs for notes
- Auth-protected routes
- Input validation

#### Sample Output:
```bash
POST /register
> 201 Created - User Registered

POST /login
> 200 OK - Token: eyJhbGciOiJIUzI1...

GET /api/notes
[
  {
    "_id": "66a654321",
    "title": "My First Note",
    "content": "Learned JWT Auth today!",
    "tags": ["jwt", "auth"]
  }
]
```

#### To Run:

```bash
cd notes-api
npm install
npm run dev
```

> Create a `.env` file:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

### 4. 🌦 Weather CLI – Node.js

**Folder:** `weather-cli`

#### Features:
- CLI tool to fetch weather using OpenWeatherMap API
- Displays temperature, condition, and wind speed
- Optional caching with JSON file

#### Sample Output:
```bash
$ node index.js "Nagpur"

🌤 Weather in Nagpur:
Temperature: 34°C
Condition: Clear Sky
Wind Speed: 4.5 m/s
```

#### To Run:

```bash
cd weather-cli
node index.js "City Name"
```

> Configuration required:

If using `.env`:
```
API_KEY=your_openweathermap_api_key
```

Or if using a `config.json`, structure it like this:
```json
{
  "API_KEY": "your_openweathermap_api_key"
}
```

---

## 📚 Topics Covered

- **React.js**: Components, Hooks, TailwindCSS, Routing
- **MongoDB & Mongoose**: Schema Design, Relations, CRUD
- **Express.js**: REST APIs, JWT, Middlewares
- **Node.js**: CLI tools, Core modules, Async Handling

---

## 🙋‍♂️ Author

**Tejas Khope**  
[GitHub Profile](https://github.com/Tejaskhope21)

