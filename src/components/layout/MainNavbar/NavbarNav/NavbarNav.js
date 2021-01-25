import React from "react";
import { Nav } from "shards-react";
import UserActions from "./UserActions";
import { useSelector} from "react-redux";

export default () => {

  const {currentUsers} = useSelector(state => state.currentUsers);


  if(!currentUsers){
    return <div></div>
  }

  return(
    <Nav navbar className="border-left flex-row">
      <UserActions user={currentUsers[0]}/>
    </Nav>
  )
};
