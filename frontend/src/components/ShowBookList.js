import React, { Component} from "react";
import "../App.css";
import axios from "axios";
import { Link } from "react-router-dom";
import BookCard from "./BookCard";

class ShowBookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://a1btest119.herokuapp.com/api/books")
      .then((res) => {
        this.setState({
          books: res.data,
        });
      })
      .catch((err) => {
        console.log("Error from ShowBookList");
      });
  }

  // SearchingBar = () => {
  //   const [value, setValue] = useState("");

  //   // return (
  //   //   <div>
  //   //     <Search
  //   //       value={value}
  //   //       onChange={setValue}
  //   //       placeholder="请输入搜索关键词"
  //   //     />
  //   //   </div>
  //   // );
  // };

  render() {
    const books = this.state.books;
    console.log("PrintBook: " + books);
    let bookList;

    if (!books) {
      bookList = "there is no book record!";
    } else {
      bookList = books.map((book, k) => <BookCard book={book} key={k} />);
    }

    return (
      <div className="ShowBookList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Article List</h2>
            </div>
            <div>
              <input></input>
              <button>Search</button>
            </div>
            <div className="col-md-11">
              <Link
                to="/create-book"
                className="btn btn-outline-warning float-right"
              >
                + Add New Article
              </Link>
              <Link to="/" className="btn btn-outline-warning float-right">
                Home
              </Link>
            </div>
            {/* <div className="col-md-12">
              <Link to="/" className="btn btn-outline-warning float-right">
                Home
              </Link>
              <br />
              <br />
              <hr />
            </div> */}
          </div>

          <div className="list">{bookList}</div>
        </div>
      </div>
    );
  }
}

export default ShowBookList;
