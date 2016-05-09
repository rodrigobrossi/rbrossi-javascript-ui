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

	switchDisplayIsRead(){
		this.setState({
			displayAll: !this.state.displayAll
		})
	}

	componentWillMount(){
		this.setState({searchString: '', displayAll: true})
	}

	render() {
		console.log(this.state);
		return(
			<div>
				<Navbar onInputChange={this.onInputChange.bind(this)} switchDisplayIsRead={this.switchDisplayIsRead.bind(this)} displayAll={this.state.displayAll} />
				<BookContainer searchString={this.state.searchString} displayAll={this.state.displayAll} />
			</div>
		);
	}
}

export default App;


// Replace <BookContainer line with this to test componentWillUnmount>
// {this.state.searchString === 'testunmount' ? <div></div> : <BookContainer searchString={this.state.searchString} />}
