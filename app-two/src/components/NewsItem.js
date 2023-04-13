import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, desc, imgurl, newsurl, author, date, source } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <div
            style={{
              dispay: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
              top:"-12px"
            }}
          >
            <span
              className="badge rounded-pill bg-danger"
            >
              {source}
            </span>
          </div>
          <img src={imgurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}{" "}
              </small>
            </p>
            <a
              href={newsurl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-warning"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
