export const apiUrl = 
    process.env.NODE_ENV !== 'production' 
        ? 'http://localhost:5500/'
        : 'https://api-spotify-fake.herokuapp.com/'

export const LOCAL_STORAGE_TOKEN_NAME ='spotify-user'
export const ADD_AUDIO = 'ADD_AUDIO'
export const DELETE_AUDIO = 'DELETE_AUDIO'
export const UPDATE_AUDIO = 'UPDATE_AUDIO'
export const FIND_AUDIO = 'FIND_AUDIO'
export const AUDIO_LOADED_SUCCESS = 'AUDIO_LOADED_SUCCESS'
export const AUDIO_LOADED_FAIL = 'AUDIO_LOADED_FAIL'
export const PLAY_AUDIO = 'PLAY_AUDIO'