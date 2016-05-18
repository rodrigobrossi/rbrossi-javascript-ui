import React from 'react'

const BookBody = ({title, author, description}) => (
    <div className="col-xs-12 col-sm-7 col-md-9 col-lg-7">
        <h3><strong>{title}</strong></h3>
        <small><i>{author}</i></small>
        <br />{description}
    </div>
)

export default BookBody;
