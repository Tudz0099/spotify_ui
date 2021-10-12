import { PLAY_AUDIO } from "../context/constants"

export const PlayReducer = (state, action) => {
    const {type, 
        payload: {audio, status}
    } = action
    switch(type) {
        case PLAY_AUDIO:
            return {
                ...state,
                audio,
                status,
            }

        default:
            return state
    }
}