exports.isPlaying = (state = false, action) => {
    switch(action.type) {
        case 'TOGGLE_PLAYING_STATUS': 
            return !state;
        default: 
            return state;
    }
}