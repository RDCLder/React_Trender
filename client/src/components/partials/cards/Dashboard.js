import React from 'react';
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

class Dashboard extends React.Component {

    render() {
        return (
            <Card>
                <Card.Header>
                    <Card.Title>
                        DASHBOARD
                    </Card.Title>
                </Card.Header>
                <Card.Body>
                    <Link to="/">
                        <Button variant="primary" block>EXPLORE</Button>
                    </Link>
                    <Link to="/">
                        <Button variant="primary" block>DISCUSS A TOPIC</Button>
                    </Link>
                    <Link to="/">
                        <Button variant="primary" block>START A COMMUNITY</Button>
                    </Link>
                </Card.Body>
            </Card>
        );
    }
}

export default Dashboard;
