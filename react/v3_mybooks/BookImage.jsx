import React from 'react'

const BookImage = ({image}) => (
    <div className="col-xs-12 col-sm-3">
        <center><img src={image} className="img-responsive" /></center>
    </div>
)

export default BookImage;
