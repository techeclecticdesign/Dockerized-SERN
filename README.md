Dockerized SERN Stack

A simple SERN stack application using Docker. SERN stands for SQL Express React Node. This application is boilerplate to build web applications using the SERN stack using dockerized containers for both production and development environments.

Nginx is used as a reverse proxy to route requests to the appropriate container. When in development mode, nginx forwards connections from the development server to port 80. When in build mode, nginx serves the files in the ./frontend/dist directory.

Before starting make sure you have a terminal interface and that you have Node,
Docker, Docker Compose and NPM installed.

Look over and make any needed changes to the .env file in the projects base
directory.

In the root of the project folder, type:

```
npm install
```

Once dependencies are installed, you are ready to launch the app.

To launch the development server:

```
npm run dev
```

To launch the production server:

```
npm run prod
```

If you have trouble, try removing the containers and rebuilding the project with
npm run dev or npm run prod:

```
docker compose down
npm run dev
```
