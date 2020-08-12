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
var h, i, j; // x, y, z values
var hpos, ipos; // xpos, ypos
var nblocks;
var sblocks;

function preload() {
  
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  video = createCapture(VIDEO);
  video.size(displayWidth,displayHeight);
  frameRate(5);
  video.remove();
  hpos = 200;
  ipos = 200;
  h = 0;
  i = 0;
}

function draw() {
  
  //flipping video to get mirror effect
  
  translate(video.width, 0);
  scale(-1, 1);
  image(video, 0, 0);
  
  //image feedback process
  
  for (var z = 0; z < nblocks; z++) { //nblocks = number of blocks being taken

    var x = random(displayWidth);
    var y = random(displayHeight);

    var a = round(x + random(-10, 10));
    var b = round(y + random(-10, 10));
  
    
    var w = sblocks; //sblocks = size of blocks being taken
    var g = sblocks;
  
   set(a, b, get(x, y, w, g));
  }

 if ((h >= 1)|| (h <= -1)) { //accelerometer x data determines size of blocks
    sblocks = abs(h)*100; 
   
 }else if ((i >= 1) || (i <= -1)) { //accelerometer y data determines number of blocks
    nblocks = 500 - abs(i)*50;
   
 }else if (h = 0){
    sblocks = 50;
   
 }else if (i = 0){
    nblocks = 550;
   
 }

  //accelerometer 
  
  hpos = hpos + h;
  ipos = ipos - i;

  if(hpos > 400) { hpos = 0; }
  if(hpos < 0) { hpos = 400; }
  if(ipos > 400) { ipos = 0; }
  if(ipos < 0) { ipos = 400; }

  // display accelerometer variables
  
 // fill(0);
 // noStroke();
 // text("x: " + h, 25, 25);
 // text("y: " + i, 25, 50);
 // text("z: " + j, 25, 75); 
  
  noStroke();
  rect(0 , (displayHeight/(1.6)),  displayWidth, (displayHeight-(displayHeight/(1.5833333))));  
  
}
  

  // accelerometer Data
window.addEventListener('devicemotion', function(e) 
{
  // get accelerometer values
  h = parseInt(e.accelerationIncludingGravity.x);
  i = parseInt(e.accelerationIncludingGravity.y);
  j = parseInt(e.accelerationIncludingGravity.z); 
});

  

