// Apply for a Wordnik key here: http://developer.wordnik.com/
// Wordnik API docs http://developer.wordnik.com/docs.html

var wordnik_key = 'WORDNIK_API_KEY';

// insert your Wordnik API info below
var getNounsUrl = 'http://api.wordnik.com/v4/words.json/randomWords?' +
                  'minCorpusCount=1000&minDictionaryCount=10&' +
                  'excludePartOfSpeech=proper-noun,proper-noun-plural,proper-noun-posessive,suffix,family-name,idiom,affix&' +
                  'hasDictionaryDef=true&includePartOfSpeech=adjective&limit=20&maxLength=12&' +
                  'api_key='+wordnik_key;

var getAdverbsUrl = 'http://api.wordnik.com/v4/words.json/randomWords?' +
                  'minCorpusCount=1000&minDictionaryCount=10&' +
                  'hasDictionaryDef=true&includePartOfSpeech=adverb&limit=20&maxLength=12&' +
                  'api_key='+wordnik_key;

var getVerbsUrl = 'http://api.wordnik.com/v4/words.json/randomWords?' +
                  'minCorpusCount=1000&minDictionaryCount=10&' +
                  'excludePartOfSpeech=proper-noun,proper-noun-plural,proper-noun-posessive,suffix,family-name,idiom,affix&' +
                  'hasDictionaryDef=true&includePartOfSpeech=verb&limit=20&maxLength=12&' +
                  'api_key='+wordnik_key;

var nouns;
var adverbs;
var verbs;
var x = 20;
var y = 40;

function preload() {
  nouns = loadJSON(getNounsUrl);
  adverbs = loadJSON(getAdverbsUrl);
  verbs = loadJSON(getVerbsUrl);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(30);

  // handle data
  for (var i=0; i<nouns.length; i++) {
    var n = nouns[i].word;
    var a = adverbs[i].word;
    var v = verbs[i].word;
    text(v+' the '+n+' '+a+'!', x, y);
    y += 40;
  }
}
