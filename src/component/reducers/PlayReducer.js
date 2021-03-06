import { PLAY_AUDIO } from "../context/constants"

export const PlayReducer = (state, action) => {
    const {type, 
        payload: {audio, title, singer, status}
    } = action
    switch(type) {
        case PLAY_AUDIO:
            return {
                ...state,
                audio,
                title,
                singer,
                status
            }

        default:
            return state
    }
}