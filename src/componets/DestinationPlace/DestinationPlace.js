import React, { useState } from 'react';
import {  Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData/destination';
import fakeDataInfo from '../../fakeDataInfo/booking';
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import './DestinationPlace.css';

const DestinationPlace = () => {
    const {destinationId} = useParams();
    const destination = fakeData.find(destination=> destination.id === destinationId);
    const [place, setPlace] = useState(fakeDataInfo);
    return (
        <Container>
            <hr/>
            <Row>
                <Col lg={6}>
                    <h4>Stay in {destination.name}</h4>
                    {
                        place.map(place=> <PlaceDetails place={place}></PlaceDetails>)
                    }
                </Col>
            </Row>
        </Container>
    );
};

export default DestinationPlace;