import { createContext, useReducer, useEffect } from "react";
import { apiUrl, PLAY_AUDIO } from "./constants";
import { PlayReducer } from "../reducers/PlayReducer";
import axios from "axios";

export const PlayAudioContext = createContext()

const PlayAudioContextProvider = ({children}) => {
    const [audioPlay, dispatch] = useReducer(PlayReducer, {
        audio: null,
        title: null,
        singer: null,
        status: false
    })

    //get data audio
    const GetDataAudio = async audioId => {
        try {
            const response = await axios.get(`${apiUrl}audio/getOne/${audioId.audioId}`)
            if (response.data) {
                dispatch({
                    type:PLAY_AUDIO,
                    payload: {
                        audio:response.data.music,
                        title:response.data.title,
                        singer:response.data.singer,
                        status: true
                    }
                })
                return response.data
            }
        } catch ( err ) {
            return err.message
            ? err.message
            : {message: "sever error"}
        }
    }
    useEffect(() => { GetDataAudio(); }, []);

    // play audio context data
    const PlayAudioData = {audioPlay, GetDataAudio}

    return (
        <PlayAudioContext.Provider value = {PlayAudioData}>
            {children}
        </PlayAudioContext.Provider>
    )
}

export default PlayAudioContextProvider; 