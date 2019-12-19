import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Events extends Component{
	render(){
		return(
            <div className="container">
                <h1>All Events are below</h1>
				
				<div className="row">
					<div className="col-sm-6">
						<div className="card">
						<div className="card-body">
							<h5 className="card-title">Special title treatment</h5>
							<p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
							<Link to="/event/1" className="btn btn-primary">Go somewhere</Link>
						</div>
						</div>
					</div>

					<div className="col-sm-6">
						<div className="card">
						<div className="card-body">
							<h5 className="card-title">Special title treatment</h5>
							<p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
							<Link to="/event/2" className="btn btn-primary">Go somewhere</Link>
						</div>
						</div>
					</div>
				</div>

            </div>
		)
	}
}

export default Events;
