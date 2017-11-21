exports.streamGrid = (state = 4, action) => {
    switch (action.type) {
        case 'SET_STREAMGRID_SIZE':
            return action.size;
        default: 
            return state;
    }
}