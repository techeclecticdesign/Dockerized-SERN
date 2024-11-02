import "./App.css";

function App() {
  return (
    <>
      <h1>Dockerized SERN Stack</h1>
      <p>
        A simple SERN stack application using Docker. SERN stands for
        <strong> S</strong>QL <strong>E</strong>xpress <strong>R</strong>eact
        <strong> N</strong>ode. This application is boilerplate to build web
        applications using the SERN stack using dockerized containers for both
        production and development environments.
      </p>
      <p>
        Nginx is used as a reverse proxy to route requests to the appropriate
        container. When in development mode, nginx forwards connections from the
        development server to port 80. When in build mode, nginx serves the
        files in the ./frontend/dist directory.
      </p>
    </>
  );
}

export default App;
