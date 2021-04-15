import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import DesBoard from './components/Desboard/Desboard/Desboard';
import Home from './components/Home/Home/Home';
import AddService from './components/Desboard/AddService/AddService';
import OrderLIst from './components/Desboard/OrderList/OrderLIst';
import MakeAdmin from './components/Desboard/MakeAdmin/MakeAdmin';
import ManageService from './components/Desboard/ManageService/ManageService';
import DashBoard from './components/Desboard/DashBoard/DashBoard';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/Home'>
          <Home />
        </Route>
        <Route path='/DashBoard'>
          <DashBoard   />
        </Route>
        <Route path='/AddService'>
          <AddService />
        </Route>
        <Route path='/OrderList'>
          <OrderLIst />
        </Route>
        <Route path='/MakeAdmin'>
          <MakeAdmin />
        </Route>
        <Route path='/ManageService'>
          <ManageService />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
