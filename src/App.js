import './App.css';
import Home from './Home';
import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom'
import User from './User';

const App = () => {

 

  return (
    <Router>
      <div className="app">
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:username" component={User}/>
        </Switch>
      </div>
    </Router>
  )
}

export default App;

