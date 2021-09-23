import React,{ useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Register from '../auth/Register';
import SignIn from '../auth/SignIn';
import { makeStyles } from '@material-ui/core/styles';
import {CircularProgress} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  }));

export default function Auth({authRoute}) {
    const classes = useStyles();

    const {
		authState: { authLoading, isAuthenticated }
	} = useContext(AuthContext)

	let body

    if (authLoading)
		body = (
			<div className={classes.root}>
          <CircularProgress />
      </div>
		)
	else if (isAuthenticated) return <Redirect to='/home' />
	else
		body = (
			<>
				{authRoute === 'login' && <SignIn/>}
				{authRoute === 'register' && <Register/>}
			</>
		)
    return (
        <div>
            {body}
        </div>
    )
}
