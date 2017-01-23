import React, { PropTypes, Component } from 'react'
import '../resources/css/Events.css';

export default class Events extends Component {
    render() {
        return (
            <div style={{ margin : 8 }} >
                <table>
                    <tbody>
                    <tr>
                        <th>Login</th>
                        <th>Date</th>
                        <th>Type</th>
                    </tr>
                    {this.props.events.map((event, i) =>
                        <tr key={i}>
                            <td>{event.actor.login}</td>
                            <td>{event.created_at}</td>
                            <td>{event.type}</td>
                        </tr>
                    )}
                    </tbody>
                </table>

            </div>
        )
    }
}

Events.propTypes = {
    events: PropTypes.array.isRequired
}
