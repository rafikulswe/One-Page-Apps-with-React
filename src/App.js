import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SidebarManu from './Components/SidebarManu';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Events from './Components/Events';
import EventDetail from './Components/EventDetail';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component{
	render(){
		// //making a reducer
		// const reducer = (state={}, action) => {
		// 	if (action.type === "A") {
		// 		return{
		// 			// ...state,
		// 			A: 'I am A'
		// 		}
		// 	} else if (action.type === "B") {
		// 		return{
		// 			B: 'I am B'
		// 		}
		// 	} else {
		// 		return{
		// 			Nothing: 'Nothing'
		// 		}
		// 	}
		// 	return state;
		// }
		// //making a store by using reducer
		// const store = createStore(reducer);
		// //making subscribe
		// store.subscribe(()=> {
		// 	console.log(store.getState().A);
		// })
		// store.subscribe(()=> {
		// 	console.log(store.getState().B);
		// })
		// //making dispatch
		// store.dispatch({type: 'nothing'});
		// store.dispatch({type: 'A'});
		// store.dispatch({type: 'B'});

		return(

			<Provider store={ store }>
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
			</Provider>
		)
	}
}

export default App;
