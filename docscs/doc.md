# Z0-Share Documentation

Welcome to the documentation for Z0-Share, a dynamic social sharing platform built using the MERN stack. This documentation provides an in-depth overview of both the frontend and backend components of the application.

## Project Repositories

**Frontend:** [falcon-Z/z0-share](https://github.com/falcon-Z/z0-share)

**Server:** [falcon-Z/z0-share-server](https://github.com/falcon-Z/z0-share-server)

## Project Challenges and Security Measures

### Challenges Posed by Experimental Features

Z0-Share is an ambitious project that aims to showcase the potential of cutting-edge technologies and experimental features in the field of web development. While these features hold great promise for the future, they also present unique challenges that need to be navigated carefully.

1. **React Server Components (RSC)**: The use of React Server Components introduces a novel way to render UI components on the server. While this can significantly improve performance, it's still an experimental feature with evolving APIs and potential compatibility issues.

2. **Optimistic Updates and State Synchronization**: Optimistic updates, especially when combined with server actions, offer a smoother user experience by updating the UI optimistically while waiting for server confirmation. However, ensuring consistent state synchronization between client and server can be intricate.

3. **Next.js 13 Features**: Next.js 13 comes with exciting features like Route Introspection, Server Actions, and improved caching mechanisms. However, staying up-to-date with these rapidly changing features can sometimes result in codebase adjustments and learning curve challenges.

### Security Measures and Best Practices

#### Backend Security

Z0-Share places a strong emphasis on security and follows industry best practices to protect user data and maintain the integrity of the system.

1. **Cryptography and JWT**: The backend employs strong cryptography for user authentication using JSON Web Tokens (JWT). A secure keypair is generated to sign and encrypt JWT tokens, ensuring secure transmission and verification of user identities.

2. **Password Hashing**: User passwords are securely hashed using industry-standard algorithms like bcrypt before being stored in the database. This ensures that even if the database is compromised, passwords remain protected.

3. **Authorization and Authentication**: The backend implements authorization and authentication mechanisms to control access to various routes and resources. Only authorized users can perform certain actions, enhancing data security.

4. **Input Validation and Sanitization**: All user inputs are validated and sanitized on the server side to prevent potential attacks like SQL injection or cross-site scripting (XSS).

5. **Content Security Policy (CSP)**: The use of CSP headers helps prevent cross-site scripting (XSS) attacks by specifying which sources of content are considered legitimate.

6. **Data Privacy**: Z0-Share adheres to data privacy regulations and best practices. User data is collected and processed transparently, with proper user consent and privacy controls in place.

In conclusion, while the project embraces innovative features that push the boundaries of web development, it does so with a strong commitment to security. Careful consideration is given to experimental features, and robust security measures are implemented to protect user data and ensure a safe user experience.

## Frontend

### Project Overview

Z0-Share Frontend showcases the capabilities and challenges of working with Modern React and React Server Components using Next.js 13. It incorporates a range of best practices and features related to React Server Components.

The app utilizes cutting-edge and experimental features of React, serving as a playground for modern development practices with Next.js.

### Setup

To set up the frontend locally, follow these steps:

1. Clone the Repository:

```bash
git clone https://github.com/falcon-Z/z0-share.git
```

2. Install Dependencies:

```bash
npm install
```

3. Set Up Environment Variables:

Create a `.env.local` file in the root directory and configure the following variables:

```env
API_HOST_URI=http://localhost:3002/api/v1
NEXT_PUBLIC_HOST_URI=http://localhost:3000
NEXT_PUBLIC_UPCARE_PUBLIC_KEY=YOUR_PUBLIC_KEY_HERE
NEXT_PUBLIC_UPCARE_SECRET=YOUR_SECRET_KEY_HERE
```

4. Run the App:

```bash
npm run dev
```

### Project Structure

The frontend components are organized under `src/app/_components`. Each component directory is categorized based on its usage, for instance, the `auth` directory contains components related to authentication, while the `feed` directory contains components for the feed page's UI.

### Project Features

- Seamless form submissions using Server Actions.
- Efficient management of likes with Optimistic Updates.
- Accessible UI experience with keyboard navigation.
- Sharing posts through the Browser Share API.
- File uploads through Uploadcare.
- Intuitive drag-and-drop file uploads.
- Clean and minimal UI design.
- Unique aesthetic with challenging colors and design elements.

## Backend

### Project Overview

Z0-Share Backend is built using Express and MongoDB, forming the core of the social sharing platform. It interacts seamlessly with the frontend to provide a complete user experience.

### Setup

Prepare the backend for local development:

1. Clone the Repository:

```bash
git clone https://github.com/falcon-Z/z0-share-server.git
```

2. Install Volta (Optional):

For node version management, consider setting up Volta:

```bash
curl https://get.volta.sh | bash
```

3. Install Dependencies:

```bash
npm install
```

4. Environment Variables:

Set the following environment variables:

```env
MONGODB_URI=YOUR_DATABASE_URI_HERE
PORT=3002
```

### Generating Keys

Generate secure random keys for JWT token handling:

```bash
npm run generate:keypair
```

### Running the Development Server

Start the backend development server:

```bash
npm run dev
```

Make sure to run the backend server before launching the frontend.

### API Reference

The backend exposes the following API endpoints:

- Root: `/api/v1`
  - `/auth` - User authentication
    - `POST /register` - Create a new user account
    - `POST /login` - Verify user credentials and return a JWT token
  - `/user`
    - `GET /me` - Retrieve information about the current user and issue a JWT token
    - `GET /:id` - Retrieve information about a user by ID
  - `/posts`
    - `POST /` - Create a new post (requires authorization)
    - `GET /` - Retrieve all posts
    - `GET /:id` - Retrieve a post by ID
    - `GET /:postId/likes` - Retrieve the number of likes for a post
    - `POST /:postId/like` - Add a like to a post (requires authorization)
    - `GET /:postId/comments` - Retrieve all comments for a post
    - `POST /:postId/comment` - Add a comment to a post (requires authorization)

---

Feel free to tailor this documentation to your project's specifics and add any additional details that may be relevant for your interview submission. Good luck!
