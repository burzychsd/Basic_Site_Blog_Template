export const SET_DIMENSIONS = 'SET_DIMENSIONS'

export const setDimensions = () => ({
    type: SET_DIMENSIONS,
    width: window.innerWidth,
    height: window.innerHeight
})