import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";
import { FaTrashAlt, FaPen } from "react-icons/fa";
import { useSelector } from "react-redux";
import {initPosts} from "../redux/Posts/actions"

import PageTitle from "../components/common/PageTitle";

const PostsList = () => {

  const {posts} = useSelector(state => state.posts);
  console.log(posts);

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
            <h6 className="m-0 mt-1"><a href="/add-new-post">Dodaj nowy post</a></h6>
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
                  <tr>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td style={{maxWidth: "400px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                    }}>{post.content}</td>
                    <td> <a href={"edit-post/" + post.id}><FaPen /></a> &ensp; <a href="/posts-list"><FaTrashAlt /> </a></td>
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
