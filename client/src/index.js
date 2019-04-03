import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers/reducer";
// import Base from "./Base";

// Routes
import Home from "./components/Home";
import Community from "./components/Community";
import Topic from "./components/Topic";
// import CreateCommunity from "./components/CreateCommunity";
// import CreateTopic from "./components/CreateTopic";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import Account from "./components/Account";
// import NotFound from "./components/NotFound";

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            {/* <Base> */}
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/community/:communityName/main" component={Community}></Route>
                <Route path="/community/:communityName/:topicID" component={Topic}></Route>
                {/* <Route path="/createCommunity" component={CreateCommunity}></Route> */}
                {/* <Route path="/createTopic" component={CreateTopic}></Route> */}
                {/* <Route path="/login" component={Login}></Route> */}
                {/* <Route path="/register" component={Register}></Route> */}
                {/* <Route path="/account/:username" component={Account}></Route> */}
                {/* <Route path="/notfound" component={NotFound}></Route> */}
            </Switch>
            {/* </Base> */}
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
