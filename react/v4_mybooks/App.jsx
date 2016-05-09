import React from 'react';

import Navbar from './Navbar';
import BookContainer from './BookContainer'

class App extends React.Component{

	constructor() {
		super();
		this.state = {
			searchString: ''
		}
	}

	onInputChange(value){
		this.setState({
			searchString: value
		});
	}

	render() {
		return(
			<div>
				<Navbar onInputChange={this.onInputChange.bind(this)}/>
				<BookContainer searchString={this.state.searchString} />
			</div>
		);
	}
}

export default App;


// Replace <BookContainer line with this to test componentWillUnmount>
// {this.state.searchString === 'testunmount' ? <div></div> : <BookContainer searchString={this.state.searchString} />}
