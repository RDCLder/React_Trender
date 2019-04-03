import React from "react";
import { Row, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class ComDesc extends React.Component {
    // constructor(props) {
    //     super(props);

    // }

    render() {
        return (
            <Card>
                <Card.Header>
                    <Card.Title>{this.props.name.toUpperCase()} COMMUNITY</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Row className="justify-content-center">NUMBER FOLLOWERS</Row>
                    <Row>
                        <pre>{this.props.description}</pre>
                    </Row>
                    <Link to="/">
                        <Button variant="primary" block>
                            FOLLOW
                        </Button>
                    </Link>
                    <Link to="/">
                        <Button variant="primary" block>
                            DISCUSS
                        </Button>
                    </Link>
                    <Link to="/">
                        <Button variant="primary" block>
                            START A COMMUNITY
                        </Button>
                    </Link>
                </Card.Body>
            </Card>
        );
    }
}

export default ComDesc;
