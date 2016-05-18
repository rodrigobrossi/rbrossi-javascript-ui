import React from 'react'

const BookWrapper = ({children}) => (
    <div className="col-md-6 col-sm-12">
        <div className="panel panel-default mybooks-bookpanel">
            <div className="panel-body">
            { children }
            </div>
        </div>
    </div>
)

export default BookWrapper;
