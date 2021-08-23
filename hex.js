
for (var i=0; i<20; i++) {
  let scale = Math.floor(Math.random() * 25 + 5);
  let xCoor = Math.floor(Math.random() * 400 +50);
  let yCoor = Math.floor(Math.random() * 400 +50);
  let colour = 'rgb(' + Math.floor(Math.random() * 254)+ ', ' + Math.floor(Math.random() * 254) + ', ' + Math.floor(Math.random() * 254) + ')';

  makeHex(scale, xCoor, yCoor, colour);
}

// makeHex(30, 75, 75, 'aliceblue');
// makeHex(40, 100, 100, 'white');

function makeHex(scale, xCoor, yCoor, colour) { // scale: int  xCoor: int  yCoor: int  colour: string with valid colour (name/rgb/hex)
  let x = 2 * scale;
  let y = Math.sqrt(3) * scale;

  let svg1 = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

  let hex = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');

  svg1.appendChild(hex);

  let corners = [[x/2,0], [x+x/2,0], [2*x,y], [x+x/2,2*y], [x/2,2*y], [0,y]];

  for (corner of corners) {
    var point = svg1.createSVGPoint();
    point.x = corner[0];
    point.y = corner[1];
    hex.points.appendItem(point);
  }

  svg1.setAttribute('width', 2 * x + 'px');
  svg1.setAttribute('height', 2 * y + 'px');
  svg1.style.position = 'absolute';
  svg1.style.left = xCoor + 'px';
  svg1.style.top = yCoor + 'px';

  hex.setAttribute('fill', colour);
  hex.setAttribute('stroke', 'lime');

  document.body.appendChild(svg1);
}
