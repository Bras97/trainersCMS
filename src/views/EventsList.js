import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";
import { FaTrashAlt, FaPen } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

import PageTitle from "../components/common/PageTitle";
import { deleteEvent } from "../redux/Events/actions";
import * as eventsThunks from "../redux/Events/thunks";
import { useHttpErrorHandler } from '../utils/hooks/useHttpErrorHandler';

const EventsList = () => {

  const {events} = useSelector(state => state.events);
  const dispatch = useDispatch();

  const handler = useHttpErrorHandler();
  const { authorization } = useSelector(state => state.authorizationUsers);

  if(authorization != null && authorization.user != null && authorization.user.type == "USER"){
    return <Redirect to="/login" /> 
  }

  useEffect(() => {
    if (authorization != null && authorization.user != null && authorization.user._id != null) {
      
      if(authorization.user.type == "ADMIN"){
        dispatch(eventsThunks.fetchAllEvents())
      }
      else{
        dispatch(eventsThunks.fetchEvents(authorization.user._id, handler));
      }
    }
  }, [authorization]);

  const handleDeleteEvent = (selectedEvent) => {
    if (authorization != null && authorization.user != null && authorization.user._id != null) {
      console.log("SELECTED ID:", selectedEvent)
        dispatch(eventsThunks.deleteEventFromDatabase(selectedEvent));
      }
  };


  return(

  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Lista wydarzeń" subtitle="Blog Posts" className="text-sm-left" />
    </Row>

    {/* Default Light Table */}
    <Row>
      <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h4 className="m-0">Wydarzenia</h4>
            <h6 className="m-0 mt-1"><Link to="/add-new-event">Dodaj nowe wydarzenie</Link></h6>
          </CardHeader>
          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-light">
                <tr>
                  <th scope="col" className="border-0">
                    #
                  </th>
                  <th scope="col" className="border-0">
                    Nazwa
                  </th>
                  <th scope="col" className="border-0">
                    Data
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
                {events.map((event,idx) => 
                  <tr key={idx+1}>
                    <td>{idx+1}</td>
                    <td>{event.title}</td>
                    <td>{event.eventDetails.dateTime != null ? event.eventDetails.dateTime.toString() : null}</td>
                    <td style={{maxWidth: "400px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                    }}>{event.content}</td>
                    <td> <Link to={"edit-event/" + event._id}><FaPen /></Link> &ensp; <Link onClick={() =>handleDeleteEvent(event)}><FaTrashAlt /> </Link></td>
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

export default EventsList;
