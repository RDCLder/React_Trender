import React from 'react';
import { Row, Col, Card, Button } from "react-bootstrap";

class Comment extends React.Component {
    // constructor(props) {
    //     super(props);
        
    // }

    render() {
        return (
            <Card className="CommentCard">
                <Row>
                    <Col xs={11}>
                        <Card.Header>
                            <Card.Text>
                                {this.props.author} {String.fromCharCode(9679)} {this.props.time}
                            </Card.Text>
                        </Card.Header>
                        <Card.Body>
                            <pre>{this.props.body}</pre>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="primary">
                                Reply
                            </Button>
                            <Button variant="primary">
                                Share
                            </Button>
                            <Button variant="primary">
                                Save
                            </Button>
                            <Button variant="primary">
                                Report
                            </Button>
                        </Card.Footer>
                    </Col>
                    <Col xs={1}>
                        {/* Upvote/Downvote */}
                    </Col>
                </Row>
            </Card>
        );
    }
}

export default Comment;
