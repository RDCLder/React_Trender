import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./partials/NavBar.js";
// import SideBar from "./partials/SideBar.js";
import TopicPreview from "./partials/cards/TopicPreview.js";
import ComDesc from "./partials/cards/ComDesc";
import ComRules from "./partials/cards/ComRules";
import ComMods from "./partials/cards/ComMods";

class Community extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pageTitle: null,
            pageID: null,
            pageType: "community",
            community: null,
            topics: [],
            topicTimes: null,
            isLoggedIn: false,
            user: null
        }
    }

    componentDidMount() {
        const communityName = this.props.match.params.communityName;
        fetch(`http://localhost:8080/community/${communityName}/main`)
            .then(res => res.json())
            .then(res => {
                // console.log(res);
                this.setState({
                    topics: res.topics,
                    topicTimes: res.topicTimes,
                    community: res.community,
                    isLoggedIn: res.isLoggedIn,
                    user: res.user
                });
            })
            .catch(error => console.error(error))
    }

    render() {
        return (
            <div>
                <NavBar />
                {/* <SideBar /> */}

                <Container fluid="true">
                    <Row>
                        <Col xs={1}></Col>
                        <Col xs={6} className="CommunityMain">
                            {this.state.topics.length <= 0
                                ? <div></div>
                                : this.state.topics.map(topic => (
                                    <TopicPreview key={topic.id}
                                        title={topic.title}
                                        body={topic.body}
                                        author={topic.user.username}
                                        community={this.state.community.name}
                                        communityID={topic.community_id}
                                        authorID={topic.author_id}
                                        type={topic.type}
                                    />
                                ))
                            }
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

export default Community;
