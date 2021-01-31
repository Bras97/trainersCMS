import React from "react";
import {Link, Redirect} from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  NavItem,
  NavLink
} from "shards-react";
import {connect} from "react-redux";
import {clearCurrentAuthorizationUser} from "../../../../redux/Authorization/thunks";

class UserActions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      redirect: false,
    };
    this.avatar = props.user.avatar;
    this.name = props.user.name;
    this.surname = props.user.surname;

    this.toggleUserActions = this.toggleUserActions.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  toggleUserActions() {
    this.setState({
      visible: !this.state.visible
    });
  }

  handleLogout() {
    this.props.logout();
    this.setState({
      redirect: true
    });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/login" />;
    }

    return (
      <NavItem tag={Dropdown} caret toggle={this.toggleUserActions}>
        <DropdownToggle caret tag={NavLink} className="text-nowrap px-3">
          <img
            className="user-avatar rounded-circle mr-2"
            src={this.avatar}
            alt="User Avatar"
            height = "40"
            width = "40"
          />{" "}
          <span className="d-none d-md-inline-block">{this.name} {this.surname}</span>
        </DropdownToggle>
        <Collapse tag={DropdownMenu} right small open={this.state.visible}>
          <DropdownItem className="text-danger" onClick={this.handleLogout}>
            <i className="material-icons text-danger">&#xE879;</i> Logout
          </DropdownItem>
        </Collapse>
      </NavItem>
    );
  }
}

export default connect(null, dispatch => ({
  logout: () => dispatch(clearCurrentAuthorizationUser()),
}))(UserActions);
