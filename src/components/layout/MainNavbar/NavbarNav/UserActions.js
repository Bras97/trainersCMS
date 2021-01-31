// import React from "react";
// import { useDispatch } from "react-redux";
// import { Link, Redirect } from "react-router-dom";
// import {
//   Dropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   Collapse,
//   NavItem,
//   NavLink
// } from "shards-react";
// import * as authorizationThunks from "../../../../redux/Authorization/thunks";

// export default class UserActions extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       visible: false
//     };
//     this.avatar = props.user.avatar;
//     this.name = props.user.name;
//     this.surname = props.user.surname;
//     this.logout = false;

//     this.toggleUserActions = this.toggleUserActions.bind(this);
//   }

//   toggleUserActions() {
//     this.setState({
//       visible: !this.state.visible
//     });
//   }

//   render() {
//     if(this.logout){
//       return <Redirect to="/login" />
//     }
//     return (
//       <NavItem tag={Dropdown} caret toggle={this.toggleUserActions}>
//         <DropdownToggle caret tag={NavLink} className="text-nowrap px-3">
//           <img
//             className="user-avatar rounded-circle mr-2"
//             src={this.avatar}
//             alt="User Avatar"
//             height = "40"
//             width = "40"
//           />{" "}
//           <span className="d-none d-md-inline-block">{this.name} {this.surname}</span>
//         </DropdownToggle>
//         <Collapse tag={DropdownMenu} right small open={this.state.visible}>
//           <Link to="/login"><DropdownItem to="/login" className="text-danger" onClick={() => authorizationThunks.clearCurrentAuthorizationUser()}>
//             <i className="material-icons text-danger">&#xE879;</i> Logout
//           </DropdownItem>
//           </Link>
//         </Collapse>
//       </NavItem>
//     );
//   }
// }



import React, {useState} from "react";
import { Redirect, Link } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  NavItem,
  NavLink
} from "shards-react";
import { useDispatch } from "react-redux";
import * as authorizationThunks from "../../../../redux/Authorization/thunks";

const UserActions = (props) => {
  

  const avatar = props.user.avatar;
  const name = props.user.name;
  const surname = props.user.surname;

  const [visible, setVisible] = useState(false);
  

  const toggleUserActions = () => {
    setVisible( !visible);
  }

  const dispatch = useDispatch();

  const logout = () => {
    dispatch(authorizationThunks.clearCurrentAuthorizationUser())
  }

  return (
    <NavItem>
      <DropdownToggle caret tag={NavLink} className="text-nowrap px-3" onClick={toggleUserActions}>
        <img
          className="user-avatar rounded-circle mr-2"
          src={avatar}
          alt="User Avatar"
          height = "40"
          width = "40"
        />{" "}
        <span className="d-none d-md-inline-block">{name} {surname}</span>
      </DropdownToggle>
      <Collapse tag={DropdownMenu} right small open={visible} style={{width: "180px"}}>
        <Link to="/login" onClick={logout}>
          <DropdownItem caret className="text-danger">
          <i className="material-icons text-danger">&#xE879;</i> Logout
        </DropdownItem>
          </Link>
      </Collapse>
    </NavItem>
  );
}


export default UserActions;