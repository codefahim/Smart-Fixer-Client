import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import DesBoard from './components/Desboard/Desboard/Desboard';

function App() {
  return (
    <Router>
      <DesBoard />
      <Switch>
        <Route path='/DesBoard'>
          <DesBoard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
