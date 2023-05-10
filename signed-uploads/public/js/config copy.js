const cloudinary = require('cloudinary').v2;

// Configure your cloud name, API key and API secret:

const myconfig = cloudinary.config({
  cloud_name: 'dlm17msda',
  api_key: '474599638779457',
  api_secret: 'MP0u9E3a7EleVaCt5JYQmWRpzjQ',
  secure: true
});

exports.myconfig = myconfig;