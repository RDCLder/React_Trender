import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./partials/NavBar.js";
// import SideBar from "./partials/SideBar.js";
import TopicBody from "./partials/cards/TopicBody.js";
import Comment from "./partials/cards/Comment";
import ComDesc from "./partials/cards/ComDesc";
import ComRules from "./partials/cards/ComRules";
import ComMods from "./partials/cards/ComMods";

class Topic extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pageTitle: null,
            pageID: null,
            community: null,
            topic: null,
            topicTime: null,
            comments: [],
            commentTimes: null,
            isLoggedIn: false,
            user: null
        }
    }

    componentDidMount() {
        const communityName = this.props.match.params.communityName;
        const topicID = this.props.match.params.topicID;
        fetch(`http://localhost:8080/community/${communityName}/${topicID}`)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    pageTitle: res.pageTitle,
                    pageID: res.pageID,
                    community: res.community,
                    topic: res.topic,
                    topicTime: res.topicTime,
                    comments: res.comments,
                    commentTimes: res.commentTimes,
                    isLoggedIn: res.isLoggedIn,
                    user: res.user
                });
            })
    }

    render() {

        const comments = this.state.comments.map((comment, i) => (
            <Comment key={comment.id}
                author={comment.user.username}
                time={this.state.commentTimes[i]}
                body={comment.body}
            />
        ));

        return (
            <div>
                <NavBar />
                {/* <SideBar /> */}

                <Container fluid="true">
                    <Row>
                        <Col xs={1}></Col>
                        <Col xs={6} className="TopicMain">
                            {this.state.topic !== null
                                ? <TopicBody
                                    title={this.state.topic.title}
                                    author={this.state.topic.user.username}
                                    body={this.state.topic.body}
                                    type={this.state.topic.type}
                                    time={this.state.topicTime}
                                />
                                : <div></div>
                            }
                            {comments}
                        </Col>
                        <Col xs={4}>
                            {this.state.community !== null
                                ? <div>
                                    <ComDesc
                                        name={this.state.community.name}
                                        description={this.state.community.description}
                                    />
                                    <ComRules />
                                    <ComMods />
                                </div>
                                : <div>Community Not Found</div>
                            }
                        </Col>
                        <Col xs={1}></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Topic;
