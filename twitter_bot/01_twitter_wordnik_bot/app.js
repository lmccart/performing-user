// Install twit node module: npm install twit
// Install wordnik node module: npm install node-restclient

// twit module docs: https://github.com/ttezel/twit
// Twitter developer info: https://dev.twitter.com/
// Twitter app keys: https://apps.twitter.com/

// Wordnik API docs http://developer.wordnik.com/docs.html

var client = require('node-restclient');

var Twit = require('twit');

// Set up Twitter credentials
var T = new Twit({
    consumer_key: 'Qq1AxRCXmvC5E8HZekwtGbyWW',
    consumer_secret: 'OW0kqapybrn9kg5Ioa4KDf6DTp4jo9YtFBimGG6EtFQcRkAd73',
    access_token: '14381020-yEBlElWMiY3nm673NCFNo3081h4OveXkGwuAZ0xaA',
    access_token_secret: 'nppZ4utN9zmW205TN4PyGPPY10p9iT2Sz6kXrWoWG7MOw'
});


var wordnik_key = 'bab9b9f121cb78489fc090f0e3d030f827ea4caceba5314f2';


// setInterval would tweet every N milliseconds
// setInterval(createTweet, 5000);
// createTweet();

function createTweet() {

  var getAdjsURL =  'http://api.wordnik.com/v4/words.json/randomWords?' +
                    'hasDictionaryDef=true&includePartOfSpeech=adjective&limit=2&' + 
                    'minCorpusCount=300&api_key='+wordnik_key;

  client.get(getAdjsURL, handleData);
}

function handleData(data) {
  data = JSON.parse(data);
  var tweet = 'I am feeling '+data[0].word+' and '+data[1].word+' right now.';   
  console.log(tweet);
  T.post('statuses/update', { status: tweet}, function(err, reply) {
    if (err) console.log('error: ' + err);
    else console.log('reply: ' + reply);
  });
}
