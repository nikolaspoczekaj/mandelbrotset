var minvalue = -0.5;
var maxvalue = 0.5;
var maxiterations = 100;

var minSlider;
var maxSlider;

var minLabel;
var maxLabel;

var x = 0;

function setup() {
  minSlider = createSlider(-2.5, 0, -0.75, 0.01);
  minLabel = createDiv('')
  maxSlider = createSlider(0, 2.5, 0.75, 0.01);
  maxLabel = createDiv('') 

  createCanvas(500, 500);
  pixelDensity(1);

}
  
function draw() {
    
    if (x < width){
      startMandelbrot();
      x++;
    }

    if(minvalue !== minSlider.value() || maxvalue !== maxSlider.value()){
      clear()
      x = 0;
      minvalue = minSlider.value()
      maxvalue = maxSlider.value()
    }
    minLabel.html("min value: " + minvalue);
    maxLabel.html("max value: " + maxvalue);
    
    
  }