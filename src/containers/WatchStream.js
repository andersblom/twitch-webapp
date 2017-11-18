import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setSelectedStream, togglePlayingStatus } from '../actions/actionCreators';

import StreamPlayer from '../components/StreamPlayer';

const mapStateToProps = state => {
    return {
        streamSelected: state.streamSelected,
        isPlaying: state.isPlaying
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({setSelectedStream, togglePlayingStatus}, dispatch);
}

const WatchStream = connect(mapStateToProps, mapDispatchToProps)(StreamPlayer);

export default WatchStream;