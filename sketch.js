//the beginning of our query to Giphy API
var endpoint = "https://api.giphy.com/v1/gifs/search?";
var apiKey = "&api_key=J4Y1Q5bymaFxkGj0Y4LKHoIgZb2Exl9H&q=";
var q = "addicted to social media";
var s = "falling down";

var input, button, button1, button2;
var canvas;
var gifImg;
var gifDisplay;
var A;

let see;
let be; 
let pg;



let symmetry = 6;   
let angle = 360 / symmetry;

function setup() {
// background(127, 200, 8);
  canvas = createCanvas(500,700);
  canvas.parent('sketch-holder');
  angleMode(DEGREES);
  

 
button = select('#submit');
input = select('#search');
button.mousePressed(gifAsk);
button1 = select('#addic');
button1.mousePressed(gifTell);
button2 = select('#screen');
button2.mousePressed(giffall);

}


function gifAsk(){
  var url = endpoint + apiKey + input.value();
  loadJSON(url, getGiphy);
  // canvas = createCanvas(500,700);
  pg = createGraphics(300, 250);
  // canvas.parent('sketch-holder');
  background(127, 200, 8);
 see = true;
}
function gifTell(){
  var url = endpoint + apiKey + q;
  loadJSON(url, getGiphy);
  // canvas = createCanvas(500,700);
  // canvas.parent('sketch-holder');
  // background(127, 0, 8);
  
  be = true;
}
function giffall(){
  var url = endpoint + apiKey + s;
  loadJSON(url, getGiphy);
}
function getGiphy(gif){
  //gif.data is the array
  var foundGif = random(gif.data).images.original.url;
   //   //BEFORE adding one to the page.
 if(gifImg != null)
  {
    gifImg.remove();
  }

  gifImg = createImg(foundGif);

gifImg.parent("gif-area");

}
//addicted to social media


/**TODO: Write separate functions that are called when user
 *        clicks each button. These functions should create 
 *        the URL pointing to the Giphy API.
 */

//this function is similar to the one we wrote in our tutorial


/*add as many functions as necessary
function functionName1() {
  
}
function functionName2() {
  
} 
*/

//The behavior of the canvas will take place in this draw() function

function draw(){
if (be == true){
  
  translate(width / 2, height / 2);
  
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let mx = mouseX - width / 2;
    let my = mouseY - height / 2;
    let pmx = pmouseX - width / 2;
    let pmy = pmouseY - height / 2;
    
    if (mouseIsPressed) {
      for (let i = 0; i < symmetry; i++) {
        rotate(angle);
        line(mx, my, pmx, pmy);
        strokeWeight(2);
        stroke(25, 255, 13);
        push();
        scale(1, -1);
        line(mx, my, pmx, pmy);
        pop();
      }

    }
    }
}

if (see== true){

  fill(0, 12);
  rect(80, 0, width, height);
  fill(255);
  // noStroke();
  ellipse(mouseX, mouseY, 60, 60);

  pg.background(51);
  pg.noFill();
  pg.ellipse(mouseX - 150, mouseY - 75, 60, 60);

  //Draw the offscreen buffer to the screen with image()
  image(pg, 150, 75);
}
}









    

  //game of life

    /**TODO: Use if() statements to specify each action that is taken
     *       on the canvas, based on which button is pressed.
     *        HINT: use boolean variables to keep track of which button
     *        is pressed.
    */
