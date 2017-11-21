exports.streamGrid = (state = 4, action) => {
    switch (action.type) {
        case 'SET_STREAMGRID_SIZE':
            console.log(action); 
            return action.size;
        default: 
            return state;
    }
}