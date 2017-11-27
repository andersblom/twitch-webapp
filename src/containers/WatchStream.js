import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setSelectedStream, togglePlayingStatus, toggleChat, clearSelectedStream } from '../actions/actionCreators';

import ChannelViewer from '../containers/ChannelViewer';

const mapStateToProps = state => {
    return {
        selectedStream: state.selectedStream,
        isPlaying: state.isPlaying
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({setSelectedStream, togglePlayingStatus, toggleChat, clearSelectedStream}, dispatch);
}

const WatchStream = connect(mapStateToProps, mapDispatchToProps)(ChannelViewer);

export default WatchStream;