import React, {Component} from 'react';

class About extends Component{
	render(){
		return(
            <div className="container">
                <h1>This is About</h1>
				<p>The starting state of the menu will appear collapsed on smaller screens, and will appear non-collapsed on larger screens. When toggled using the button below, the menu will change.</p>
            </div>
		)
	}
}

export default About;
