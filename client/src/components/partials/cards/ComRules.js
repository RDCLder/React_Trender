import React from 'react';
import { Card } from "react-bootstrap";

class ComRules extends React.Component {
    // constructor(props) {
    //     super(props);
        
    // }

    render() {
        return (
            <Card>
                <Card.Header>
                    <Card.Title>
                        RULES
                    </Card.Title>
                </Card.Header>
                <Card.Body>
                    <ol>
                        <li>
                            <div>Anything goes.</div>
                        </li>
                        <li>
                            <div>Have fun!</div>
                        </li>
                    </ol>
                </Card.Body>
            </Card>
        );
    }
}

export default ComRules;
