# Z0-Share Backend

This repository contains the backend code for Z0-Share, a social sharing platform built using the MERN stack.

For the frontend source code, you can find it at [falcon-Z/z0-share](https://github.com/falcon-Z/z0-share).

## Project Overview

Z0-Share Backend is developed using Express and MongoDB, forming the foundation of the social sharing platform. This backend seamlessly interacts with the frontend to deliver a complete user experience.

### Setup

Before you dive into the code, make sure you have the following prerequisites set up:

- MongoDB: Make sure you have a valid MongoDB database URI to connect to.
- (Optional) Volta: I recommend using Volta for Node version management. It automatically adapts to the Node.js version used for development. You can find more information about Volta's setup [here](https://volta.sh).

If you're using Linux or WSL on Windows, you can install Volta using the provided command:

```bash
curl https://get.volta.sh | bash
```

Now, let's get started with the project setup:

### Clone the Repository

```bash
git clone https://github.com/falcon-Z/z0-share-server.git
```

### Environment Variables

To run the backend server, set the following environment variables:

```env
MONGODB_URI=YOUR_DATABASE_URI_HERE
PORT=3002  # I recommend changing the port from the default 3000
```

### Generate Keys

Generate secure random keys required for JWT token handling:

```bash
npm run generate:keypair
```

These keys will be used for signing and encrypting JWT tokens necessary for authentication.

### Install Dependencies

Install the required project dependencies using:

```bash
npm install
```

### Run the Development Server

Start the development server with:

```bash
npm run dev
```

Make sure to run the backend server before launching the frontend.

## Quick API Reference

- Root: `/api/v1`
  - `/auth` - User authentication
    - `POST /register` - Create a new user account with email, password, and name
    - `POST /login` - Verify user credentials and return a JWT token
  - `/user`
    - `GET /me` - Retrieve information about the current user and issue a JWT token
    - `GET /:id` - Retrieve information about the user with the given ID
  - `/posts`
    - `POST /` - Create a new post with the current user as the author (requires authorization)
    - `GET /` - Retrieve all posts
    - `GET /:id` - Retrieve the post with the given ID
    - `GET /:postId/likes` - Retrieve the number of likes for the post with the given ID
    - `POST /:postId/like` - Add a like to the post with the given ID (requires authorization)
    - `GET /:postId/comments` - Retrieve all comments for the post with the given ID
    - `POST /:postId/comment` - Add a comment to the post with the given ID (requires authorization)
