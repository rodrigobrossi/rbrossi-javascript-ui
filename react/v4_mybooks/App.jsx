import React from 'react';

import Navbar from './Navbar';
import BookContainer from './BookContainer'

class App extends React.Component{

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
		this.setState({searchString: '', displayAll: false})
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
