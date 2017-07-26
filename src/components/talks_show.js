import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchTalk, deleteTalk } from "../actions";

class TalksShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchTalk(id);
  }

  onDeleteClick() {
    const { id } = this.props.match.params;

    this.props.deleteTalk(id, () => {
      this.props.history.push("/talks");
    });
  }

  render() {
    const { talk } = this.props;

    if (!talk) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/talks">Back To Index</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete Talk
        </button>
        <h3>{talk.title}</h3>
        <h6>Categories: {talk.categories}</h6>
        <p>{talk.content}</p>
      </div>
    );
  }
}

function mapStateToProps({ talks }, ownProps) {
  return { talk: talks[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchTalk, deleteTalk })(TalksShow);
