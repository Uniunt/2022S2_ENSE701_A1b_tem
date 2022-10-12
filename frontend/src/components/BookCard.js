// import React from "react";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const BookCard = (props) => {
  const book = props.book;

  return (
    <div className="card-container">
      <img
        src="https://commapress.co.uk/books/the-book-of-cairo/cairo-provisional-v3/image%2Fspan3"
        alt=""
      />
      <div className="desc">
        <h3>
          <Link to={`/show-book/${book._id}`}>Title: {book.title}</Link>
        </h3>
        <h3>DOI: {book.isbn}</h3>
        <h3>Author: {book.author}</h3>
        <h3>SE Prctices: {book.description}</h3>
        <h3>Published Date: {book.published_date}</h3>
        <h3>Source: {book.publisher}</h3>
        <h3>Claimed: {book.claimed}</h3>
        <h3>Evidence: {book.evidence}</h3>

        <button>moderate</button>
        <button>analyse</button>
        {/* <Button type="primary">主要按钮</Button>
        <Button type="text">文字按钮</Button> */}
      </div>
    </div>
  );
};

export default BookCard;
