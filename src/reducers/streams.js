exports.streams = (state = [], action) => {
    switch(action.type) {
        case 'SET_STREAMS': 
            return [
                ...action.data
            ];
        default: 
            return state;
    }
}