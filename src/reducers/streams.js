exports.streams = (state = [], action) => {
    switch(action.type) {
        case 'SET_DATASOURCE': 
            return [
                ...action.data
            ];
        default: 
            return state;
    }
}