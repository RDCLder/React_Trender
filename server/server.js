// Dependencies
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(require("./routes/login"));
app.use(require("./routes/register"));
app.use(require("./routes/home"));
app.use(require("./routes/community"));
app.use(require("./routes/topic"));
app.use(require("./routes/logout"));
app.use(require("./routes/authenticate"));
app.use(require("./routes/account"));
app.use(require("./routes/createTopic"));
app.use(require("./routes/createCommunity"));
app.use((req, res) => {
    
    if (!req.user) { 
        var isLoggedIn = false;
    }
    else {
        var isLoggedIn = true;
    }

    if (req.accepts("html")) {
        res.render("404", {
            pageTitle: "404",
            pageID: "404",
            pageType: "error",
            url: req.url,
            isLoggedIn: isLoggedIn
        });
        return;
    }
    if (req.accepts("json")) {
        res.render("404", {
            pageTitle: "404",
            pageID: "404",
            pageType: "error",
            url: req.url,
            isLoggedIn: isLoggedIn
        });
        return;
    }
    res.type("txt").send("Not Found");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`The server is running on port ${ PORT }`);
});