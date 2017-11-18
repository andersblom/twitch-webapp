import { combineReducers } from 'redux';

import { streams } from './streams';
import { games } from './games';
import { isPlaying } from './playing';
import { selectedStream } from './selectedStream';

const rootReducer = combineReducers({ streams, games, isPlaying, selectedStream });

export default rootReducer;