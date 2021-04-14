import { Redirect, Route, Switch } from "react-router";
import { NavLink } from "react-router-dom";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import "./App.css";
import Posts from "./Posts/Posts";
import Articles from "./components/Articles/Articles";
import Photos from "./components/Photos/Photos";

function App() {
  const activeLinkStyle = {
    fontWeight: "bold",
  };
  return (
    <div className="App">
      <ul>
        <li>
          <NavLink
            activeStyle={activeLinkStyle}
            activeClassName="activeLink"
            to="/"
            exact
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            activeStyle={activeLinkStyle}
            activeClassName="activeLink"
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            activeStyle={activeLinkStyle}
            activeClassName="activeLink"
            to="/contacts"
          >
            Contacts
          </NavLink>
        </li>
        <li>
          <NavLink
            activeStyle={activeLinkStyle}
            activeClassName="activeLink"
            to="/posts"
          >
            Posts
          </NavLink>
        </li>
        <li>
          <NavLink
            activeStyle={activeLinkStyle}
            activeClassName="activeLink"
            to="/articles"
          >
            Articles
          </NavLink>
        </li>
        <li>
          <NavLink
            activeStyle={activeLinkStyle}
            activeClassName="activeLink"
            to="/photos"
          >
            Photos
          </NavLink>
        </li>

      </ul>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/posts" component={Posts} />
        <Route exact path="/" component={Home} />
        <Route path="/articles" component={Articles} />
        <Route path="/photos" component={Photos} />
        <Route path="/" component={NotFound} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
