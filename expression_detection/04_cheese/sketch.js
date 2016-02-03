// https://github.com/auduno/clmtrackr

var ctracker;
var emotionData;
var ec;

var buzzer;

function preload() {
  buzzer = loadSound('buzzer.mp3');
}

function setup() {

  // setup camera capture
  var videoInput = createCapture(VIDEO);
  videoInput.size(400, 300);
  videoInput.position(0, 0);

  // setup canvas
  var cnv = createCanvas(400, 300);
  cnv.position(0, 0);

  // setup tracker
  ctracker = new clm.tracker();
  ctracker.init(pModel);
  ctracker.start(videoInput.elt);

  ec = new emotionClassifier();
  ec.init(emotionModel);
  emotionData = ec.getBlank();

  noStroke();
  fill(0, 255, 0);
}

function draw() {
  clear();
  var cp = ctracker.getCurrentParameters();
  var er = ec.meanPredict(cp);

  if (er.length == 4) {
    var happy = er[3].value;
    console.log(happy);
    var h = height*happy;
    rect(0, height - h, 40, h);
    
    // play sound
    if (happy < 0.1) {
      if (buzzer.isPlaying() == false) {
        buzzer.loop();
      }
    } else {
      buzzer.stop();
    }
  }
}