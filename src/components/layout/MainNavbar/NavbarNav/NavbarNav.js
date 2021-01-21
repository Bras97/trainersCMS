import React from "react";
import { Nav } from "shards-react";
import UserActions from "./UserActions";
import { useSelector} from "react-redux";

export default () => {

  const {users} = useSelector(state => state.users);
  return(
    <Nav navbar className="border-left flex-row">
      <UserActions user={users[0]}/>
    </Nav>
  )
};
