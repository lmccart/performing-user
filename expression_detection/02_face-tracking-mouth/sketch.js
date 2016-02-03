// https://github.com/auduno/clmtrackr

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

  noStroke();
  textAlign(CENTER);
  textSize(30);
}

function draw() {
  clear();

  // get array of face marker positions [x, y] format
  var positions = ctracker.getCurrentPosition();

  if (positions) {
    var mouthTop = positions[60][1];
    var mouthBottom = positions[57][1];
    var mouthSize = mouthBottom - mouthTop;
  
    console.log(mouthSize);
    
    if (mouthSize > 10) {
      text("MOUTH OPEN", width/2, height/2);
    } else {
      text("MOUTH CLOSED", width/2, height/2);
    }
  }
}