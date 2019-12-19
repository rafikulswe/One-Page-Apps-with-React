import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

const style = {
    color: 'black',
    fontWeight: 'bold'
}

class SidebarManu extends Component{
	render(){
		return(
            <div className="bg-light border-right" id="sidebar-wrapper">
                <div className="list-group list-group-flush">
                    <NavLink activeStyle={style} to="/" exact className="list-group-item list-group-item-action bg-light">Home</NavLink>
                    <NavLink activeStyle={style} to="/about" className="list-group-item list-group-item-action bg-light">About</NavLink>
                    <NavLink activeStyle={style} to="/contact" className="list-group-item list-group-item-action bg-light">Contact</NavLink>
                    <NavLink activeStyle={style} to="/event" className="list-group-item list-group-item-action bg-light">Events</NavLink>
                </div>
            </div>
		)
	}
}

export default SidebarManu;
