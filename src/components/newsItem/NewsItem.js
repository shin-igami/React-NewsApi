import React from 'react'

function NewsItem(props) {
    return (
        <div className="card" style={{width: "18rem"}}>
        <img src={props.imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{props.title}...</h5>
          <p className="card-text">{props.description}...</p>
          <p class="card-text"><small class="text-muted">by {props.author?props.author:"Unknown"} on {new Date(props.date).toGMTString()}</small></p>
          <a href={props.newsUrl} rel="noreferrer" target="_blank" className="btn btn-dark">Read More</a>
        </div>
      </div>
    )
}

export default NewsItem
