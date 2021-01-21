import React from "react";
import {useEffect, useState} from "react";
import { Container, Row, Col,Card, CardBody, Form, FormInput, Button, FormTextarea } from "shards-react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import {editReport} from "../redux/Reports/actions";
import ImageUploader from 'react-images-upload';

import PageTitle from "../components/common/PageTitle";
import Editor from "../components/add-new-report/Editor";

const ReportInfo = () => {
  
  const {reports} = useSelector(state => state.reports);
  const { id } = useParams();
  const [currentReport, setCurrentReport] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
      if (id) {
          const report = reports.find(report => report.id == parseInt(id));
          setCurrentReport(report);
      }
  }, [id, reports]);
  

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

  return(
  <Container fluid className="main-content-container px-4 pb-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4 d-flex justify-content-between">
      <PageTitle sm="4" title="Szczegóły zgłoszenia" subtitle="Blog Reports" className="text-sm-left" />
      <Link to="/reports-list">
        <Button theme="accent" size="lg"
          onClick={()=> dispatch(editReport(currentReport))}>
          
          <i className="material-icons">file_copy</i> Zatwierdź
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
                  <label htmlFor="feDescription">Tytuł</label>
                  <FormInput size="lg" className="mb-3" placeholder="Tytuł reporta" defaultValue={currentReport.title} onChange={updateTitle}></FormInput>
                </Col>
                <Col md="12" className="form-group">
                  <label htmlFor="feDescription">Opis</label>
                  <FormTextarea rows="5" placeholder="Opis reporta" value={currentReport.content} onChange={updateContent} />
                </Col>
              <ImageUploader
                        withIcon={true}
                        buttonText='Wybierz zdjęcie'
                        onChange={(files, pictures) => updateImage(files, pictures)}
                        imgExtension={['.jpg', '.gif', '.png', '.gif']}
                        singleImage={true}
                        maxFileSize={5242880}
                    />
              <img src={currentReport.image} style={{ width: "100%" }}/>
            </Form>
          </CardBody>
          
        </Card>
      </Col>

    </Row>
  </Container>
)};

export default ReportInfo;
