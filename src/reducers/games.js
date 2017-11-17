exports.games = (state = [], action) => {
    switch(action.type) {
        case 'SET_GAMES': 
            return [
                ...action.data
            ];
        default: 
            return state;
    }
}