import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchTalks } from "../actions";

class TalksIndex extends Component {
  componentDidMount() {
    this.props.fetchTalks();
  }

  renderTalks() {
    return _.map(this.props.talks, talk => {
      return (
        <li className="list-group-item" key={talk.id}>
          <Link to={`/talks/${talk.id}`}>
            {talk.title}
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/talks/new">
            Submit a Talk
          </Link>
        </div>
        <h3>Talks</h3>
        <ul className="list-group">
          {this.renderTalks()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { talks: state.talks };
}

export default connect(mapStateToProps, { fetchTalks })(TalksIndex);
