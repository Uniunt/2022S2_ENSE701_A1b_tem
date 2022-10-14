import React, { Component } from "react";
import axios from "axios";
import List from "../components/ShowBookList";

class SearchingArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: [],
    };
  }

  Search(Searchinput) {
    let postdate = {
      title: Searchinput,
    };
    axios
      .post("api/book/search_article", postdate)
      .then((res) => {
        this.setState({
          book: res.data,
        });
        console.log("Searching Success");
      })
      .catch((err) => {
        console.log("Error from ShowArticlesList");
      });
  }

  render() {
    const articles = this.state.book;
    console.log("Print Article: " + articles);

    if (articles) {
      console.log("Its empty!");
    } else {
      <List />;
    }

    return (
      <div>
        <input
          ref={(input) => {
            this.search = input;
          }}
        />
        <br></br>
        <button onClick={() => this.Search(this.search.value)}>Search</button>
        <br></br> <br></br>
        <h2>Search Article</h2>
        <p>Please search </p>
        {/* <Search /> */}
      </div>
    );
  }
}

export default SearchingArticle;
