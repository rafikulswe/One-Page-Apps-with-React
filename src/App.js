import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SidebarManu from './Components/SidebarManu';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Events from './Components/Events';
import EventDetail from './Components/EventDetail';

class App extends Component{
	render(){
		return(
			<BrowserRouter>
				<div className="container">
					<div class="d-flex" id="wrapper">
						<SidebarManu/>
						{/* Page Content  */}
						<div id="page-content-wrapper">
							<div className="container-fluid">
							<Switch>
								<Route path='/' exact component={Home}/>
								<Route path='/about' component={About}/>
								<Route path='/contact' component={Contact}/>
								<Route path='/event' exact component={Events}/>
								<Route path='/event/:eventId' exact component={EventDetail}/>
							</Switch>
							</div>
						</div>
					</div>
				</div>
			</BrowserRouter>
		)
	}
}

export default App;
