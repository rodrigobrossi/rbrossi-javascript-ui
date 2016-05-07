import React from 'react';

import Navbar from './Navbar';
import BookContainer from './BookContainer'

class App extends React.Component{
	render() {
		//return React.createElement('div',null, <Navbar />, <BookContainer />); // element, props, innerHTML
		return(
			<div>
				<Navbar />
				<BookContainer />
			</div>
		);
	}
}

export default App;
