# Project Setup

Built with Express and mongoDB 

Requires the following for setup
- MongoDB - Database URI
- Volta (Optional) - for node version Management

  Recommend Setting up Volta for Node version Management. It
  automatically picks up on the version of Node.Js used for Development or you
  could find the same inside package.json file under volta section
  Read More about Volta on [Volta Setup](https://volta.sh)
  
If you are using Linux or WSL on windows setup volta through the following
command

```
  curl '<https://get.volta.sh>" | bash
```

### Follow these instructions to Setup the Project

#### Clone Repository from Github
```
git clone https://github.com/falcon-Z/z0-share-server.git
```
#### Environment Variables
  The following environment variables are required
```
  MONGODB_URI=//Database URI
  PORT=3002 // Recommend changing port from default 3000
```

#### Install Dependencies with command
```
  npm i
```

#### Run the development server with
```
  npm run dev
```

> Be sure to run the server Before running the front end

## Quick API Reference

- Root: `/api/v1`
  - `/auth` - for user authentication
    - `POST /register` - creates a new user account with email, password and name
    - `POST /login` - verifies the user credentials and returns a JWT
  - `/user`
    - `GET /me` - returns information about the current user and issues a JWT
    - `GET /:id` - returns information about the user with the given id
  - `/posts`
    - `POST /` - creates a new post with the current user as the author (requires authorization)
    - `GET /` - returns all posts
    - `GET /:id` - returns the post with the given id
    - `GET /:postId/likes` - returns the number of likes for the post with the given id
    - `POST /:postId/like` - adds a like to the post with the given id (requires authorization)
    - `GET /:postId/comments` - returns all comments for the post with the given id
    - `POST /:postId/comment` - adds a comment to the post with the given id (requires authorization)
