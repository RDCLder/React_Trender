import React from 'react';
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

class TopicPreview extends React.Component {
    // constructor(props) {
    //     super(props);

    // }

    render() {

        let source;
        if (this.props.type === "media") {
            source = <a href={this.props.body} target="_blank" rel="noopener noreferrer">
                <Button variant="primary">
                    Source
                </Button>
            </a>;
        } else {
            source = <div></div>;
        }

        return (
            <div>
                <Card className="card m-2 TopicPreview">
                    <Card.Header>
                        <Card.Title>
                            {this.props.title}
                        </Card.Title>
                        <Card.Text>
                            By {this.props.author} in {this.props.community}
                        </Card.Text>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text className="cardText">
                            {this.props.body}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Link to="/">
                            <Button variant="primary">
                                Comment
                            </Button>
                        </Link>
                        <Link to="/">
                            <Button variant="primary">
                                Share
                            </Button>
                        </Link>
                        <Link to="/">
                            <Button variant="primary">
                                Save
                            </Button>
                        </Link>
                        <Link to="/">
                            <Button variant="primary">
                                Report
                            </Button>
                        </Link>
                        {source}
                    </Card.Footer>
                </Card>
            </div>
        );
    }
}

export default TopicPreview;
