import {combineReducers} from 'redux';
import todo from './todo';
import visibilityFilter from './visibilityFilter';

const todoApp = combineReducers ({
    todos,
    visibilityFilter
})

export default todoApp;