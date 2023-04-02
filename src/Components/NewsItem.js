import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, url,author,date,source}= this.props;
    return (
        <div className="card" >
           <span style={{zIndex:1, left:'90%'}} className="position-absolute top-0 translate-middle badge rounded-pill bg-success">
              {source}</span>
        <img src={imageUrl?imageUrl:'https://ktla.com/wp-content/uploads/sites/4/2023/03/GettyImages-645368574.jpg?w=1280'} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-body-secondary">By {author?author:'Unknown'} on {new Date(date).toTimeString()}</small></p>
          <a rel="noreferrer" href={url} target = '_blank' className="btn btn-dark">Read more</a>
        </div>
      </div>
    )
  }
}
