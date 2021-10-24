import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './pages/About.js';
import Home from './pages/Home.js';
import Messages from './pages/Messages.js';
import Products from './pages/Products.js';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" exact component={About}/>
        <Route path="/messages" exact component={Messages}/>
        <Route path="/products" exact component={Products}/>
      </Switch>
    </Router>
  );
}

export default App;
