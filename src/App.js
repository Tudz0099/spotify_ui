import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthContextProvider from "./component/context/AuthContext";
import ProtectedRoute from "./component/routing/ProtectedRoute";
import Auth from './view/Auth';
import Home from "./view/Home";

import './App.css'
import AudioContextProvider from "./component/context/AudioContext";
import PlayAudioContextProvider, { PlayAudioContext } from "./component/context/PlayContext";


 const App = () => {
  return (
    <AuthContextProvider>
		<AudioContextProvider>
			<PlayAudioContextProvider>
				<Router>
					<Switch>
								<ProtectedRoute exact path='/home' component={Home}/>
								<ProtectedRoute exact path='/profile/:userId' component={Home}/>
								<ProtectedRoute exact path='/playlist/:audioId' component={Home}/>
								<ProtectedRoute exact path='/search' component={Home}/>
								<ProtectedRoute exact path='/library' component={Home}/>
								<ProtectedRoute exact path='/like' component={Home}/>
								<ProtectedRoute exact path='/add/:userId' component={Home}/>
								<ProtectedRoute exact path='/yourSong' component={Home}/>
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
								<Route
								exact
								path='/profile'
								render={props => <Home {...props} authRoute='profile' />}
								/>
								<Route
								exact
								path='/playlist/:audioId'
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
								<Route
								exact
								path='/yourSong'
								render={props => <Home {...props} authRoute='yourSong' />}
								/>
				</Switch>
			</Router>
		</PlayAudioContextProvider>
	  </AudioContextProvider>    
    </AuthContextProvider>  
  );
}

export default App;
