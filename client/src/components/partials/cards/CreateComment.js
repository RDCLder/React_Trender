import React from 'react';
import { Container, Row, Modal, Button, Alert } from "react-bootstrap";

class CreateComment extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            body: null,
            show: false,
            alertMessage: null,
            alertErrorShow: false
        };
    }

    changeBody(e) {
        this.setState({
            body: e.target.value
        });
    }

    handleCreate() {
        if (this.state.body === null) {
            this.setState({
                alertMessage: "Your comment can't be blank!",
                alertErrorShow: true
            });
            setTimeout(() => {
                this.setState({ alertErrorShow: false });
            }, 2500);
        }
        else if (this.state.body.length > 2000) {
            this.setState({
                alertMessage: "Your comment can't be over 2000 characters!",
                alertErrorShow: true
            });
            setTimeout(() => {
                this.setState({ alertErrorShow: false });
            }, 2500);
        }
        else {
            // Dispatch action to update comment to db
            console.log("Comment success!");
            this.setState({
                body: null,
                show: false,
                alertMessage: null,
                alertErrorShow: false
            });
        }
    }

    handleShow() {
        this.setState({
            show: true
        });
    }

    handleClose() {
        this.setState({
            body: null,
            show: false
        });
    }

    render() {
        return (
            <>
                <Button variant="primary"
                    className="CreateCommentButton"
                    onClick={() => this.handleShow()}
                >
                    Comment
                </Button>

                <Modal show={this.state.show}
                    onHide={this.handleClose}
                    centered
                    size="lg"
                >
                    <Modal.Header>
                        <Modal.Title>Create Comment</Modal.Title>
                        <i className="fas fa-times modalDismiss" onClick={() => this.handleClose()}></i>
                    </Modal.Header>
                    <Modal.Body>
                        <Container id="AddCardModalContainer">
                            <Row>
                                <h5>Text</h5>
                            </Row>
                            <Row>
                                <textarea type="text"
                                    placeholder="Share your thoughts!"
                                    rows="5"
                                    onChange={(e) => this.changeBody(e)}
                                    className="p-1"
                                />
                            </Row>
                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={() => this.handleCreate()}>
                            Create
                        </Button>
                        <Button variant="secondary" onClick={() => this.handleClose()}>
                            Cancel
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Alert
                    variant="danger"
                    show={this.state.alertErrorShow}
                    className="alert"
                >
                    <Alert.Heading>
                        Error
                        <i
                            className="fas fa-times alertDismiss"
                            onClick={() => this.setState({ alertErrorShow: false })}
                        />
                    </Alert.Heading>
                    <p>{this.state.alertMessage}</p>
                </Alert>
            </>
        );
    }
}

export default CreateComment;
