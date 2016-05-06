import React from 'react'

class App extends React.Component {
	constructor() {
		super();
		this.state = {txt: 'current state text'};
		this.update = this.update.bind(this);
	}
	update(e) {
		this.setState({txt: e.target.value});
	}
	render() {
		// Can have multiple instances of Widget
		return <Widget txt={this.state.txt} update={this.update} />
	}
}

const Widget = (props) => (
	<div>
		<input type="text" onChange={props.update} />
		<h1>{props.txt}</h1>
	</div>
)


export default App