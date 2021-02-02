import React from "react";
import {useEffect, useState} from "react";
import { Container, Row, Col,Card, CardBody, Form, FormInput, Button, FormTextarea } from "shards-react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import {editReport} from "../redux/Reports/actions";
import * as reportsThunks from "../redux/Reports/thunks";
import { useHttpErrorHandler } from '../utils/hooks/useHttpErrorHandler';

import PageTitle from "../components/common/PageTitle";
import { Redirect } from "react-router-dom";
import { setComments } from "../redux/Comments/actions";
import * as commentThunks from "../redux/Comments/thunks";
import * as reviewThunks from "../redux/Reviews/thunks";

const ReportInfo = () => {
  
  const {reports} = useSelector(state => state.reports);
  const {comments} = useSelector(state => state.comments);
  const {reviews} = useSelector(state => state.reviews);
  const { id } = useParams();
  const [currentReport, setCurrentReport] = useState();
  const [currentComment, setCurrentComment] = useState();
  const [currentReview, setCurrentReview] = useState();
  const dispatch = useDispatch();
  const { authorization } = useSelector(state => state.authorizationUsers);
  const handler = useHttpErrorHandler();

  
  if(authorization != null && authorization.user != null && (authorization.user.type == "USER" || authorization.user.type == "TRAINER")){
    return <Redirect to="/login" /> 
  }

  const handleDeleteReport = (selectedReport) => {
    if (authorization != null && authorization.user != null && authorization.user._id != null) {
        dispatch(reportsThunks.deleteReportFromDatabase(selectedReport));
      }
  };

  const handleApproveReport = (selectedReport) => {
    if (authorization != null && authorization.user != null && authorization.user._id != null) {
        dispatch(reportsThunks.approveReport(selectedReport));
      }
  };


  useEffect(() => {
      if (id) {
          const report = reports.find(report => report._id == id);
          setCurrentReport(report);
          if(report && report.objectType == "COMMENT" && authorization.user.type == "ADMIN"){
            dispatch(commentThunks.fetchComments(handler))
          }
          else if(report && report.objectType == "REVIEW" && authorization.user.type == "ADMIN"){
            dispatch(reviewThunks.fetchReviews(handler))
          }
      }
  }, [id, reports]);

  useEffect(() => {
    if(reviews != null && currentReport && currentReport.objectId){
      console.log("ID", currentReport.objectId, "R", reviews)
      const review = reviews.find(review => review.id == currentReport.objectId);
      console.log("R", review)
      setCurrentReview(review);
    }
    if(comments != null && currentReport && currentReport.objectId){
      const comment = comments.find(comment => comment.id == currentReport.objectId);
      console.log("C", comment)
      setCurrentComment(comment);
    }

  }, [reviews, comments]);
  

  const updateTitle = e => {
    setCurrentReport({
      ...currentReport,
      title: e.target.value
    });
  };

  const updateContent = e => {
    setCurrentReport({
      ...currentReport,
      content: e.target.value
    });
  };


  const updateImage = (files, pictures) => {
    setCurrentReport({
      ...currentReport,
      image: pictures[0]
    })
  }


  if(!currentReport){
    return <div></div>
  }
  if(!currentComment && !currentReview){
    return <div></div>
  }

  let link = 
          <Col md="12" className="form-group" hide={currentReport.objectType != "POST"}>
            <label htmlFor="feDescription">Opis</label>
            <FormTextarea rows="5" placeholder="Opis zgłoszeniaa" value={currentReport.content} onChange={updateContent} />
          </Col>

  return(
  <Container fluid className="main-content-container px-4 pb-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4 d-flex justify-content-between">
      <PageTitle sm="4" title="Szczegóły zgłoszenia" subtitle="Blog Reports" className="text-sm-left" />
      <Link to="/reports-list">
        <Button theme="accent" size="lg">          
          <i className="material-icons">file_copy</i> Powrót do listy
        </Button>
      </Link>

      <Link onClick={() => handleApproveReport}>
        <Button theme="accent" size="lg">          
          <i className="material-icons">file_copy</i> Usuń zgłoszoną treść
        </Button>
      </Link>

      <Link onClick={() => handleDeleteReport}>
        <Button theme="accent" size="lg">          
          <i className="material-icons">file_copy</i> Usuń zgłoszenie
        </Button>
      </Link>
    </Row>

    <Row>
      {/* Editor */}
      <Col lg="12" md="12">
        <Card small className="mb-3">
          <CardBody>
            <Form className="add-new-report">
                <Col md="12" className="form-group">
                  <label htmlFor="feDescription">Opis</label>
                  <FormTextarea rows="5"  size="lg" className="mb-3" placeholder="Tytuł zgłoszenia" defaultValue={currentReport.description} disabled="true"></FormTextarea>
                </Col>
                <Col md="12" className="form-group">
                  <label htmlFor="feDescription">Kategoria</label>
                  <FormTextarea size="lg" className="mb-3" defaultValue={currentReport.category} disabled="true"></FormTextarea>
                </Col>

                {currentReport.objectType == "POST" || currentReport.objectType == "COMMENT" ? 
                <Col md="12" className="form-group">
                  <Link to={"/edit-post/" + currentReport.objectId} style={{fontWeight: "bold"}} >Podejrzyj post</Link>
                </Col>
                : null}

                {currentReport.objectType == "REVIEW" ? 
                <Col md="12" className="form-group">
                  <Link to={"/user-profile/" + currentReview.reviewedUserId} style={{fontWeight: "bold"}}>Link do trenera</Link>
                </Col>
                : null}
                
                {currentReport.objectType == "REVIEW" ? 
                <Row className="ml-1 mr-1"> 
                  <Col md="9" className="form-group">
                    <label htmlFor="feDescription">Treść recenzji</label>
                    <FormTextarea value={currentReview.content} disabled="true"/>
                  </Col>
                  <Col md="3" className="form-group">
                    <label htmlFor="feDescription">Ocena</label>
                    <FormTextarea type="number" value={currentReview.grade} disabled="true"/>
                  </Col>
                </Row>
                : null}

                {currentReport.objectType == "COMMENT" ? 
                <Col md="12" className="form-group">
                  <label htmlFor="feDescription">Treść komentarza</label>
                  <FormTextarea rows="5" value={currentComment.content} onChange={updateContent}  disabled="true"/>
                </Col>
                : null}
            </Form>
          </CardBody>
          
        </Card>
      </Col>

    </Row>
  </Container>
)};

export default ReportInfo;
