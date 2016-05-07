import React from 'react'

class App extends React.Component {
	render() {
		let txt = this.props.txt;
		// let { txt } = this.props;
		return <h1>txt</h1>
	}
}

App.defaultProps = {
	txt: "Default txt value"
};


App.propTypes = {
	txt: React.propTypes.string,
	// anotherProp: React.propTypes.number.isRequired
};

export default App
