exports.selectedStream = (state = {}, action) => {
    switch(action.type) {
        case 'SET_SELECTED_STREAM': 
            console.log("set new stream", action.stream);
            return Object.assign({}, action.stream);
        default: 
            return state;
    }
}