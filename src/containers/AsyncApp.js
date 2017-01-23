import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchEventsIfNeeded } from '../actions'
import Events from '../components/Events'
import Header from '../components/Header'

class AsyncApp extends Component {
    constructor(props) {
        super(props);
        console.log('CONSTRUCTOR PHASE', props);
        this.handleRefreshClick = this.handleRefreshClick.bind(this)
    }

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(fetchEventsIfNeeded())
    }

    componentWillReceiveProps(nextProps) {
    }

    handleRefreshClick(e) {
        e.preventDefault()

        const { dispatch } = this.props
        dispatch(fetchEventsIfNeeded())
    }

    render() {
        const { events, isFetching, lastUpdated } = this.props
        return (
            <div>
                <Header />
                <div>
                    <p style={{ margin : 8 }}>
                        {lastUpdated &&
                        <span>
                            Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
                            {' '}
                        </span>
                        }
                        {!isFetching &&
                        <a href='#'
                           onClick={this.handleRefreshClick}>
                            Refresh
                        </a>
                        }
                    </p>
                    {isFetching && events.length === 0 &&
                    <h2>Loading...</h2>
                    }
                    {!isFetching && events.length === 0 &&
                    <h2>Empty.</h2>
                    }
                    {events.length > 0 &&
                    <div style={{ opacity: isFetching ? 0.5 : 1 }}>
                        <Events events={events} />
                    </div>
                    }
                </div>
            </div>
        )
    }
}

AsyncApp.propTypes = {
    events: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {

    const { getEvents } = state;
    const {isFetching, lastUpdated, items: events } = getEvents || {isFetching: true, items: []}

    return {
        events,
        isFetching,
        lastUpdated
    }
}

export default connect(mapStateToProps)(AsyncApp)