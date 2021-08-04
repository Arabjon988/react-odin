import './App.css';
import {
  BrowserRouter as Router, Route, Redirect, Switch
} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './container/Home';
import About from './container/About';
import Contact from './container/Contact';
import Services from './container/Services';
const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="pages">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" >
            <About />
          </Route>
          <Route path="/services" >
            <Services />
          </Route>
          <Route path="/contact" >
            <Contact />
          </Route>

          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App;

