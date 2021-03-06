import React, {useState} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';


import SignUp from './Components/signup'
import Login from './Components/login'
import Complaint from './Components/complaint'
import AdminPage from './Components/adminpage'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";


export const AppContext = React.createContext(null)
function App() {
  const [logginType, setLoginType] = React.useState('notLoggedIn');
  //  const [token, setToken] = useState();
  //
  //  if(!token) {
  //   return <Login setToken={setToken} />
  // }

  const setLoginState = (state:'admin' |'user' | 'notLoggedIn') => {
    setLoginType(state);

  }


  return (
      <AppContext.Provider value={{setLoginState:setLoginState}}>
      <div className="container">
      {
        logginType === 'notLoggedIn' ?

          <Switch>
            <Route exact path='/'><Login /></Route>
            <Route path='/login'><Login/></Route>
            <Route path='/signup'><SignUp /></Route>
            //<Redirect to={"/Login"}/>
          </Switch>
          : logginType === 'admin'?
          <Switch>
            <Route path='/adminPage'><AdminPage /></Route>
            <Route path='/complaint'><Complaint /></Route>
            <Redirect to={"/adminPage"}/>
          </Switch>
          :
          <Switch>
            <Route path='/complaint'><Complaint /></Route>
            <Redirect to={"/complaint"}/>
          </Switch>
        }
      </div>
      </AppContext.Provider>
    );
}


export default App;
