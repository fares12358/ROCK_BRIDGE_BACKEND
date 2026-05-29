# Rock Bridge Backend

A professional Node.js and Express backend for the Rock Bridge project, providing a robust API for managing services, quotes, media, and user authentication.

## 🌐 API Documentation

**View live API documentation**: [https://rock-bridge-backend.vercel.app/api/docs](https://rock-bridge-backend.vercel.app/api/docs)

## 🚀 Tech Stack
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens) with Access and Refresh tokens
- **File Handling**: Multer for media and service image uploads
- **Communications**: Nodemailer for email notifications and password resets
- **Security**: bcrypt for password hashing

---

## 📁 Project Structure
```text
src/
├── config/         # Database connection and configuration
├── controllers/    # Business logic for each route
├── middleware/     # Auth guards and upload handlers (Multer)
├── models/         # Mongoose schemas (User, Service, QuoteRequest, Media)
├── routes/         # Route definitions for the API
└── utils/          # Helper functions (Email templates, Token management)
```

---

## 🛠️ API Documentation

### 🔐 Authentication (`/api/auth`)
| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| `POST` | `/login` | Authenticate user and receive tokens | ❌ |
| `POST` | `/relogin` | Refresh access token using refresh token | ❌ (Refresh Token) |
| `POST` | `/forgot` | Request a password reset (sends email) | ❌ |
| `POST` | `/reset` | Reset password using a verification token | ❌ |
| `GET` | `/me` | Get current authenticated user profile | ✅ |

### 🖼️ Media Management (`/api/media`)
| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| `GET` | `/` | Retrieve all uploaded media files | ❌ |
| `POST` | `/` | Upload a new media file (Image/Video) | ✅ |
| `DELETE` | `/:id` | Delete a specific media file | ✅ |

### 📄 Quote Requests (`/api/quotes`)
| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| `GET` | `/` | Retrieve all quote requests | ✅ |
| `POST` | `/` | Submit a new quote request | ✅ |
| `DELETE` | `/:id` | Delete a specific quote request | ✅ |

### 🛠️ Services Management (`/api/services`)
| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| `GET` | `/` | Retrieve all available services | ❌ |
| `POST` | `/` | Create a new service with an image | ✅ |
| `DELETE` | `/:id` | Delete a specific service | ✅ |

---

## ⚙️ Installation & Setup

1. **Clone the repository**
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Configure Environment Variables**:
   Create a `.env` file in the root directory:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   REFRESH_TOKEN_SECRET=your_refresh_secret
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_app_password
   FRONT_BASE_URL=http://localhost:3000
   MEDIA_FILE_SIZE_LIMIT=104857600 # 100MB
   FILE_SIZE_LIMIT=20971520 # 20MB
   ```
4. **Run the server**:
   ```bash
   npm run dev
   ```

---

## 🛡️ Security & Middleware
- **`requireAuth`**: A middleware that validates the JWT in the request headers to ensure the user is authenticated before accessing protected routes.
- **Multer**: Handles multipart/form-data for file uploads with specific size limits and file type filters.