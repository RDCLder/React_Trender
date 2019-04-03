import React from 'react';
import { Card } from "react-bootstrap";
// import {Link} from "react-router-dom";

class ComMods extends React.Component {
    // constructor(props) {
    //     super(props);
        
    // }

    render() {

        // const mods = this.props.mods.map(mod => (
        //     <Link key={mod.id}>
        //         {mod.username}
        //     </Link>
        // ));

        return (
            <Card>
                <Card.Header>
                    <Card.Title>
                        MODERATORS
                    </Card.Title>
                </Card.Header>
                <Card.Body>
                    {/* {mods} */}
                </Card.Body>
            </Card>
        );
    }
}

export default ComMods;
