exports.setStreams = (data) => ({
    type: 'SET_STREAMS',
    data
});

exports.setGames = (data) => ({
    type: 'SET_GAMES',
    data
});

exports.setSelectedStream = (stream) => ({
    type: 'SET_SELECTED_STREAM',
    stream
});

exports.toggleChat = () => ({
    type: 'TOGGLE_CHAT'
});

exports.setStreamGridSize = (size) => ({
    type: 'SET_STREAMGRID_SIZE',
    size
});

