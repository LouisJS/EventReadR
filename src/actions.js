import fetch from 'isomorphic-fetch'

export const REQUEST_EVENTS = 'REQUEST_EVENTS'
export const RECEIVE_EVENTS = 'RECEIVE_EVENTS'

function requestEvents() {
    return {
        type: REQUEST_EVENTS,
    }
}

function receiveEvents(json) {
    console.log('JSON RECEIVED', json);
    return {
        type: RECEIVE_EVENTS,
        events: json,
        receivedAt: Date.now()
    }
}

function fetchEvents() {
    return dispatch => {
        dispatch(requestEvents())
        return fetch(`https://api.github.com/events`)
            .then(response => response.json())
            .then(json => dispatch(receiveEvents(json)))
    }
}

function shouldFetchEvents(state) {
    const events = state.events;
    if (!events) {
        return true
    } else if (events.isFetching) {
        return false
    }
    return true;
}

export function fetchEventsIfNeeded() {
    return (dispatch, getState) => {
        if (shouldFetchEvents(getState())) {
            return dispatch(fetchEvents())
        }
    }
}