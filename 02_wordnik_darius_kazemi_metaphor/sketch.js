// Apply for a Wordnik key here: http://developer.wordnik.com/
// Wordnik API docs http://developer.wordnik.com/docs.html

var wordnik_key = 'bab9b9f121cb78489fc090f0e3d030f827ea4caceba5314f2';//'WORDNIK_API_KEY';

var statement =   "";

// insert your Wordnik API info below
var getNounsUrl = "http://api.wordnik.com/v4/words.json/randomWords?" +
                  "minCorpusCount=1000&minDictionaryCount=10&" +
                  "excludePartOfSpeech=proper-noun,proper-noun-plural,proper-noun-posessive,suffix,family-name,idiom,affix&" +
                  "hasDictionaryDef=true&includePartOfSpeech=noun&limit=20&maxLength=12&" +
                  "api_key="+wordnik_key;

var getAdjectivesUrl =  "http://api.wordnik.com/v4/words.json/randomWords?" +
                  "hasDictionaryDef=true&includePartOfSpeech=adjective&limit=20&" + 
                  "minCorpusCount=100&api_key="+wordnik_key;


var nouns;
var adjectives;
var x = 20;
var y = 40;

function preload() {
  nouns = loadJSON(getNounsUrl);
  adjectives = loadJSON(getAdjectivesUrl);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  textSize(30);
  
  for (var i=0; i<nouns.length; i+=2) {
    statement = "";
    fill(random(255), random(255), random(255));
    handleNouns(nouns[i], nouns[i+1]);
    handleAdjectives(adjectives[i], adjectives[i+1]);
    text(statement, x, y);
    y += 40;
  }
}


function handleNouns(noun1, noun2) {
  // grab the first letter or each word
  first1 = noun1.word.substr(0,1);
  first2 = noun2.word.substr(0,1);

  // figure out the proper article for each word
  var article1 = "a";
  if (first1 === 'a' ||
      first1 === 'e' ||
      first1 === 'i' ||
      first1 === 'o' ||
      first1 === 'u') {
    article1 = "an";
  }

  var article2 = "a";
  if (first2 === 'a' ||
      first2 === 'e' ||
      first2 === 'i' ||
      first2 === 'o' ||
      first2 === 'u') {
    article2 = "an";
  }

  // pick a random connecting word
  var connector = "is";

  var n = floor(random(5));
  if (n == 0) {
    connector = "of";
  } else if (n == 1) {
    connector = "is";
  } else if (n == 2) {
    connector = "is";
  } else if (n == 3) {
    connector = "considers";
  } else if (n == 4) {
    connector = "is";
  }

  statement += article1 + " " + noun1.word + " " + connector + " " + article2 + " " + noun2.word;
}

function handleAdjectives(adj1, adj2) {
  var connector = " and";

  var n = floor(random(5));
  if (n == 0) {
    connector = ", not";
  } else if (n == 1) {
    connector = ", yet";
  } else if (n == 2) {
    connector = " but";
  } else if (n == 3) {
    connector = ",";
  } else if (n == 4) {
    connector = ", but not";
  }

  output = adj1.word + connector + " " + adj2.word;
  statement = statement + ": " + output;
}    