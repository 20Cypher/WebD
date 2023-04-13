import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultPorps = {
    country: "in",
    pageSize: 9,
    category: "general",
  };

  static porpsTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalise = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalise(this.props.category)} - News`;
  }

  async updateNews(page) {
    this.props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.props.setProgress(30);
    let data = await fetch(url);
    this.setState({ loading: true });
    this.props.setProgress(50);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
  };

  async componentDidMount() {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=1&pageSize=${this.props.pageSize}`;
    // let data = await fetch(url);
    // this.setState({ loading: true });
    // let parsedData = await data.json();
    // this.setState({
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    //   loading: false,
    // });
    this.updateNews();
  }

  // handlePrev = async () => {
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${
  //   //   this.props.country
  //   // }&category=${
  //   //   this.props.category
  //   // }&apiKey=${this.props.api}&page=${
  //   //   this.state.page - 1
  //   // }&pageSize=${this.props.pageSize}`;
  //   // let data = await fetch(url);
  //   // this.setState({ loading: true });
  //   // let parsedData = await data.json();
  //   // this.setState({
  //   //   articles: parsedData.articles,
  //   //   page: this.state.page - 1,
  //   //   loading: false,
  //   // });
  //   this.setState({ page: this.state.page - 1 });
  //   this.updateNews();
  // };

  // handleNext = async () => {
  //   // if (
  //   //   this.state.page + 1 >
  //   //   Math.ceil(this.state.totalResults / this.props.pageSize)
  //   // ) {
  //   // } else {
  //   //   let url = `https://newsapi.org/v2/top-headlines?country=${
  //   //     this.props.country
  //   //   }&category=${
  //   //     this.props.category
  //   //   }&apiKey=${this.props.api}&page=${
  //   //     this.state.page + 1
  //   //   }&pageSize=${this.props.pageSize}`;
  //   //   this.setState({ loading: true });
  //   //   let data = await fetch(url);
  //   //   let parsedData = await data.json();
  //   //   this.setState({
  //   //     articles: parsedData.articles,
  //   //     page: this.state.page + 1,
  //   //     loading: false,
  //   //   });
  //   // }
  //   this.setState({ page: this.state.page + 1 });
  //   this.updateNews();
  // };

  render() {
    return (
      <>
        <h1 className="text-center my-4">
          News - Top {this.capitalise(this.props.category)} Headlines
        </h1>

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
          style={{ overflow: "hidden" }}
        >
          {this.state.loading && <Spinner />}
          <div className="container">
            <div className="row">
              {this.state.articles.map((e) => {
                return (
                  <div className="col-md-4" key={e.url}>
                    <NewsItem
                      title={e.title ? e.title.slice(0, 45) : ""}
                      desc={e.description ? e.description.slice(0, 88) : ""}
                      imgurl={
                        !e.urlToImage
                          ? "https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg"
                          : e.urlToImage
                      }
                      newsurl={e.url}
                      author={e.author}
                      date={e.publishedAt}
                      source={e.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>{" "}
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.handlePrev}
            disabled={this.state.page <= 1}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.handleNext}
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
          >
            Next &rarr;
          </button>
        </div> */}
      </>
    );
  }
}

export default News;
