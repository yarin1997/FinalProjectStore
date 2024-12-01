Fullstack E-commerce Store Project
Project Overview
This is a fullstack e-commerce application built using the MERN stack:

Frontend: React.js
Backend: Node.js with Express.js
Database: MongoDB
The application supports user authentication, profile management, product browsing, purchasing via PayPal, and admin functionalities like product and order management.

Features
User Features:
Authentication: Register, log in, and log out.
Profile Management: Update personal information.
Shopping: Browse products, add them to the cart, and purchase using PayPal.
Order History: View past orders.
Admin Features:
User Management: View, edit, and delete users.
Product Management: Add, edit, or delete products.
Order Management: View and manage customer orders.
Admin Login:
Email: admin@gmail.com
Password: 123456
Tech Stack
Frontend:
React: Core framework for building the user interface.
React-Bootstrap: UI components styled with Bootstrap.
React-Router-Dom: Client-side routing.
React-Icons: Icons for enhanced UI.
React-Redux: State management.
Axios: HTTP requests to interact with the backend.
React-Toastify: Notifications and alerts.
@paypal/react-paypal-js: Integration for PayPal payments.
Backend:
Node.js: Runtime environment for server-side JavaScript.
Express.js: Framework for building web APIs.
Mongoose: MongoDB object modeling for schema and data interaction.
JSON Web Tokens (JWT): User authentication and authorization.
Bcrypt.js: Password hashing.
Multer: File uploading.
Cookie-Parser: Parse cookies for session management.
Colors: Console logging with styled messages.
Dev Tools:
Nodemon: Automatically restarts the server on code changes.
Concurrently: Run multiple commands concurrently (e.g., frontend and backend servers).
Dotenv: Environment variable management.
Installation and Setup
Prerequisites:
Node.js and npm installed.
MongoDB instance running locally or on the cloud.
Steps:
Clone the repository:

bash
Copy code
git clone https://github.com/YOUR_USERNAME/FinalProjectStore.git
cd FinalProjectStore
Install dependencies for both frontend and backend:

bash
Copy code
npm run build
Set up environment variables:
Create a .env file in the backend directory and configure the following:

makefile
Copy code
NODE_ENV=development
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PAYPAL_CLIENT_ID=your_paypal_client_id
Run the project:

Start both frontend and backend:
bash
Copy code
npm run dev
Data seeding (optional):

Import initial data:
bash
Copy code
npm run data:import
Destroy data:
bash
Copy code
npm run data:destroy
Scripts
Command	Description
npm run dev	Run both frontend and backend in development mode.
npm run client - Run the React frontend only.
npm run server - Run the Node.js backend only.
npm run build  - Build the frontend for production.
npm run data:import	Import initial data to the database.
npm run data:destroy	Destroy all data from the database.
API Endpoints
User Endpoints:
POST /api/users/login: Log in a user.
POST /api/users/register: Register a new user.
GET /api/users/profile: Get user profile.
PUT /api/users/profile: Update user profile.
Product Endpoints:
GET /api/products: Get all products.
POST /api/products: Add a new product (Admin only).
PUT /api/products/:id: Update a product (Admin only).
DELETE /api/products/:id: Delete a product (Admin only).
Order Endpoints:
POST /api/orders: Create a new order.
GET /api/orders: Get all orders (Admin only).
PUT /api/orders/:id/deliver: Mark an order as delivered (Admin only).
Deployment
You can deploy this project on platforms like Heroku (for the backend) and Netlify or Vercel (for the frontend). Ensure environment variables are correctly set on the hosting platform.

License
This project is licensed under the ISC License.

Enjoy shopping and managing your e-commerce platform! 😊
