// import React, { Component } from "react";
import React from "react";
// import axios from "axios";
//这个部分之后将会放为查找页面
//需要添加查找bar
//需要添加连接数据库的部分
const SearchingArticle = () => {
  return (
    // <div>
    //   <Search/>
    // </div>
    <div>
      <input
        ref={(input) => {
          this.search = input;
        }}
      />
      <br></br>
      <button onClick={() => this.Search(this.search.value)}>Search</button>
      <br></br> <br></br>
      {/* <Styles>
        <Table data={articles} columns={tablecolumns} />
      </Styles> */}
    </div>
  );
};

export default SearchingArticle;

// class Search extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       article: [],
//     };
//   }
//   Search(Searchinput) {
//     let postdate = {
//       title: Searchinput,
//     };
//     axios
//       .post("api/article/search_article", postdate)
//       .then((res) => {
//         this.setState({
//           article: res.data,
//         });
//       })
//       .catch((err) => {
//         console.log("Error from ShowArticlesList");
//       });
//   }

//   render() {
//     const article = this.state.article;
//     console.log("Print Book: " + article);
//     //let articleList;

//     // if (articles) {
//     //   console.log("Its empty!");
//     //   articleList = "There is no article recorded!";
//     // } else {
//     //   articleList = articles.map((article, k) => (
//     //     <Table article={article} key={k} />
//     //   ));
//     // }

//     return (
//       <div>
//         <input
//           ref={(input) => {
//             this.search = input;
//           }}
//         />
//         <br></br>
//         <button onClick={() => this.Search(this.search.value)}>Search</button>
//         <br></br> <br></br>
//         {/* <Styles>
//           <Table data={articles} columns={tablecolumns} />
//         </Styles> */}
//       </div>
//     );
//   }
// }

// import React, { Component } from "react";
// import axios from "axios";

// // import Styles from "../components/tableStyle";
// //import Table from "../components/evidenceTable";
// // import tablecolumns from "../components/tablecolumns";

// // import evidence from "./evidenceTable";
// // import { response } from "express";

// class Search extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       article: [],
//     };
//   }
//   Search(Searchinput) {
//     let postdate = {
//       title: Searchinput,
//     };
//     axios
//       .post("api/article/search_article", postdate)
//       .then((res) => {
//         this.setState({
//           article: res.data,
//         });
//       })
//       .catch((err) => {
//         console.log("Error from ShowArticlesList");
//       });
//   }

//   render() {
//     const article = this.state.article;
//     console.log("Print Book: " + article);
//     //let articleList;

//     // if (articles) {
//     //   console.log("Its empty!");
//     //   articleList = "There is no article recorded!";
//     // } else {
//     //   articleList = articles.map((article, k) => (
//     //     <Table article={article} key={k} />
//     //   ));
//     // }

//     return (
//       <div>
//         <input
//           ref={(input) => {
//             this.search = input;
//           }}
//         />
//         <br></br>
//         <button onClick={() => this.Search(this.search.value)}>Search</button>
//         <br></br> <br></br>
//         {/* <Styles>
//           <Table data={articles} columns={tablecolumns} />
//         </Styles> */}
//       </div>
//     );
//   }
// }

// export default Search;
