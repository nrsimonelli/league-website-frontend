import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Typography } from "antd";

const { Title } = Typography;

class Nav extends Component {
  navToHome = () => {
    this.props.history.push("/");
  };

  logOutClicked = () => {};

  logInClicked = () => {
    console.log("Log in was clicked");
    window.location = "http://localhost:5000/auth/login";
  };

  render() {
    return (
      <div className="Nav-root">
        <div className="Nav-cont">
          <Title className="Link" onClick={this.navToHome}>
            Scythe
          </Title>
          <div className="Link">icon/link container</div>
          {this.props.user.discord_tag ? (
            <div className="Link">{this.props.user.discord_tag}</div>
          ) : (
            <div className="Link" onClick={this.logInClicked}>
              log-in with Discord
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default withRouter(connect(mapStateToProps)(Nav));
