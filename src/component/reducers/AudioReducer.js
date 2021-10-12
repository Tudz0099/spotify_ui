import { ADD_AUDIO, AUDIO_LOADED_SUCCESS, AUDIO_LOADED_FAIL } from "../context/constants"

export const AudioReducer  = (state, action) => {
    const {type, payload} = action
    switch(type) {
        case AUDIO_LOADED_SUCCESS:
            return {
                ...state,
                audios: payload,
                audiosLoading: false
            }
            
        case AUDIO_LOADED_FAIL:
            return {
                ...state,
                audios: [],
                audiosLoading: false
            }

        case ADD_AUDIO:
            return {
                ...state,
                audios: [...state.audios, payload]
            }

        default: 
            return state
    }
}