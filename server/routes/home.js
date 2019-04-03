const express = require("express");
const router = express.Router();
const db = require("../models");
const timeAgo = require("../functions/timeAgo");

router.get("/", (req, res) => {
    
    var results = {};

    db.topic
        .findAll({
            include: [
                {
                    model: db.community,
                    required: true
                },
                {
                    model: db.user,
                    required: true
                }
            ],
            order: [["updatedAt", "DESC"]]
        })
        .then(topic => {
            results["topics"] = topic;
            db.community.findAll({}).then(community => {
                if (topic.length > 0) {
                    let topicTimes = [];
                    
                    for (let i = 0; i < topic.length; i++) {
                        let timestamp = topic[i].dataValues.createdAt;
                        let topicTime = timeAgo(timestamp);
                        topicTimes.push(topicTime);
                    }

                    let data = {
                        topics: topic,
                        topicTimes: topicTimes,
                        communities: community,
                        exploreCommunity: community[Math.floor(Math.random() * community.length)].dataValues.name,
                    };

                    if (req.user) {
                        data["isLoggedIn"] = true,
                        data["user"] = req.user
                    }

                    res.send(data);
                } else {
                    res.send({})
                }
            });
        });
});

module.exports = router;
