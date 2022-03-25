import './App.css';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>My Articles</h1>
          <NavLink exact to="/">Home</NavLink>
          <NavLink exact to="/about">About</NavLink>
          <NavLink exact to="/contact">Contact</NavLink>
        </nav>

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/contact'>
            <Contact />
          </Route>
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App
