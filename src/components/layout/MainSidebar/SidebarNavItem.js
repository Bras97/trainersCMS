import React, {useEffect} from "react";
import PropTypes from "prop-types";
import { NavLink as RouteNavLink } from "react-router-dom";
import { NavItem, NavLink } from "shards-react";
import {useSelector} from "react-redux"
import {readAuthorizationUserFromLocalStorage} from "../../../redux/Authorization/utils";

const SidebarNavItem = ({ item }) => {

  const { authorization } = useSelector(state => state.authorizationUsers);
  
    if (authorization != null && authorization.user != null && authorization.user.type == "TRAINER") {
        if (item.title == "Specjalności" || item.title == "Miasta" || item.title == "Użytkownicy" || item.title == "Zgłoszenia"){
          return <><NavItem></NavItem></>
        }
    }
    else if (authorization != null && authorization.user != null && authorization.user.type == "ADMIN" && item.title == "Cenniki"){
      
      return <><NavItem></NavItem></>
    }
    if (authorization != null && authorization.user != null && authorization.user.type == "USER" && item.title != "Profil") {
      return <><NavItem></NavItem></>        
    }


return(
  <>
  <NavItem>
    <NavLink tag={RouteNavLink} to={item.to}>
      {item.htmlBefore && (
        <div
          className="d-inline-block item-icon-wrapper"
          dangerouslySetInnerHTML={{ __html: item.htmlBefore }}
        />
      )}
      {item.title && <span>{item.title}</span>}
      {item.htmlAfter && (
        <div
          className="d-inline-block item-icon-wrapper"
          dangerouslySetInnerHTML={{ __html: item.htmlAfter }}
        />
      )}
    </NavLink>
  </NavItem>
  </>
)};

SidebarNavItem.propTypes = {
  /**
   * The item object.
   */
  item: PropTypes.object
};

export default SidebarNavItem;
