import React, {useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router,  Switch, Route} from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import {useStateValue } from "./StateProvider";
import {auth} from "./firebase";

function App() {
  const [{user} ,dispatch] = useStateValue();
  // code runs based on given condition
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser)=>{
      if (authUser){
//log in
dispatch({
  type:"SET_USER",
  user: authUser
})
      }else{
//log out
dispatch({
  type:"SET_USER",
  user: null
})
      }
    })
    return ()=>{
      unsubscribe();
    }
  }, []);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
          <Header/>
          <Checkout/>
          <h1> checkout</h1>
          </Route>
          <Route path="/login">
          <Login />
          </Route>
          <Route path="/">
         <Header/>
         <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
