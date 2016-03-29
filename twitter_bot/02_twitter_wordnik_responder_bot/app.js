// Install twit node module: npm install twit
// Install restclient node module: npm install node-restclient

// twit module docs: https://github.com/ttezel/twit
// Twitter developer info: https://dev.twitter.com/
// Twitter app keys: https://apps.twitter.com/

// Wordnik API docs http://developer.wordnik.com/docs.html

var restclient = require('node-restclient');

var Twit = require('twit');

var T = new Twit({
    consumer_key: 'Qq1AxRCXmvC5E8HZekwtGbyWW',
    consumer_secret: 'OW0kqapybrn9kg5Ioa4KDf6DTp4jo9YtFBimGG6EtFQcRkAd73',
    access_token: '14381020-yEBlElWMiY3nm673NCFNo3081h4OveXkGwuAZ0xaA',
    access_token_secret: 'nppZ4utN9zmW205TN4PyGPPY10p9iT2Sz6kXrWoWG7MOw'
});


var wordnik_key = 'bab9b9f121cb78489fc090f0e3d030f827ea4caceba5314f2';

var wordnik_key = 'WORDNIK_API_KEY';

var max_id = 1;

// setInterval(runResponder, 10000);
runResponder();

function runResponder() {
  T.get('statuses/mentions_timeline', {count:100, since_id:max_id}, function (e,r) {
    // console.log(r)
    // respondToTweet(r[0]);
    if (r) {
      for(var i=0;i<r.length;i++) {
        console.log(r[i].text);
        if (r[i].id > max_id && r[i].user.screen_name !== '@laurmccarthy') {
          max_id = r[i].id;
          respondToTweet(r[i]);
        }
      }
    }
  });
}

function respondToTweet(t) {
  
  var getAdvsURL =  'http://api.wordnik.com/v4/words.json/randomWords?' +
                    'hasDictionaryDef=true&includePartOfSpeech=adverb&limit=1&' + 
                    'minCorpusCount=300&api_key='+wordnik_key;


  restclient.get(getAdvsURL, function(data) {
    data = JSON.parse(data);

    var user = t.user.screen_name;
    var tweet = '@'+user+' I agree '+data[0].word+'.';
    T.post('statuses/update', { status: tweet, in_reply_to_status_id:t.id}, function(err, reply) {
      if (err) console.log('error: ' + err);
      else console.log('reply: ' + reply);
    });
    console.log('TWEEET::::: '+tweet);
  });

}


