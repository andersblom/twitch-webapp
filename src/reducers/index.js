import { combineReducers } from 'redux';

import { streams } from './streams';
import { games } from './games';
import { isPlaying } from './playing';

const rootReducer = combineReducers({ streams, games, isPlaying });

export default rootReducer;