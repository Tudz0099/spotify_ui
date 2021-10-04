export const apiUrl = 
    process.env.NODE_ENV !== 'production' 
        ? 'http://localhost:5500/' 
        : ''

export const LOCAL_STORAGE_TOKEN_NAME ='spotify-user'