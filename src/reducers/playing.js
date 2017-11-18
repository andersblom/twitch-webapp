exports.isPlaying = (state = false, action) => {
    switch(action.type) {
        case 'TOGGLE_PLAYING_STATUS': 
            console.log("lets do eet");
            return !state;
        default: 
            return state;
    }
}