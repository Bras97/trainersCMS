import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";
import { FaTrashAlt, FaPen } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";


import PageTitle from "../components/common/PageTitle";
import { deletePost } from "../redux/Posts/actions";
import * as postThunks from "../redux/Posts/thunks";
import { useHttpErrorHandler } from '../utils/hooks/useHttpErrorHandler';
import { Redirect } from "react-router-dom";

const PostsList = () => {

  let {posts} = useSelector(state => state.posts);
  const dispatch = useDispatch();
  const handler = useHttpErrorHandler();
  const { authorization } = useSelector(state => state.authorizationUsers);


  useEffect(() => {
    if (authorization != null && authorization.user != null && authorization.user._id != null) {
      
      if(authorization.user.type == "ADMIN"){
        dispatch(postThunks.fetchAllPosts())
      }
      else{
        dispatch(postThunks.fetchPosts(authorization.user._id, handler));
      }
    }
}, [authorization]);

if(authorization != null && authorization.user != null && authorization.user.type == "USER"){
  return <Redirect to="/login" /> 
}
const handleDeletePost = (selectedPost) => {
  if (authorization != null && authorization.user != null && authorization.user._id != null) {
    console.log("SELECTED ID:", selectedPost)
      dispatch(postThunks.deletePostFromDatabase(selectedPost));
    }
};


  return(
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Lista postów" subtitle="Blog Posts" className="text-sm-left" />
    </Row>

    {/* Default Light Table */}
    <Row>
      <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h4 className="m-0">Posty</h4>
            
            {authorization.user.type != "ADMIN" ?
            <h6 className="m-0 mt-1"><Link to="/add-new-post">Dodaj nowy post</Link></h6> : null}
          </CardHeader>
          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-light">
                <tr>
                  <th scope="col" className="border-0">
                    #
                  </th>
                  <th scope="col" className="border-0">
                    Tytuł
                  </th>
                  <th scope="col" className="border-0">
                    Krótki opis
                  </th>
                  <th scope="col" className="border-0">
                    Narzędzia
                  </th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post, idx) =>
                  <tr key={idx+1}>
                    <td>{idx+1}</td>
                    <td style={{maxWidth: "400px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                    }}>{post.title}</td>
                    <td style={{maxWidth: "400px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                    }}>{post.content}</td>
                    <td> <Link to={"edit-post/" + post._id}><FaPen /></Link> &ensp;<Link onClick={()=>{
                      handleDeletePost(post);
                    }}><FaTrashAlt /></Link></td>
                  </tr>
                )}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>

  </Container>

  )
};

export default PostsList;
