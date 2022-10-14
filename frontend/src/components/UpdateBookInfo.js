import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../App.css";
import { Toast} from "react-vant";
import { Success } from "@react-vant/icons";

class UpdateBookInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      isbn: "",
      author: "",
      description: "",
      published_date: "",
      publisher: "",
      status: "",
      whatever: "",
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get(
        "https://a1btest119.herokuapp.com/api/books/" +
          this.props.match.params.id
      )
      //.get('https://liyijunapp.herokuapp.com/api/books/'+this.props.match.params.id)
      .then((res) => {
        // this.setState({...this.state, book: res.data})
        this.setState({
          title: res.data.title,
          isbn: res.data.isbn,
          author: res.data.author,
          description: res.data.description,
          published_date: res.data.published_date,
          publisher: res.data.publisher,
          status: res.data.status,
          whatever: res.data.status,
        });
      })
      .catch((err) => {
        console.log("Error from UpdateBookInfo");
      });
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log("onModerate e.target.name " + e.target.name);
    console.log("onModerate e.target.value " + e.target.value);
    console.log("onModerate this.state.status " + this.state.status);
    console.log("onModerate this.state.whatever " + this.state.whatever);
  };

  onSubmit = (e) => {
    e.preventDefault();

    const data = {
      title: this.state.title,
      isbn: this.state.isbn,
      author: this.state.author,
      description: this.state.description,
      published_date: this.state.published_date,
      publisher: this.state.publisher,
      status: this.state.status,
      whatever: this.state.whatever,
    };

    axios
      .put(
        "https://a1btest119.herokuapp.com/api/books/" +
          this.props.match.params.id,
        data
      )
      .then((res) => {
        console.log("success submission");
        this.props.history.push("/show-book/" + this.props.match.params.id);
      })
      .catch((err) => {
        console.log("Error in UpdateBookInfo!");
      });
  };

  render() {
    return (
      <div className="UpdateBookInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                Show Article List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Article</h1>
              <p className="lead text-center">Update Article's Info</p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  placeholder="Title of the Book"
                  name="title"
                  className="form-control"
                  value={this.state.title}
                  onChange={this.onChange}
                />
              </div>
              <br />

              <div className="form-group">
                <label htmlFor="isbn">ISBN</label>
                <input
                  type="text"
                  placeholder="ISBN"
                  name="isbn"
                  className="form-control"
                  value={this.state.isbn}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="author">Author</label>
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
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  placeholder="Describe this book"
                  name="description"
                  className="form-control"
                  value={this.state.description}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="published_date">Published Date</label>
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
                <label htmlFor="publisher">Publisher</label>
                <input
                  type="text"
                  placeholder="Publisher of this Book"
                  name="publisher"
                  className="form-control"
                  value={this.state.publisher}
                  onChange={this.onChange}
                />
              </div>

              <button
                type="submit"
                className="btn btn-outline-info btn-lg btn-block"
                title="updateIcon"
                  isLink
                  onClick={() =>
                    Toast({
                      message: "Updated!",
                      icon: <Success />,
                    })
                  }
              >
                Update Article
              </button>
            </form>
          </div>

          <div className="col-md-8 m-auto">
            <form noValidate onClick={this.onChange}>
              <div className="form-group">
                {/* <label htmlFor="publisher">Moderated</label> */}
                <br />
                <button
                  type="button"
                  name="status"
                  value={"yes"}
                  className="btn btn-outline-info btn-lg btn-block"
                  title="moderateIcon"
                  isLink
                  onClick={() =>
                    Toast({
                      message: "Moderated!",
                      icon: <Success />,
                    })
                  }
                >
                  Moderate
                </button>
              </div>
            </form>
          </div>

          <div className="col-md-8 m-auto">
            <form noValidate onClick={this.onChange}>
              <div className="form-group">
                {/* <label htmlFor="publisher">Analyzed</label> */}
                <button
                  type="button"
                  name="whatever"
                  value={"yes"}
                  className="btn btn-outline-info btn-lg btn-block"
                  // title="文字提示"
                  // isLink
                  // onClick={() => Toast.info("Successfully")}
                  title="analyzeIcon"
                  isLink
                  onClick={() =>
                    Toast({
                      message: "Analyzed!",
                      icon: <Success />,
                    })
                  }
                >
                  Analyze
                </button>
              </div>
            </form>
          </div>

          {/* <>
            <Cell
              title="文字提示"
              isLink
              onClick={() => Toast.info("提示内容")}
            />
            <Cell
              title="加载提示"
              isLink
              onClick={() => {
                Toast.loading({
                  message: "加载中...",
                  forbidClick: true,
                });
              }}
            />
            <Cell
              title="成功提示"
              isLink
              onClick={() => Toast.success("成功文案")}
            />
            <Cell
              title="失败提示"
              isLink
              onClick={() => Toast.fail("失败文案")}
            />
          </> */}
        </div>
      </div>
    );
  }
}

export default UpdateBookInfo;
