import { combineReducers } from 'redux';

import course from './course';

const rootReducer = combineReducers({
    course
});

export default rootReducer;


export type RootState = ReturnType<typeof rootReducer>;