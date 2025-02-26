import React from "react";
import ProfileCard from "./profilecard";
import { Container, Row, Col } from "react-bootstrap";

const ProfileList = ({ people }) => {
    return (
        <Container>
            <Row className="justify-content-center">
                {people.map((person, index) => (
                    <Col key={index} xs={12} md={4} className="d-flex justify-content-center">
                        <ProfileCard {...person} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ProfileList;
