var config = {};

config.couchdb = {};
config.twilio = {};

config.couchdb.url = 'https://node263.cloudant.com';
config.couchdb.port = 443; //443
config.couchdb.username = 'node263';
config.couchdb.password = 'node263';
config.disableTwilioSigCheck = true;
config.twilio.sid = 'AC3d2e088b91c4a5f9db6c98546bfee219';
config.twilio.key = 'f5d4dfa30bf6168c7b898e810c7075e7';

module.exports = config;