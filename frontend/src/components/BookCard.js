import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

// import ClickButton from "../components/ClickButton";

const BookCard = (props) => {
  const book = props.book;

  return (
    // <div className="card-container">

    <div className="container">
      <img
        src="https://commapress.co.uk/books/the-book-of-cairo/cairo-provisional-v3/image%2Fspan3"
        alt=""
      />
      <div className="desc">
        <h3>
          <Link to={`/show-book/${book._id}`} className="btn btn-outline-light">
            Title: {book.title}
          </Link>
        </h3>
        <h3>DOI: {book.isbn}</h3>
        <h3>Author: {book.author}</h3>
        <h3>Evidence of SE Prctices: {book.description}</h3>
        <h3>Published Date: {book.published_date}</h3>
        <h3>Source: {book.publisher}</h3>
        <h3>Moderated: {book.status}</h3>
        <h3>Analyzed: {book.whatever}</h3>

        {/* <ClickButton /> */}
      </div>
    </div>
  );
};

export default BookCard;
