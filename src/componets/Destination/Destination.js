import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import DestinationInfo from '../DestinationInfo/DestinationInfo';
import './Destination.css';
import fakeData from '../../fakeData/destination';

const Destination = () => {
    const [destination, setDestination] = useState(fakeData);
    return (
        <div className="destination">
            <Container className="main-container">
                <Row>
                    <Col lg={4}>
                        <h1 className="heading">COX'S BAZAR</h1>
                        <p className="text-justify">The major economic activity in Cox's Bazar is tourism. A number of hotels, guest houses, and motels have been built in the city and coastal region, and many people are involved in the service industry.[citation needed] Oysters, snails, pearls and their ornaments are very popular with tourists and people are involved in the transportation business for tourists.</p>
                        <Button variant="warning">Booking</Button>
                    </Col>
                    <Col lg={8} className="destination-container">
                        {
                            destination.map(destination=> <DestinationInfo destination={destination}></DestinationInfo>)
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Destination;