
const router = require("express").Router();
const controller = require("../controllers/socialDownloadController");

router.post("/facebookDownload",controller.downloadFb);
router.post("/youtubeDownload",controller.downloadYoutube);
router.post("/InstaStoriesDownload",controller.downloadInstagram);
router.post("/tikTokDownload",controller.downloadTikTok);
router.post("/twitterDownload",controller.downloadTwitter);


module.exports = router;