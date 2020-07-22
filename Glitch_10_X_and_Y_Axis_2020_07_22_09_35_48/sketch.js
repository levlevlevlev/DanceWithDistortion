// P_4_1_2_02
//
// Generative Gestaltung – Creative Coding im Web
// ISBN: 978-3-87439-902-9, First Edition, Hermann Schmidt, Mainz, 2018
// Benedikt Groß, Hartmut Bohnacker, Julia Laub, Claudius Lazzeroni
// with contributions by Joey Lee and Niels Poldervaart
// Copyright 2018
//
// http://www.generative-gestaltung.de
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * image feedback process.
 *
 * KEYS
 * del, backspace      : clear screen
 * s                   : save png
 */
'use strict';

var video;
var button;
var h, i, j;
var hpos, ipos;
var nblocks;
var sblocks;
//let nblocks = 100;
//var snapshots = [];

function preload() {
  
}

function setup() {
  //background(51);
  createCanvas(displayWidth,displayHeight);
  video = createCapture(VIDEO);
  video.size(displayWidth,displayHeight);
  //image(video, 0, 0);
  frameRate(5);
  button = createButton('snap');
 // button.mousePressed(takesnap);
  video.remove();
  hpos = 200;
  ipos = 200;
  h = 0;
  i = 0;
}

//function takesnap() {
  //snapshots.push(video.get());
//}

function draw() {
  //background(220);

  //move image by the width of image to the left
  translate(video.width, 0);
  //then scale it by -1 in the x-axis
  //to flip the image
  scale(-1, 1);
  //draw video capture feed as image inside p5 canvas
  image(video, 0, 0);
  
  for (var z = 0; z < nblocks; z++) {

    var x = random(displayWidth);
    var y = random(displayHeight);

    var a = round(x + random(-10, 10));
    var b = round(y + random(-10, 10));
  
    var w = sblocks; //displayWidth/0.0625;
   var g = sblocks;//displayWidth/0.0625;
  
   set(a, b, get(x, y, w, g));
    }

 if (((h >= 1) && (h<3)) || ((h <= -1) && (h > -3))) {
    sblocks = 100;
   
  }else if (((h >= 3) && (h<5)) || ((h <= -3) && (h> -5))) {
    
    sblocks = 50;
  
  }else if (((h >= 5) && (h<7)) || ((h <= -5) && (h> -7))) {
    
    sblocks = 350;
  
  }else if (((h >= 7) && (h<9)) || ((h <= -7) && (h> -9))) {
    
    sblocks = 25;
  
  }else if (((h >= 9) && (h<=10)) || ((h <= -9) && (h>= -10))) {
    
    sblocks = 1000;
  
  }else{
    
    for (var z = 1; z < 1; z++){

    var x = random(displayWidth);
    var y = random(displayHeight);

    var a = round(x + random(-10, 10));
    var b = round(y + random(-10, 10));
  
    var w = 1; //displayWidth/0.0625;
    var g = 1;//displayWidth/0.0625;
  
    set(a, b, get(x, y, w, g));
    }
  }
  
  if (((i >= 1) && (i<3)) || ((i <= -1) && (i > -3))) {
    nblocks = 50;
   
  }else if (((i >= 3) && (i<5)) || ((i <= -3) && (i> -5))) {
    
    nblocks = 100;
  
  }else if (((i >= 5) && (i<7)) || ((i <= -5) && (i> -7))) {
    
    nblocks = 400;
  
  }else if (((i >= 7) && (i<9)) || ((i <= -7) && (i> -9))) {
    
    nblocks = 700;
  
  }else if (((i >= 9) && (i<=10)) || ((i <= -9) && (i>= -10))) {
    
    nblocks = 1000;
  
  }else{
    
    for (var z = 1; z < 1; z++){

    var x = random(displayWidth);
    var y = random(displayHeight);

    var a = round(x + random(-10, 10));
    var b = round(y + random(-10, 10));
  
    var w = 1; //displayWidth/0.0625;
    var g = 1;//displayWidth/0.0625;
  
    set(a, b, get(x, y, w, g));
    }
  }
    
    
  hpos = hpos + h;
  ipos = ipos - i;

  // wrap ellipse if over bounds
  if(hpos > 400) { hpos = 0; }
  if(hpos < 0) { hpos = 400; }
  if(ipos > 400) { ipos = 0; }
  if(ipos < 0) { ipos = 400; }

  // draw ellipse
 // fill(255, 0, 0);
 // ellipse(hpos, ipos, 25, 25);

  // display variables
  fill(0);
  noStroke();
  text("x: " + h, 25, 25);
  text("y: " + i, 25, 50);
  text("z: " + j, 25, 75); 
}
  

function keyReleased() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
  if (keyCode == DELETE || keyCode == BACKSPACE) {
    clear();
    //image(video, 0, 0);
  }
}

  // accelerometer Data
window.addEventListener('devicemotion', function(e) 
{
  // get accelerometer values
  h = parseInt(e.accelerationIncludingGravity.x);
  i = parseInt(e.accelerationIncludingGravity.y);
  j = parseInt(e.accelerationIncludingGravity.z); 
});

  

