
const axios = require("axios");
require("dotenv").config();


exports.downloadFb= (req,res)=>{
    const link=req.body.link
    console.log(link)

    const options = {
      method: 'GET',
      url: 'https://facebook-reel-and-video-downloader.p.rapidapi.com/app/main.php',
      params: {url: link},
      headers: {
        'X-RapidAPI-Key': process.env.RAPID_FB_API_KEY,
        'X-RapidAPI-Host': 'facebook-reel-and-video-downloader.p.rapidapi.com'
      }
    };
      
      axios.request(options).then(function (response) {
          console.log(response.data);
          res.status(200).json({
            message:"Record found ,Ready to download your facebook video",
            result:response.data
          })
      }).catch(function (error) {
          console.error(error);
          res.status(404).json({
            message:"Record  not found ",
            result:error.message
          })
      });
}

exports.downloadYoutube= (req,res)=>{
    const link=req.body.link
    console.log(link)

    

        const options = {
        method: 'GET',
        url: 'https://socialdownloader.p.rapidapi.com/api/youtube/video',
        params: {video_link: link},
        headers: {
         'X-RapidAPI-Key': process.env.RAPID_API_KEY,
        'X-RapidAPI-Host': 'socialdownloader.p.rapidapi.com'
        }
};

        axios.request(options).then(function (response) {
	    console.log(response.data);
        res.status(200).json({
            message:"Record found ,Ready to download your youtube video",
            result:response.data
          })
        }).catch(function (error) {
            res.status(404).json({
                message:"Record not found ",
                result:error.message
              })
	    console.error(error);
});
}

exports.downloadInstagram= (req,res)=>{
    const link=req.body.link
    console.log(link)

    const options = {
      method: 'GET',
      url: 'https://instagram-story-downloader-media-downloader.p.rapidapi.com/index',
      params: {url: link},
      headers: {
        'X-RapidAPI-Key': process.env.RAPID_INSTA_API_KEY,
        'X-RapidAPI-Host': 'instagram-story-downloader-media-downloader.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
        console.log(response.data);
        res.status(200).json({
            message:"Record found ,Ready to download your instagram video",
            result:response.data
          })
    }).catch(function (error) {
        console.error(error);
        res.status(404).json({
            message:"Record not found ",
            result:error.message
          })
    });
}
exports.downloadTikTok = (req,res)=>{

  const link= req.body.link
  console.log(link)
  const options = {
    method: 'GET',
    url: 'https://tiktok-downloader-download-videos-without-watermark1.p.rapidapi.com/media-info/',
    params: {link: link},
    headers: {
      'X-RapidAPI-Key': process.env.RAPID_TIKTOK_API_KEY,
      'X-RapidAPI-Host': 'tiktok-downloader-download-videos-without-watermark1.p.rapidapi.com'
    }
  };
  

  axios.request(options).then(function (response) {
    console.log(response.data);
    res.status(200).json({
        message:"Record found ,Ready to download your tiktok video",
        result:response.data
      })
}).catch(function (error) {
    console.error(error);
    res.status(404).json({
        message:"Record not found ",
        result:error.message
      })
});
}

exports.downloadTwitter = (req,res)=>{

  const link= req.body.link
  console.log(link)

  const result = link.substring(link.lastIndexOf('/')+1)
  console.log(result)
  var matches = result.match(/(\d+)/);
  if(matches){
    var tweetId = matches[0]
  }

  const options = {
    method: 'POST',
    url: 'https://twitter154.p.rapidapi.com/tweet/details',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': process.env.RAPID_TWITTER_API_KEY,
      'X-RapidAPI-Host': 'twitter154.p.rapidapi.com'
    },
    data: {"tweet_id": tweetId}
  };
  

  axios.request(options).then(function (response) {
    console.log(response.data);
    res.status(200).json({
        message:"Record found ,Ready to download your twitter video",
        result:response.data
      })
}).catch(function (error) {
    console.error(error);
    res.status(404).json({
        message:"Record not found ",
        result:error.message
      })
});
}


