import { Link } from 'react-router-dom';
import React from "react";
import "../App.css";

const Home = (props) => {
  return (
    <div className="Navigation">
      <div className="Home">
        <h2 className="display-4 text-center">This is Home page!</h2>
        <p>G5 Group 1</p>
        <Link to="/ShowBookList" className="btn btn-outline-warning float-left">
          Show Book List
        </Link>
        <br/>
        <br/>
        <Link to="/" className="btn btn-outline-warning float-left">
          Show Moderation List
        </Link>
        <br/>
        <br/>
        <Link to="/" className="btn btn-outline-warning float-left">
          Show Analysis List
        </Link>
        <br/>
        <br/>
        <Link to="/create-book" className="btn btn-outline-warning float-left">
          Submiting Key Info of Articles
        </Link>
        <br/>
        <br/>
        <Link to="/SearchingArticle" className="btn btn-outline-warning float-left">
          Searching Articles
        </Link>
      </div>
      {/* <div className="showBooks">
        <Link to="/" className="btn btn-outline-warning float-left">
          Show Book List
        </Link>
      </div> */}
    </div>
  );
};

export default Home;

// import React from "react";
// import '../App.css';

// const Home = () =>  {
//     return (
//       <div>
//         <h1> This is Home page!</h1>
//         <p>G5 Group 1</p>
//       </div>
//     );
//   }

// export default Home;