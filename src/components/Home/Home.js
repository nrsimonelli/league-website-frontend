import React, { Component } from "react";
import { Button } from "antd";
import { Favorite, Star, Settings } from "@material-ui/icons";
import Footer from "../Footer/Footer";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import EventList from "../EventList/EventList";

class Home extends Component {
  componentDidMount = () => {
    console.log("Home did mount");
    console.log("checking user props", this.props.state);
  };

  navToStandings = () => {
    this.props.history.push("/season");
  };

  logInClicked = () => {
    console.log("Log in was clicked");
    this.setState({
      showLogin: false,
    });
    window.location = "http://localhost:5000/auth/login";
  };

  navToRecord = () => {
    this.props.history.push("/record");
  };

  state = {
    showLogin: true,
  };

  render() {
    return (
      <div className="Home">
        <div className="Welcome-cont">
          <div className="Welcome-text">Welcome to Scythe League</div>
          <div className="Welcome-text-2">
            Your central location for all things competitive scythe{" "}
          </div>
          <Button
            className="button-welcome"
            type="primary"
            shape="default"
            size="large"
          >
            View Upcoming Events
          </Button>
        </div>
        <div className="Icon-cont">
          <div className="Icon-desc">
            <Settings
              style={{ color: "var(--color-blue)" }}
              fontSize={"inherit"}
            />
            <div className="Icon-text">Upgrade your skiils</div>
          </div>

          <div className="Icon-desc">
            <Favorite
              style={{ color: "var(--color-red)" }}
              fontSize={"inherit"}
            />
            <div className="Icon-text">Join the community</div>
          </div>

          <div className="Icon-desc">
            <Star
              style={{ color: "var(--color-yellow)" }}
              fontSize={"inherit"}
            />
            <div className="Icon-text">Compete against the best</div>
          </div>
        </div>
        <div className="Button-cont">
          <Button
            type="primary"
            shape="default"
            size="large"
            onClick={this.navToStandings}
          >
            View
          </Button>
          {this.props.user.discord_id ? (
            <div>
              <Button
                type="danger"
                shape="default"
                size="large"
                onClick={this.navToRecord}
              >
                Record Game
              </Button>
              <Button type="secondary" shape="default" size="large">
                Sign-up for Next Season
              </Button>
            </div>
          ) : (
            <Button
              type="danger"
              shape="default"
              size="large"
              onClick={this.logInClicked}
            >
              Login
            </Button>
          )}
        </div>
        {this.props.user.discord_id && (
          <h1 style={{ backgroundColor: "black" }}>
            hello {this.props.user.discord_tag}
          </h1>
        )}
        <EventList />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default withRouter(connect(mapStateToProps)(Home));
