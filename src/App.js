import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthContextProvider from "./component/context/AuthContext";
import ProtectedRoute from "./component/routing/ProtectedRoute";
import Auth from './component/view/Auth'
import Home from "./component/view/Home";

import './App.css'


 const App = () => {
  return (
    <AuthContextProvider>
      <Router>
        <Switch>
						<Route
							exact
							path='/login'
							render={props => <Auth {...props} authRoute='login' />}
						/>
            	<Route
							exact
							path='/'
							render={props => <Auth {...props} authRoute='login' />}
						/>
						<Route
							exact
							path='/register'
							render={props => <Auth {...props} authRoute='register' />}
						/>
          <ProtectedRoute exact path='/home' component={Home}/>
        </Switch>
      </Router>
    </AuthContextProvider>  
  );
}

export default App;
