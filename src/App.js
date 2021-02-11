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

function Nav() {
  const [loggedInStatus, setLoggedInStatus] = useState(false);
  return (
    <nav>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        {!loggedInStatus && (
          <li>
            <Link to="/users">Log In</Link>
          </li>
        )}

        <button onClick={() => setLoggedInStatus(!loggedInStatus)}>
          Log In
        </button>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="content">
        <Header siteName="Colby Taylor" />
        <Nav />
        <Routes />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      <h2>You are home</h2>
      <p>You are logged in</p>
      <p>
        This will be a location to display various cards showcasing latest
        blogs, services, and projects.
      </p>
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

const Header = (props) => {
  return (
    <>
      <Link to="/" className="logo">
        <h1>{props.siteName}</h1>
      </Link>
    </>
  );
};

export default App;
