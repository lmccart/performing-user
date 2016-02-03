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
    var rEyeTop = positions[29][1];
    var rEyeBottom = positions[31][1];
    var rEyeSize = rEyeBottom - rEyeTop;
  
    console.log(rEyeSize);
    
    if (rEyeSize > 8) {
      text("EYES OPEN", width/2, height/2);
    } else {
      text("EYES CLOSED", width/2, height/2);
    }
  }
}