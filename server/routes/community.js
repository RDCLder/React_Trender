const express = require("express");
const router = express.Router();
const db = require("../models/");
const timeAgo = require("../functions/timeAgo");

router.get("/community", (req, res) => {
    res.redirect("/");
});

router.get("/community/:communityName/main", (req, res) => {

    let communityName = req.params.communityName;
    let results = {};

    db.community.findAll({
        where: { name: communityName }
    })
        .then(community => {
            results["community"] = community;
            db.topic.findAll({
                where: { community_id: community[0].dataValues.id },
                include: [
                    { model: db.user, required: true }
                ],
                order: [["updatedAt", "DESC"]]
            })
                .then(topics => {
                    let topicTimes = [];
                    
                    for (let i = 0; i < topics.length; i++) {
                        let topicStamp = topics[i].dataValues.createdAt;
                        topicTimes.push(timeAgo(topicStamp));
                    }

                    let data = {
                        pageTitle: communityName,
                        pageID: communityName,
                        community: community[0].dataValues,
                        topics: topics,
                        topicTimes: topicTimes,
                        isLoggedIn: false
                    }

                    if (req.user) {
                        data["isLoggedIn"] = true;
                        data["user"] = req.user;
                    }

                    res.send(data);
                })
        })
        .catch(() => {
            res.redirect("/notfound");
        })
});

module.exports = router;