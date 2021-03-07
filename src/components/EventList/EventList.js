import React, { Component } from "react";
import { Button } from "antd";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class EventList extends Component {
  componentDidMount = () => {
    console.log("eventlist mounted");
  };

  render() {
    return (
      <div className="EventList">
        <div>EventList</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default withRouter(connect(mapStateToProps)(EventList));
