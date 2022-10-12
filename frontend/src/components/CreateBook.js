import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import axios from "axios";

class CreateBook extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      isbn: "",
      author: "",
      description: "",
      published_date: "",
      publisher: "",
      claimed: "",
      evidence: "",
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const data = {
      // title: this.state.title,
      // doi: this.state.doi,
      // author: this.state.author,
      // source: this.state.source,
      // published_date: this.state.published_date,
      // practice: this.state.practice,
      // claimed: this.state.claimed,
      // evidence: this.state.evidence,
      // moderate: this.state.moderate,
      // analysis: this.state.analysis,
      title: this.state.title,
      isbn: this.state.isbn,
      author: this.state.author,
      description: this.state.description,
      published_date: this.state.published_date,
      publisher: this.state.publisher,
      claimed: this.state.claimed,
      evidence: this.state.evidence,
    };

    axios
      // .post('https://liyijunapp.herokuapp.com/api/books', data)
      .post("https://a1btest119.herokuapp.com/api/books", data)
      .then((res) => {
        this.setState({
          // title: "",
          // doi: "",
          // author: "",
          // source: "",
          // published_date: "",
          // practice: "",
          // claimed: "",
          // evidence: "",
          // moderate: "",
          // analysis: "",
          title: "",
          isbn: "",
          author: "",
          description: "",
          published_date: "",
          publisher: "",
          claimed: "",
          evidence: "",
        });
        this.props.history.push("/");
        console.log("Success in CreateBook!");
      })
      .catch((err) => {
        console.log("Error in CreateBook!");
      });
  };

  render() {
    return (
      <div className="CreateBook">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link
                to="/ShowBookList"
                className="btn btn-outline-warning float-left"
              >
                Show Article List
              </Link>
              <Link to="/" className="btn btn-outline-warning float-right">
                Home
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Article</h1>
              <p className="lead text-center">Create new article</p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Title of the Article"
                    name="title"
                    className="form-control"
                    value={this.state.title}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className="form-group">
                  <input
                    type="text"
                    placeholder="DOI"
                    name="isbn"
                    className="form-control"
                    value={this.state.isbn}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Author"
                    name="author"
                    className="form-control"
                    value={this.state.author}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Source"
                    name="description"
                    className="form-control"
                    value={this.state.description}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="date"
                    placeholder="published_date"
                    name="published_date"
                    className="form-control"
                    value={this.state.published_date}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    placeholder="SE Practice"
                    name="publisher"
                    className="form-control"
                    value={this.state.publisher}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Claimed benefits"
                    name="claimed"
                    className="form-control"
                    value={this.state.claimed}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Evidence"
                    name="evidence"
                    className="form-control"
                    value={this.state.evidence}
                    onChange={this.onChange}
                  />
                </div>

                <input
                  type="submit"
                  className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateBook;
