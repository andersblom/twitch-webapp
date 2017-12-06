import { combineReducers } from 'redux';

import { streams } from './streams';
import { games } from './games';
import { isPlaying } from './playing';
import { selectedStream } from './selectedStream';
import { streamGrid } from './streamGrid';
import { user } from './user';

const rootReducer = combineReducers({ streams, games, isPlaying, selectedStream, streamGrid, user });

export default rootReducer;