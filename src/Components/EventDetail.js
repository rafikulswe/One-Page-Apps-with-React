import React from 'react';
import { Link } from 'react-router-dom';

const EventDetail = ({match}) => {
    
    return (
        <div className="mainDiv">
            <div className="card">
                <div className="card-body">
                <p>This is { match.params.eventId = 1 ? 'first' : 'second' } text within a card body. </p>
                    <Link to="/event" className="btn btn-success">Go Back</Link>
                </div>
            </div>
        </div>
    )
}
export default EventDetail;