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
