// Apply for a Wordnik key here: http://developer.wordnik.com/
// Wordnik API docs http://developer.wordnik.com/docs.html

var wordnik_key = 'WORDNIK_API_KEY';

// insert your Wordnik API info below
var getNounsURL = 'http://api.wordnik.com/v4/words.json/randomWords?' +
                  'minCorpusCount=1000&minDictionaryCount=10&' +
                  'excludePartOfSpeech=proper-noun,proper-noun-plural,proper-noun-posessive,suffix,family-name,idiom,affix&' +
                  'hasDictionaryDef=true&includePartOfSpeech=noun&limit=20&maxLength=12&' +
                  'api_key='+wordnik_key;

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
