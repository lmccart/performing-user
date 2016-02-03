// Apply for a Wordnik key here: http://developer.wordnik.com/
// Wordnik API docs http://developer.wordnik.com/docs.html

var wordnik_key = 'bab9b9f121cb78489fc090f0e3d030f827ea4caceba5314f2';

// insert your Wordnik API info below
var getNounsURL = 'http://api.wordnik.com/v4/words.json/randomWords?' +
                  'minCorpusCount=1000&minDictionaryCount=10&' +
                  'excludePartOfSpeech=proper-noun,proper-noun-plural,proper-noun-posessive,suffix,family-name,idiom,affix&' +
                  'hasDictionaryDef=true&includePartOfSpeech=noun&limit=5&maxLength=12&' +
                  'api_key='+wordnik_key;

var getWordsUrl = 'http://api.wordnik.com:80/v4/words.json/randomWords?hasDictionaryDef=false&includePartOfSpeech=noun&excludePartOfSpeech=proper-noun&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&limit=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';

var data;
var x = 0;
var y = 0;

function preload() {
  data = loadJSON(getNounsURL);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(30);
  stroke(255);
  fill(255);
  textAlign(CENTER);
  background(0);

  // handle data
  
  for (var i=0; i<data.length; i++) {
    var word = data[i].word;
    var newX = random(width);
    var newY = random(height);
    text(word, newX, newY);
    line(x, y, newX, newY);
    x = newX;
    y = newY;
  }
}
