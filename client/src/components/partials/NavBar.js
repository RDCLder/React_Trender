import React from 'react';
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
    render() {
        return (
            <Navbar bg="primary" variant="dark" expand="lg">
                <Nav>
                    <Link to="/">
                        Home
                    </Link>
                    <Link to="/">
                        Community
                    </Link>
                    {/* <Nav.Link>Home</Nav.Link>
                    <Nav.Link>
                        {this.props.community}
                    </Nav.Link> */}
                </Nav>
                <Nav>
                    <Link to="/">HOT</Link>
                    <Link to="/">NEW</Link>
                    <Link to="/">TOP</Link>
                    <Link to="/">SKETCH</Link>
                </Nav>
                <Nav>
                    {/* {this.props.isLoggedIn === true
                        ? <div>You're logged in!</div>
                        : <div>
                            <Link to="/">
                                <Button variant="primary">Login</Button>
                            </Link>
                            <Link to="/">
                                <Button variant="secondary">Register</Button>
                            </Link>
                        </div>
                    } */}
                    <Link to="/">
                        <Button variant="primary">Login</Button>
                    </Link>
                    <Link to="/">
                        <Button variant="secondary">Register</Button>
                    </Link>
                </Nav>
            </Navbar>
        );
    }
}

export default NavBar;
