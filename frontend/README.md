# Fullstack E-commerce Store Project

## Project Overview

This is a fullstack e-commerce application built using the **MERN stack**:

- **Frontend**: React.js  
- **Backend**: Node.js with Express.js  
- **Database**: MongoDB  

The application supports user authentication, profile management, product browsing, purchasing via PayPal, and admin functionalities like product and order management.

---

## Features

### User Features:
- **Authentication**: Register, log in, and log out.
- **Profile Management**: Update personal information.
- **Shopping**: Browse products, add them to the cart, and purchase using PayPal.
- **Order History**: View past orders.

### Admin Features:
- **User Management**: View, edit, and delete users.
- **Product Management**: Add, edit, or delete products.
- **Order Management**: View and manage customer orders.

**Admin Login**:  
- Email: `admin@gmail.com`  
- Password: `123456`

---

## Tech Stack

### Frontend:
- **React**: Core framework for building the user interface.
- **React-Bootstrap**: UI components styled with Bootstrap.
- **React-Router-Dom**: Client-side routing.
- **React-Icons**: Icons for enhanced UI.
- **React-Redux**: State management.
- **Axios**: HTTP requests to interact with the backend.
- **React-Toastify**: Notifications and alerts.
- **@paypal/react-paypal-js**: Integration for PayPal payments.

### Backend:
- **Node.js**: Runtime environment for server-side JavaScript.
- **Express.js**: Framework for building web APIs.
- **Mongoose**: MongoDB object modeling for schema and data interaction.
- **JSON Web Tokens (JWT)**: User authentication and authorization.
- **Bcrypt.js**: Password hashing.
- **Multer**: File uploading.
- **Cookie-Parser**: Parse cookies for session management.
- **Colors**: Console logging with styled messages.

### Dev Tools:
- **Nodemon**: Automatically restarts the server on code changes.
- **Concurrently**: Run multiple commands concurrently (e.g., frontend and backend servers).
- **Dotenv**: Environment variable management.

---

## Installation and Setup

### Prerequisites:
- Node.js and npm installed.
- MongoDB instance running locally or on the cloud.

### Steps:
1. **Clone the repository**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/FinalProjectStore.git
   cd FinalProjectStore
## Installation and Setup

### Prerequisites:
- **Node.js** and **npm** installed.
- **MongoDB** instance running locally or on the cloud.

### Steps:
1. **Clone the repository**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/FinalProjectStore.git
   cd FinalProjectStore
2. **Install dependencies for both frontend and backend:**

npm run build

3. **Set up environment variables:**

   Create a .env file in the backend directory with the following content:

NODE_ENV=development

PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

PAYPAL_CLIENT_ID=your_paypal_client_id

4. **Run the project:**

   npm run dev

5. **Data seeding (optional):**

*To import initial data:*

npm run data:import

*To destroy existing data:*

npm run data:destroy


