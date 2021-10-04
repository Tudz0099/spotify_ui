import { createContext, useReducer, useEffect } from "react";
import { authReducer } from "../reducers/AuthReducer";
import {apiUrl, LOCAL_STORAGE_TOKEN_NAME} from "./constants"
import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";

export const AuthContext = createContext()

const AuthContextProvider = ({children}) => {
    const [authState, dispatch] = useReducer(authReducer, {
        authLoading: true,
        isAuthenticated: false,
        user: null
    })

    // Authenticate user
    const loadUser = async () => {
        if (localStorage[LOCAL_STORAGE_TOKEN_NAME]) {
            setAuthToken(localStorage[LOCAL_STORAGE_TOKEN_NAME])
        } 
        if (!localStorage[LOCAL_STORAGE_TOKEN_NAME]) {
            dispatch({
                type: 'SET_AUTH', 
                payload:{isAuthenticated:false, user: null}
            })
        }

        try {
            const response = await axios.get(`${apiUrl}auth`)
            if (response.data.user) {
                dispatch({
                    type: 'SET_AUTH',
                    payload: {isAuthenticated: true, user: response.data.user}
                })
            }
            else{
                dispatch({
                    type: 'SET_AUTH',
                    payload: {isAuthenticated: false, user:null}
                })
            }
        } catch (error) {
            localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME)
            setAuthToken(null)
            dispatch({
                type: 'SET_AUTH', 
                payload:{isAuthenticated:false, user: null}
            })
        }
    }

    useEffect(() => { loadUser(); }, []);

    // login
    const loginUser = async SignIn => {
        try {
            const response = await axios.post(`${apiUrl}auth/login`, SignIn)
            if (response.data.success){
                localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, response.data.PRIVATE_TOKEN)

                dispatch({
                    type: 'SET_AUTH',
                    payload: {isAuthenticated: true, user: response.data.user}
                })

                return response.data
            }   
        } catch (error) {
            if(error.response.data) return error.response.data
            else return {message: error.message}
        }
    }

    // register
    const RegisterUser = async Register => {
        try {
            const response = await axios.post(`${apiUrl}auth/register`, Register)
            if(response.data.success){
                localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, response.data.PRIVATE_TOKEN)
                
                dispatch({
                    type: 'SET_AUTH',
                    payload: {isAuthenticated: true, user: response.data.user}
                })
                
                return response.data
            }
        } catch (error) {
            return ({
                message: error.message
            })
        }
    }

    //logout

    const logoutUser = () => {
        localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME)
        dispatch({
            type: 'SET_AUTH', 
            payload:{isAuthenticated:false, user: null}
        })
    }

    //update profile

    const UpdateProfile = async UpdateProfile => {
        try {
            const response = await axios.post(`${apiUrl}auth/update/${UpdateProfile.userId.userId}`, UpdateProfile)
            if(response.data) {
                dispatch({
                    type: 'SET_AUTH',
                    payload: {isAuthenticated: true, user: response.data.user}
                })
                return response.data
            }
        } catch(error){
            return({
                message: error.message
            })
        }
    }

    const authContextData = {loginUser, RegisterUser, logoutUser, authState, UpdateProfile}

    return (
        <AuthContext.Provider value={authContextData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider