import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState } from "react";

function Routes() {
  return (
    <>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/Register">
          <Register />
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

function App() {
  const [loggedInStatus, setLoggedInStatus] = useState(false);

  return (
    <Router>
      <div className="content">
        <nav>
          <Header />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Routes />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      <h2>Welcome</h2>
      <h1>Login</h1>
      <Link to="/login">Login Link</Link>
      <h1>Register</h1>
      <Link to="/register">Register Link</Link>
    </>
  );
}

function About() {
  return (
    <div className="home">
      <h2>App Home</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem eos
        beatae exercitationem omnis ipsa earum optio eum perferendis veniam
        sunt? Ut dolorum commodi reiciendis modi, laborum officia incidunt
        tenetur maiores?
      </p>
    </div>
  );
}

function Users() {
  return <h2>Users</h2>;
}

const Login = () => {
  return (
    <>
      <h1>Login</h1>
    </>
  );
};

const Register = () => {
  return (
    <>
      <h1>Register</h1>
    </>
  );
};

const Header = () => {
  return (
    <>
      <h1>Header</h1>
    </>
  );
};

export default App;
