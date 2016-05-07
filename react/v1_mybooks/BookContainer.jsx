import React, { Component } from 'react';

class BookContainer extends Component {
    render(){
        return (
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <div className="panel panel-default mybooks-bookpanel">
                        <div className="panel-body">
                            <div className="col-xs-12 col-sm-3">
                                <center><img src="images/got.jpg" className="img-responsive" /></center>
                            </div>
                            <div className="col-xs-12 col-sm-7 col-md-9 col-lg-7">
                                <h3><strong>Game of Thrones</strong></h3>
                                <small><i>George Martin</i></small>
                                <br /> Here is the first volume in George R. R. Martin’s magnificent cycle of novels that includes A Clash of Kings and A Storm of Swords.
                            </div>
                            <div className="col-xs-12 col-sm-2 col-md-12 col-lg-2">
                                <input type="checkbox" />J&aacute; Li
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="panel panel-default mybooks-bookpanel">
                        <div className="panel-body">
                            <div className="col-xs-12 col-sm-3">
                                <center><img src="images/lotr.jpg" className="img-responsive" /></center>
                            </div>
                            <div className="col-xs-12 col-sm-7 col-md-9 col-lg-7">
                                <h3><strong>The Lord of the Rings</strong></h3>
                                <small><i>J.R.R. Tolkien</i></small>
                                <br /> In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others.
                            </div>
                            <div className="col-xs-12 col-sm-2 col-md-12 col-lg-2">
                                <input type="checkbox" /> J&aacute; Li
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BookContainer;
