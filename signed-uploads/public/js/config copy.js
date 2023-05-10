const cloudinary = require('cloudinary').v2;

// Configure your cloud name, API key and API secret:

const myconfig = cloudinary.config({
  cloud_name: '< cloud name >',
  api_key: '< Api key >',
  api_secret: '< Api Secret >',
  secure: true
});

exports.myconfig = myconfig;