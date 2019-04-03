import React from 'react';
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

class TrendCom extends React.Component {
    // constructor(props) {
    //     super(props);

    // }

    render() {
        let trending = [];
        const communities = this.props.communities
        for (let i = 0; i < 5; i++) {
            trending.push(
                <Card.Body key={communities[i].id}>
                <Row>
                    <Col xs={8}>
                        <Link to="/">
                            {communities[communities.length - i - 1].name.toUpperCase()}
                        </Link>
                        <br />
                        NUMBER FOLLOWERS
                    </Col>
                    <Col xs={4}>
                        <Link to="/">
                            <Button variant="primary">FOLLOW</Button>
                        </Link>
                    </Col>
                </Row>
                </Card.Body>
            );
        }

        return (
            <Card>
                <Card.Header>
                    <Card.Title>
                        TRENDING COMMUNITIES
                    </Card.Title>
                </Card.Header>
                {trending}
            </Card>
        );
    }
}

export default TrendCom;
