import React from 'react';

import Navbar from './Navbar';
import BookContainer from './BookContainer'

class App extends React.Component{

	onInputChange(value){
		this.setState({
			searchString: value
		});
	}

	componentWillMount(){
		this.setState({searchString: ''})
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
