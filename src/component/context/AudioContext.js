import { createContext, useReducer } from "react";
import { AudioReducer } from '../reducers/AudioReducer';
import { apiUrl, ADD_AUDIO, AUDIO_LOADED_SUCCESS, AUDIO_LOADED_FAIL } from "./constants";
import axios from "axios";

export const AudioContext = createContext()

const AudioContextProvider = ({children}) => {
    //state
    const [audioState, dispatch] = useReducer(AudioReducer, {
        audios: [],
        audiosLoading: true
    })

    //get all audio
    const getAllAudio = async() => {
        try {
            const response = await axios.get(`${apiUrl}audio/getAll`)
            if (response.data.audios) {
                dispatch({
                    type:AUDIO_LOADED_SUCCESS,
                    payload: response.data.audios
                })
                return response.data
            }
        } catch (err) {
            dispatch({type: AUDIO_LOADED_FAIL})
            return err.message
        }
    }

    // get one audio
    const GetOneAudio = async audioId => {
        try {
            const response = await axios.get(`${apiUrl}audio/getOne/${audioId.audioId}`)
            if (response.data) {
                dispatch({
                    type:AUDIO_LOADED_SUCCESS,
                    payload: response.data.audio
                })
                return response.data
            }
        } catch ( err ) {
            return err.message
            ? err.message
            : {message: "sever error"}
        }
    }

    // add audio
    const AddAudio = async (newAudio, userId) => {
        try {
            const response = await axios.post(`${apiUrl}audio/post/${userId.userId}`, newAudio)
            if (response.data.audio) {
                dispatch({type: ADD_AUDIO, payload: response.data.audio})
                return response.data
            }
        } catch (err) {
            return err.message
            ? err.message
            : {success: false, message:"sever error"}
        }
    }

    //audio context data
    const AudioContextData = {audioState, getAllAudio, AddAudio, GetOneAudio}

    return (
        <AudioContext.Provider value={AudioContextData}>
            {children}
        </AudioContext.Provider>
    )
}

export default AudioContextProvider;