# 🍽️ Foodie Adda - Zomato Clone (MERN Stack)

![MERN Stack](https://img.shields.io/badge/MERN-Full%20Stack-green)
![React](https://img.shields.io/badge/Frontend-React.js-blue)
![Node](https://img.shields.io/badge/Backend-Node.js-green)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen)

---

# 📌 Project Overview

**Foodie Adda** is a full-stack food ordering and restaurant reservation web application inspired by Zomato.

The application allows users to:

- Explore restaurants
- View food menus
- Add food items to cart
- Manage cart items
- Place food orders
- Book restaurant tables
- View booking history
- Cancel table bookings
- Manage restaurant table availability

The project is developed using the **MERN Stack**:

- **MongoDB** - Database
- **Express.js** - Backend API Framework
- **React.js** - Frontend Library
- **Node.js** - Backend Runtime Environment

---

# 🚀 Features

## 👤 User Features

### Authentication

- User Registration
- User Login
- Secure password encryption
- JWT based authentication

### Restaurant Features

- Browse restaurants
- View restaurant details
- Display restaurant ratings
- View available tables
- View booked tables count

### Food Ordering

- Browse food menu
- Add food items to cart
- Remove items from cart
- Manage cart quantity
- Place orders

### Table Reservation

- Book restaurant tables
- Select booking time
- View booking history
- Cancel bookings
- Automatically update available tables after cancellation

### Other Features

- Restaurant reviews section
- Responsive UI design
- Protected routes
- Persistent cart using Local Storage

---

# 🛠️ Technologies Used

## Frontend Technologies

| Technology | Purpose |
|------------|---------|
| React.js | Building interactive user interface |
| React Router | Client-side navigation |
| Bootstrap | Responsive UI design |
| CSS | Custom styling |
| Local Storage | Store cart and user session data |

---

## Backend Technologies

| Technology | Purpose |
|------------|---------|
| Node.js | Server-side JavaScript runtime |
| Express.js | Creating REST APIs |
| MongoDB | Database management |
| Mongoose | MongoDB object modeling |
| JWT | User authentication |
| bcrypt | Password encryption |
| dotenv | Environment variable management |
| CORS | Communication between frontend and backend |

---

# 📂 Project Structure

```
Zomato
│
├── foodie-frontend
│   │
│   ├── public
│   │
│   ├── src
│   │   │
│   │   ├── components
│   │   │   ├── Navbar.js
│   │   │   ├── RestaurantList.js
│   │   │   ├── Cart.js
│   │   │   ├── MyBookings.js
│   │   │   ├── Login.js
│   │   │   └── Signup.js
│   │   │
│   │   ├── App.js
│   │   └── styles.css
│   │
│   └── package.json
│
│
├── foodie-backend
│   │
│   ├── models
│   │
│   ├── routes
│   │
│   ├── server.js
│   │
│   ├── package.json
│   │
│   └── .env
│
└── README.md
```

---

# ⚙️ How To Run The Project

## Step 1: Clone Repository

Clone the project from GitHub:

```bash
git clone https://github.com/Komal-Balsane/zomato_clone.git
```

Navigate into project folder:

```bash
cd Zomato
```

---

# 🔥 Backend Setup

## Step 2: Navigate To Backend Folder

```bash
cd foodie-backend
```

Install backend dependencies:

```bash
npm install
```

---

## Step 3: Configure Environment Variables

Create a file named:

```
.env
```

inside the `foodie-backend` folder.

Add:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

Example:

```env
PORT=5000

MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/foodie

JWT_SECRET=mysecretkey
```

---

## Step 4: Start Backend Server

Run:

```bash
npm start
```

or:

```bash
node server.js
```

Successful output:

```
Server running on port 5000

MongoDB Connected Successfully
```

---

# ⚛️ Frontend Setup

## Step 5: Open New Terminal

Navigate to frontend:

```bash
cd foodie-frontend
```

Install dependencies:

```bash
npm install
```

---

## Step 6: Start React Application

Run:

```bash
npm start
```

Application will open:

```
http://localhost:3000
```

---

# 🔄 Application Workflow

## Authentication Workflow

```
User Signup
      |
      |
Password encrypted using bcrypt
      |
      |
Stored in MongoDB
      |
      |
User Login
      |
      |
JWT Token Generated
      |
      |
Access Application
```

---

# 🍔 Food Ordering Workflow

```
Select Restaurant

        |

View Food Menu

        |

Add Food Items To Cart

        |

Manage Cart

        |

Place Order
```

---

# 🪑 Table Booking Workflow

```
Select Restaurant

        |

Choose Booking Time

        |

Available Table Count Decreases

        |

Booking Added To My Bookings

```

---

# ❌ Booking Cancellation Workflow

```
Cancel Booking

        |

Booking Removed

        |

Available Tables Increased

        |

Restaurant Status Updated
```

---

# 🧩 Challenges Faced And Solutions

---

## 1. Restaurant Table Availability Management

### Problem:

Initially restaurant data was managed inside the `RestaurantList.js` component.

Because of local state management, when a user cancelled a booking, available tables could not be updated.

### Solution:

Moved restaurant state management to `App.js`.

Implemented:

- React State Management
- Props Passing
- Callback Functions

Flow:

```
App.js

   |

Restaurant Data

   |

RestaurantList Component

   |

Booking Update
```

---

# 2. Maintaining Cart Data After Refresh

### Problem:

Cart items disappeared after refreshing the browser.

### Solution:

Implemented browser Local Storage.

Saving data:

```javascript
localStorage.setItem()
```

Retrieving data:

```javascript
localStorage.getItem()
```

This keeps cart data available after page reload.

---

# 3. Secure User Authentication

### Problem:

Users required secure login and registration.

### Solution:

Implemented:

- bcrypt password hashing
- JWT authentication
- Protected routes

Authentication flow:

```
User Login

      |

Password Verification

      |

JWT Token Created

      |

Access Protected Pages
```

---

# 4. Frontend And Backend Communication

### Problem:

React application cannot directly communicate with database.

### Solution:

Created REST APIs using Express.js.

Communication flow:

```
React Frontend

        |

        API Request

        |

Express Backend

        |

MongoDB Database
```

---

# 5. GitHub Upload Issues

### Problem:

`node_modules` files were getting tracked by Git.

This increased repository size and created unnecessary changes.

### Solution:

Added `.gitignore`:

```
node_modules/
.env
build/
dist/
```

Removed unnecessary files from Git tracking before pushing.

---

# 6. Nested Git Repository Problem

### Problem:

Frontend folder contained another `.git` repository.

This caused problems while pushing the complete project.

### Solution:

Removed the nested Git repository:

```
foodie-frontend/.git
```

Maintained only one Git repository:

```
Zomato/.git
```

---

# 📈 Future Enhancements

Future improvements planned:

- Online payment integration using Razorpay/Stripe
- Real-time order tracking
- Restaurant owner dashboard
- Advanced food search and filtering
- Google Maps restaurant location
- AI based food recommendation system
- Email/SMS booking confirmation
- Admin dashboard

---

# 👩‍💻 Author

**Komal Bhagwan Balsane**

BE Information Technology Student

---

# ⭐ Conclusion

Foodie Adda demonstrates the development of a complete MERN stack application with:

- User authentication
- REST API development
- Database integration
- Food ordering system
- Cart management
- Restaurant table reservation

The project provides practical experience in frontend development, backend development, database management, authentication, and real-world application design.