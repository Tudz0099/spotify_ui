import React, {useContext} from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
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

export default function ProtectedRoute({component: Component, ...rest}) {
    const classes = useStyles();

    const {
        authState: { authLoading, isAuthenticated }
    } = useContext(AuthContext)

    if (authLoading) {
        return (
            <div className={classes.root}>
                <CircularProgress />
            </div>
        )
    }
    return (
        <Route 
            {...rest} 
            render={props => isAuthenticated ? (
                <>
                    <Component {...rest} {...props} />
                </>
            ) : (
                <Redirect to='/login' />
            )
        } 
      />
    )
}
