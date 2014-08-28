# Webinar sample: TODO App.

This is the TODO app sample that is used in the Angular Webinar. It has one branch per step we did on the Webinar. The video will be available soon.

The steps shows how to easily move from an open TODO app where everybody sees and edits everybody's tasks to a TODO app per user where only you can see your tasks.

The server that is used for this example can be [browsed here](https://github.com/auth0/in-memory-todo)

## Branches

### Step 0: Working TODO app

We start with a working app. The tasks are shared among all users

### Step 1: Adding authentication with Popup mode & Widget

We add authentication to the TODO app. The tasks are still shared

### Step 2: Showing user information and adding abstract authenticated state

Now, let's show user information in the header. For that, we'll also create an abstract ui-router authenticated state.

### Step 3: Calling the secured API per user

We call the API Securely with the JWT. Each user now has its own tasks

### Step 4: Using Redirect mode & Widget

We change the authentication to do redirect mode instead of popup

### Step 5: Use your custom UI for authentication

Now, we use our custom UI to authenticate the user

## Running the example

In order to run the example you need to just start a server. What we suggest is doing the following:

1. Install node
1. run npm install -g serve
1. run serve in the directory of this project.

Go to [http://localhost:3000](http://localhost:3000) and you'll see the app running :).
