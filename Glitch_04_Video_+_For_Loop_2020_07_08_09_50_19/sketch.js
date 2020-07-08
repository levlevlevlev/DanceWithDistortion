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
//var snapshots = [];

function preload() {
  
}

function setup() {
  //background(51);
  createCanvas(320, 240);
  video = createCapture(VIDEO);
  video.size(320,240);
  //image(video, 0, 0);
  frameRate(2);
  button = createButton('snap');
 // button.mousePressed(takesnap);
}

//function takesnap() {
  //snapshots.push(video.get());
//}

function draw() {
  image(video, 0, 0);
  
  for (var z = 1; z < 40; z++){

  var x = random(width);
  var y = random(height);

  var a = round(x + random(-10, 10));
  var b = round(y + random(-10, 10));
  
  var w = 20;
  var h = 20;
  
  set(a, b, get(x, y, w, h));
  
  }
  
}

function keyReleased() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
  if (keyCode == DELETE || keyCode == BACKSPACE) {
    clear();
    //image(video, 0, 0);
  }
}
