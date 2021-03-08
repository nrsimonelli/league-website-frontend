import React, { Component } from "react";
import { Button, Card, Tabs } from "antd";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const { TabPane } = Tabs;

class EventList extends Component {
  componentDidMount = () => {
    console.log("eventlist mounted");
  };

  render() {
    return (
      <div className="EventList">
        <Tabs defaultActiveKey="1" centered>
          <TabPane tab="Upcoming" key="1" style={{ marginLeft: 24 }}>
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="Current" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Past" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
        <Card title="Default size card" style={{ width: 300 }}>
          <div>hello</div>
          <div>hello</div>
        </Card>
        <Card title="Default size card" style={{ width: 300 }}>
          <div>hello</div>
          <div>hello</div>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default withRouter(connect(mapStateToProps)(EventList));
