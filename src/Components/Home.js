import React, {Component} from 'react';
import Counter from './Counter';
import Controller from './Controller';
import { Provider } from 'react-redux';
import store from '../store/index'

class Home extends Component{
	render(){
		return(
			<Provider store={store}>
				<div className="container">
					<h1>This is Home</h1>
					<p>Hi Rafi! Welcome to React Router.</p>
					<Counter />
					<Controller />
				</div>
			</Provider>
		)
	}
}

export default Home;
