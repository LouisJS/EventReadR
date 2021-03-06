import { combineReducers } from 'redux'
import {
    REQUEST_EVENTS, RECEIVE_EVENTS
} from './actions'

/*function posts(state = {
    isFetching: false,
    didInvalidate: false,
    items: []
}, action) {
    switch (action.type) {
        case INVALIDATE_SUBREDDIT:
            return Object.assign({}, state, {
                didInvalidate: true
            })
        case REQUEST_POSTS:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            })
        case RECEIVE_POSTS:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            })
        default:
            return state
    }
}

 function postsBySubreddit(state = {}, action) {
 switch (action.type) {
 case INVALIDATE_SUBREDDIT:
 case RECEIVE_POSTS:
 case REQUEST_POSTS:
 return Object.assign({}, state, {
 [action.subreddit]: posts(state[action.subreddit], action)
 })
 default:
 return state
 }
 }

*/

function getEvents(state = {
    isFetching: false,
    items: []
}, action) {
    switch (action.type) {
        case REQUEST_EVENTS:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_EVENTS:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.events,
                lastUpdated: action.receivedAt
            });
        default:
            return state
    }
}

const rootReducer = combineReducers({
    getEvents
})

export default rootReducer