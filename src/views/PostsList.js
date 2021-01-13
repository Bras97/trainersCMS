import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";
import { FaTrashAlt, FaPen } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";


import PageTitle from "../components/common/PageTitle";
import { deletePost } from "../redux/Posts/actions";

const PostsList = () => {

  const {posts} = useSelector(state => state.posts);
  console.log(posts);
  const dispatch = useDispatch();

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
            <h6 className="m-0 mt-1"><Link to="/add-new-post">Dodaj nowy post</Link></h6>
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
                {posts.map(post => 
                  <tr key={post.id}>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td style={{maxWidth: "400px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                    }}>{post.content}</td>
                    <td> <Link to={"edit-post/" + post.id}><FaPen /></Link> &ensp;<Link onClick={() => dispatch(deletePost(post))}><FaTrashAlt /></Link></td>
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
