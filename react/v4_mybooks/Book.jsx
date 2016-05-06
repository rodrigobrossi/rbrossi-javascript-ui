import React, { Component } from 'react'

const Book = ({id, title, author, description, image, isRead, onIsRead}) => (
    <div className="col-md-6 col-sm-12">
        <div className="panel panel-default mybooks-bookpanel">
            <div className="panel-body">
                <div className="col-xs-12 col-sm-3">
                    <center><img src={image} className="img-responsive" /></center>
                </div>
                <div className="col-xs-12 col-sm-7 col-md-9 col-lg-7">
                    <h3 className={isRead ? 'mybooks-jali' : ''}><strong>{title}</strong></h3>
                    <small><i>{author}</i></small>
                    <br />{description}
                </div>
                <div className="col-xs-12 col-sm-2 col-md-12 col-lg-2">
                    <input type="checkbox" onClick={onIsRead} />J&aacute; Li
                    <br />
                </div>
            </div>
        </div>
    </div>
)

export default Book;
