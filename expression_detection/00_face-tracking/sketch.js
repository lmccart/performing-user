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
}

function draw() {
  clear();

  // get array of face marker positions [x, y] format
  var positions = ctracker.getCurrentPosition();

  for (var i=0; i<positions.length; i++) {
    var p = positions[i];
    ellipse(p[0], p[1], 4, 4);
  }
}