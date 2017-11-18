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

exports.togglePlayingStatus = () => ({
    type: 'TOGGLE_PLAYING_STATUS'
});

