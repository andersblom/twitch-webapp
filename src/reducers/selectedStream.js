exports.selectedStream = (state = {}, action) => {
    switch(action.type) {
        case 'SET_SELECTED_STREAM': 
            return Object.assign({}, action.stream);
        default: 
            return state;
    }
}