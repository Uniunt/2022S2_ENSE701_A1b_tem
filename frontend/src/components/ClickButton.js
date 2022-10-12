import React, { Component } from "react";
//import { Link } from "react-router-dom";
import axios from "axios";
import "../App.css";

class ClickButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "",
    };
  }

    // componentDidMount() {
    //   // console.log("Print id: " + this.props.match.params.id);
    //   axios
    //     .get(
    //       "https://a1btest119.herokuapp.com/api/books/" +
    //         this.props.match.params.id
    //     )
    //     //.get('https://liyijunapp.herokuapp.com/api/books/'+this.props.match.params.id)
    //     .then((res) => {
    //       // this.setState({...this.state, book: res.data})
    //       this.setState({
    //         status: res.data.status,
    //       });
    //     })
    //     .catch((err) => {
    //       console.log("Error from UpdateBookInfo");
    //     });
    // }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const data = {
      status: this.state.status,
    };

    axios
      //   .put(
      //     "https://a1btest119.herokuapp.com/api/books/" +
      //       this.props.match.params.id,
      //     data
      //   )
      .put(
        "https://a1btest119.herokuapp.com/api/books/" +
          this.props.match.params.id,
        data
      )
      .then((res) => {
        this.props.history.push("/show-book/" + this.props.match.params.id);
      })
      .catch((err) => {
        console.log("Error in UpdateBookInfo!");
      });
  };

  render() {
    return (
      <div>
        <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <button
              type="submit"
              className="btn btn-outline-info btn-lg btn-block"
              value={"yes"}
              onChange={this.onChange}
            >
              Moderate
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default ClickButton;
