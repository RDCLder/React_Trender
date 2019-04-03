import React from 'react';
import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CreateComment from "./CreateComment";

class TopicBody extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collapse: false
        };
    }

    toggleCollapse() {
        this.setState({
            collapse: !this.state.collapse
        });
    }

    render() {

        let title;
        let body;
        let source;
        if (this.props.type === "media" || this.props.type === "link") {
            title = <a href={this.props.body} target="_blank" rel="noopener noreferrer">
                {this.props.title}
            </a>;
            if (this.props.type === "media") {
                body = <img src={this.props.body} alt="" />;
            }
            source = <a href={this.props.body} target="_blank" rel="noopener noreferrer">
                <Button variant="primary">
                    Source
                </Button>
            </a>;
        } else {
            title = this.props.title;
            body = this.props.body;
            source = <div></div>;
        }

        return (
            <Card>
                <Row>
                    <Col xs={11}>
                        <Card.Header>
                            <Row>
                                <Col>
                                    <Card.Title>
                                        {title}
                                    </Card.Title>
                                </Col>
                                <Col xs={1}>
                                    <i className="fas fa-chevron-down"
                                        onClick={() => this.toggleCollapse()}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    Posted by {this.props.author} {String.fromCharCode(9679)} {this.props.time}
                                </Col>
                            </Row>
                        </Card.Header>
                        <Card.Body>
                            {body}
                        </Card.Body>
                        <Card.Footer>
                            <Row>
                            <Col>
                                <CreateComment />
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
                            </Col>
                            <Col xs={2}>
                                {source}
                            </Col>
                            </Row>
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

export default TopicBody;
