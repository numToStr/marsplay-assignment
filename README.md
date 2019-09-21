# Introduction

This is just a test assigment.

> ## Installation

Install all required dependencies for the project

```bash
npm i
```

> ## Setup

Create a file name `.env` in the root of your project and copy the below content
in that file.

```bash
PORT=3000

MONGO_URI='mongodb+srv://marsplay:JZS1TIzoxzZKiKxM@development-1j6kg.mongodb.net/marsplay?retryWrites=true&w=majority'
```

> ## Running

Below are the available npm script.

#### 1. npm run dev

This will start the server in the development

#### 2. npm run build

This will build the server for production as this project is built with
typescript.

# API Routes

> ## Users Routes

#### 1. GET /users

Will fetch all the user details in the database

#### 2. GET /users/<user_id>

Will fetch the details of a particular user specified in the params.

> ## Posts Routes

#### 1. GET /posts

Will fetch all the post details in the database

#### 2. GET /posts/<post_id>

Will fetch the details of a particular post specified in the params.

> ## Comments Routes

#### 1. GET /comments/<post_id>

Will fetch all the comments of a particular post specified in the params.
