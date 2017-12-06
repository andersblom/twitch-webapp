import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userActionCreators from '../actions/userActionCreators';

import UserArea from '../components/UserArea';

const mapStateToProps = state => {
    return {
        user: state.user,
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(userActionCreators, dispatch)
}

const Authentication = connect(mapStateToProps, mapDispatchToProps)(UserArea);

export default Authentication;