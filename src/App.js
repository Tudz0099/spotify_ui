import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthContextProvider from "./component/context/AuthContext";
import ProtectedRoute from "./component/routing/ProtectedRoute";
import Auth from './view/Auth';
import Home from "./view/Home";

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
		  <ProtectedRoute exact path='/profile/:userId' component={Home}/>
		  <ProtectedRoute exact path='/playlist' component={Home}/>
		  <ProtectedRoute exact path='/search' component={Home}/>
		  <ProtectedRoute exact path='/library' component={Home}/>
		  <ProtectedRoute exact path='/like' component={Home}/>
		  <ProtectedRoute exact path='/add' component={Home}/>
		  				<Route
						  exact
						  path='/profile'
						  render={props => <Home {...props} authRoute='profile' />}
						  />
						  <Route
						  exact
						  path='/playlist'
						  render={props => <Home {...props} authRoute='playlist' />}
						  />
						  <Route
						  exact
						  path='/search'
						  render={props => <Home {...props} authRoute='search' />}
						  />
						  <Route
						  exact
						  path='/library'
						  render={props => <Home {...props} authRoute='library' />}
						  />
						  <Route
						  exact
						  path='/like'
						  render={props => <Home {...props} authRoute='like' />}
						  />
						  <Route
						  exact
						  path='/add'
						  render={props => <Home {...props} authRoute='add' />}
						  />
        </Switch>
      </Router>
    </AuthContextProvider>  
  );
}

export default App;
