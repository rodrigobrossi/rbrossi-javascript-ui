import React, { Component } from 'react';

class Navbar extends Component {

	render(){
		return(
			<div className="panel panel-default mybooks-mainpanel">
			    <div className="panel-body mybooks-mainpanelbody">
			        <div className="panel panel-default mybooks-filterpanel">
			            <div className="panel-body">
			                <div className="row">
			                    <div className="col-xs-1">
			                        <button type="button" className="btn btn-default navbar-btn" >
			                            <span className={"glyphicon glyphicon-"+ ((this.props.displayAll) ? "globe" : "unchecked")}></span>
			                        </button>
			                    </div>
			                    <div className="col-xs-11">
			                        <div className="input-group">
			                            <input ref='searchInputText' type="text" className="form-control" placeholder="Search..." />
			                            <span className="input-group-addon glyphicon glyphicon-search"></span>
			                        </div>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </div>
			</div>
		);
	}
};

export default Navbar;
