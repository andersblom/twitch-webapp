import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

import Main from '../components/Main';

const mapStateToProps = state => {
    return {
        streams: state.streams,
        games: state.games,
        streamGrid: state.streamGrid,
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;