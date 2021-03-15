import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Basic from './components/Basic'
import Advanced from './components/Advanced'
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/basic" component={Basic} />
        <Route path="/advanced" component={Advanced} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
