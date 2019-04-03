import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./partials/NavBar.js";
// import SideBar from "./partials/SideBar.js";
import TopicPreview from "./partials/cards/TopicPreview.js";
import Dashboard from "./partials/cards/Dashboard";
import TrendCom from "./partials/cards/TrendCom";

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pageTitle: "Home",
            pageID: "home",
            pageType: "home",
            topics: [],
            topicTimes: null,
            communities: null,
            exploreCommunity: null,
            isLoggedIn: false
        }
    }

    componentDidMount() {
        fetch(`http://localhost:8080/`)
            .then(res => res.json())
            .then(res => {
                // console.log(res);
                this.setState({
                    topics: res.topics,
                    topicTimes: res.topicTimes,
                    communities: res.communities,
                    exploreCommunity: res.exploreCommunity
                });
            })
    }

    render() {

        return (
            <div>
                <NavBar />
                {/* <SideBar /> */}

                <Container fluid="true">
                    <Row>
                        <Col xs={1}></Col>
                        <Col xs={6} className="TopicMain">
                            {this.state.topics.length <= 0
                                ? <div></div>
                                : this.state.topics.map(topic => (
                                    <TopicPreview key={topic.id}
                                        title={topic.title}
                                        body={topic.body}
                                        author={topic.user.username}
                                        community={topic.community.name}
                                        communityID={topic.community_id}
                                        authorID={topic.author_id}
                                        type={topic.type}
                                    />
                                ))
                            }
                        </Col>
                        <Col xs={4}>
                            {this.state.topics.length > 0
                                ? <div>
                                <Dashboard explore={this.state.exploreCommunity}/>
                                <TrendCom communities={this.state.communities}/>
                                </div>
                                : <div></div>
                            }
                        </Col>
                        <Col xs={1}></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Home;
