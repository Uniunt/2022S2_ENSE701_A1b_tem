import { Link } from "react-router-dom";
import React from "react";
import "../App.css";
import { NoticeBar } from "react-vant";
import { VolumeO } from "@react-vant/icons";

const Home = (props) => {
  return (
    <div className="Navigation">
      <div>
        <NoticeBar
          leftIcon={<VolumeO />}
          text="Software Practice Empirical Evidence Database (SPEED): this is a 
          searchable database of evidence about different claims about different SE practices.These will be found and put 
          into the database by SE experts I will hire in the Software Engineering Research Centre (SERC) at AUT. Any 
          practitioner, researcher or student will be able to look for evidence related to claims about software 
          engineering practices by searching this database and they will be shown a summary of the published relevant 
          research evidence for and against the claims."
        />
      </div>

      <div className="Home">
        <h2 className="display-4 text-center">This is Home page!</h2>
        <p className="display-6 text-center">G5 Group 1</p>
        {/* <Link to="/ShowBookList" className="btn btn-outline-warning float-left"> */}
        <Link
          to="/ShowBookList"
          className="btn btn-outline-warning float-left"
        >
          Show Article List
        </Link>
        <br />
        <br />
        <Link to="/create-book" className="btn btn-outline-warning float-left">
          Submiting Key Info of Articles
        </Link>
        <br />
        <br />

        {/* <Link to="/SearchingArticle" className="btn btn-outline-warning float-left">
          Searching Articles
        </Link> */}
      </div>
    </div>
  );
};

export default Home;
