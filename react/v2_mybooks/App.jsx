import React from 'react';

import Navbar from './Navbar';
import BookContainer from './BookContainer'

class App extends React.Component{
	render() {
		return(
			<div>
				<Navbar />
				<BookContainer />
			</div>
		);
	}
}

export default App;
