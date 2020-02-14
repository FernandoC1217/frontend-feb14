import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import HeartCheckbox from "react-heart-checkbox";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: true
    };
  }
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  onClick = (event, props) => {
    this.setState({ checked: !this.state.checked });
  };
  render() {
    const { checked } = this.state;
    const { user } = this.props.auth;
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Hey</b> {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
                ¡Feliz día del amor y la amistad!{" "}
                <span style={{ fontFamily: "monospace" }}>♥</span>
              </p>
            </h4>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>{" "}
            <h1>{checked ? "" : ""}</h1>
            <HeartCheckbox checked={checked} onClick={this.onClick} />
          </div>
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, { logoutUser })(Dashboard);
