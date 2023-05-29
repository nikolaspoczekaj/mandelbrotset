var minvalue = -0.5;
var maxvalue = 0.5;
var maxiterations = 100;

var minSlider;
var maxSlider;

var x = 0;

function setup() {
    createCanvas(800, 600);
    pixelDensity(1);

    minSlider = createSlider(-2.5, 0, -2.5, 0.01);
    maxSlider = createSlider(0, 2.5, 2.5, 0.01);
    
  }
  
function draw() {
    
    if (x < width){
      startMandelbrot();
      x++;
    }
    
  }