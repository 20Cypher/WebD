import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 9;
  api = process.env.REACT_APP_NEWS_API

  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar color="#f11946" progress={this.state.progress} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  setProgress={this.setProgress}
                  api={this.api}
                  key="general"
                  country="in"
                  pageSize={this.pageSize}
                  category="general"
                />
              }
            />

            <Route
              exact
              path="/general"
              element={
                <News
                  setProgress={this.setProgress}
                  api={this.api}
                  key="general"
                  country="in"
                  pageSize={this.pageSize}
                  category="general"
                />
              }
            />

            <Route
              exact
              path="/business"
              element={
                <News
                  setProgress={this.setProgress}
                  api={this.api}
                  key="business"
                  country="in"
                  pageSize={this.pageSize}
                  category="business"
                />
              }
            />

            <Route
              exact
              path="/entertainment"
              element={
                <News
                  setProgress={this.setProgress}
                  api={this.api}
                  key="entertainment"
                  country="in"
                  pageSize={this.pageSize}
                  category="entertainment"
                />
              }
            />

            <Route
              exact
              path="/health"
              element={
                <News
                  setProgress={this.setProgress}
                  api={this.api}
                  key="health"
                  country="in"
                  pageSize={this.pageSize}
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  setProgress={this.setProgress}
                  api={this.api}
                  key="science"
                  country="in"
                  pageSize={this.pageSize}
                  category="science"
                />
              }
            />

            <Route
              exact
              path="/sports"
              element={
                <News
                  setProgress={this.setProgress}
                  api={this.api}
                  key="sports"
                  country="in"
                  pageSize={this.pageSize}
                  category="sports"
                />
              }
            />

            <Route
              exact
              path="/technology"
              element={
                <News
                  setProgress={this.setProgress}
                  api={this.api}
                  key="technology"
                  country="in"
                  pageSize={this.pageSize}
                  category="technology"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
