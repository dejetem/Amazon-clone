import React,{useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import {auth} from './firebase';
import {useStateValue} from './StateProvider';
import Payment from './Payment';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import Orders from './Orders';

const promise = loadStripe('pk_test_51I36eKLpIW3TSf2eGeP8YUxBEIsIxSSAz6FfqCdHxyOMDU65ZLhRBuJ3r9a5jExBjUD2KG2UmnbOXp7PyHZkFlLN00lrnx0lK4');


function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
      auth.onAuthStateChanged(authUser => {
        console.log('The User Is', authUser);
        if(authUser){
            dispatch({
              type: "SET_USER",
              user: authUser
            })
        }else {
          dispatch({
            type: "SET_USER",
            user: null
          })
        }
      })
  }, [])
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route exact path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/payment">
            <Header />
            <Elements stripe={promise}> 
              <Payment />
            </Elements>
          </Route>
          <Route exact path="/orders">
            <Header />
            <Orders />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
