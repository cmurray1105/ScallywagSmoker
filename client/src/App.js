import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import Orders from './components/Orders';
export default function App() {
  return (
    <Router>


        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/orders">Orders</Link>
            </li>
          </ul>
        </nav>
      </div>
    </Router>
  );
}

// function Home() {
//   return <h2>Home</h2>;
// }



// function Users() {
//   return <h2>Users</h2>;
// }

