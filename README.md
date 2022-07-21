# Admin Panel REST API

API for companies and its employees

## Table of Contents

- [Prerequisites](#prerequisites)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Authentication](#authentication)

#

## Prerequisites

- <img src="./readme/assets/node.svg" height="17" style="position: relative; top: 2px"/> _Node JS @12.X and up_
- <img src="./readme/assets/npm.png" height="16" style="position: relative; top: 4px"> _npm @6 and up_
- <img src="./readme/assets/mongodb.png" height="17" style="position: relative; top: 4px"> _Mongodb database locally or on atlas_

#

## Tech Stack

- <img src="readme/assets/express.png" height="20" style="position: relative; top: 4px" /> [express @4.18.1](https://expressjs.com/) - Web framework for Node.js
- <img src="readme/assets/mongoose.png" height="20" style="position: relative; top: 4px; margin-right: 5px" /> [mongoose @6.4.6](https://mongoosejs.com/) - Mongodb object modeling for Node.js
- <img src="readme/assets/dotenv.png" height="20" style="position: relative; top: 4px; margin-right: 5px" /> [dotenv @16.0.1](https://www.npmjs.com/package/dotenv) - Environment variable management tool
- <img src="readme/assets/jwt.svg" height="20" style="position: relative; top: 4px; margin-right: 5px" /> [jsonwebtoken @8.5.1](https://jwt.io/) - JSON Web Token
- <img src="readme/assets/swagger.png" height="20" style="position: relative; top: 4px; margin-right: 5px" /> [swagger-ui-express @4.5.0](https://swagger.io/) - API description tool
- <img src="readme/assets/joi.png" height="20" style="position: relative; top: 4px; margin-right: 5px" /> [joi @17.6.0](https://joi.dev/) - Data validator for JavaScript

#

## Getting started

**To get the Node server running locally you need to follow the steps below:**

1\. First of all you need to clone repository from github:

```sh
git clone https://github.com/RedberryInternship/company-employees-api-otomamatsashvili.git
```

2\. Next step requires installing all the dependencies:

```sh
npm install
```

or

```sh
yarn install
```

3\. Then copy env example file. You should fill environment variables in .env with your needs

```sh
cp .env.example .env
```

4\. After that you can start the local server:

```sh
npm start
```

or

```
yarn run start
```

#

## Project Structure

```bash
├─── src/
│   ├─── bin/          # scripts for command line
│   ├─── config/       # configuration files
│   ├─── controllers/  # controller functions
│   ├─── middlewares/  # middleware functions
│   ├─── models/       # mongoose collection models
│   ├─── routes/       # route definitions for api
│   ├─── schemas/      # joi validation schemas
│   ├─── server.js     # entry point to application
├─── readme/         # readme assets
├─── .env.example    # environment variables example
├─── .eslintrc.json  # eslint config file
├─── .prettierrc.js  # prettier config file
├─── .gitignore      # ignored files for git
├─── package.json    # dependency management
```

#

## Deployment

**API is deployed on digitalocean linux server with `ngnix`. You can view its detailed documentation [here](https://employee-companies-api.otar.redberryinternship.ge/api-docs/)**

#

## Authentication

Requests are authenticated using the Authorization header with a valid JWT. JWT token is given to a user after successful login. Users can only be added from production server by running command: `npm run create:user` and providing new user data.
