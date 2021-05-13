import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import AddService from './components/Desboard/AddService/AddService';
import OrderLIst from './components/Desboard/OrderList/OrderLIst';
import MakeAdmin from './components/Desboard/MakeAdmin/MakeAdmin';
import ManageService from './components/Desboard/ManageService/ManageService';
import DashBoard from './components/Desboard/DashBoard/DashBoard';
import Order from './components/Order/Order';
import Login from './components/Login/Login';
import NoMatch from './components/NoMatch/NoMatch';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import LogOut from './components/Desboard/LogOut/LogOut';
import BookService from './components/Desboard/BookService/BookService';
import BookingList from './components/Desboard/BookingList/BookingList';
import PostReview from './components/Desboard/PostReview/PostReview';
export const userContext = createContext([]);
function App() {
  const [userInfo, setUserInfo] = useState({});
  console.log(userInfo);
  return (
    <userContext.Provider value={[userInfo, setUserInfo]}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/Home'>
            <Home />
          </Route>
          <PrivateRoute path='/DashBoard'>
            <DashBoard />
          </PrivateRoute>
          <PrivateRoute path='/Order'>
            <Order />
          </PrivateRoute>
          <PrivateRoute path='/AddService'>
            <AddService />
          </PrivateRoute>
          <PrivateRoute path='/OrderList'>
            <OrderLIst />
          </PrivateRoute>
          <PrivateRoute path='/MakeAdmin'>
            <MakeAdmin />
          </PrivateRoute>
          <Route path='/Login'>
            <Login />
          </Route>
          <PrivateRoute path='/ManageService'>
            <ManageService />
          </PrivateRoute>
          <PrivateRoute path='/LogOut'>
            <LogOut />
          </PrivateRoute>
          <PrivateRoute path='/BookService/:id'>
            <BookService />
          </PrivateRoute>
          <PrivateRoute path='/BookService'>
            <BookService />
          </PrivateRoute>
          <PrivateRoute path='/BookingList'>
            <BookingList />
          </PrivateRoute>
          <PrivateRoute path='/PostReview'>
            <PostReview />
          </PrivateRoute>
          <Route path='*'>
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
