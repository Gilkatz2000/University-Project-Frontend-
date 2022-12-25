//global variables that will store the toolbox colour palette
//amnd the helper functions
var toolbox = null;
var colourP = null;
var helpers = null;
let lineTransparencyBox;
let lineWidthBox;

function setup() {

	//create a canvas to fill the content div from index.html
	canvasContainer = select('#content');
	var c = createCanvas(canvasContainer.size().width, canvasContainer.size().height);
	c.parent("content");

	//create helper functions and the colour palette
	helpers = new HelperFunctions();
	colourP = new ColourPalette();
    window.activeColor = 0; // initialize color value
    
	//create a toolbox for storing the tools
	toolbox = new Toolbox();

	//add the tools to the toolbox.
	toolbox.addTool(new FreehandTool());
	toolbox.addTool(new LineToTool());
	toolbox.addTool(new SprayCanTool());
	toolbox.addTool(new mirrorDrawTool());
    toolbox.addTool(new extendingShape());
    toolbox.addTool(new eraser());
	background(255);
    
    createControls();

}

function draw() {
	//call the draw function from the selected tool.
	//hasOwnProperty is a javascript function that tests
	//if an object contains a particular method or property
	//if there isn't a draw method the app will alert the user
	if (toolbox.selectedTool.hasOwnProperty("draw")) {
		toolbox.selectedTool.draw();
	} else {
		alert("it doesn't look like your tool has a draw method!");
	}


}


function createControls() {
    //Defines Line Width
    let lineWidth = createDiv('Line Width');
    lineWidth.style('font-size', '20px');
    lineWidth.style('color', '#f0f0f0');
    lineWidth.position(200, 810);
    
    //Defines Line Transparency 
    let lineTransparency = createDiv('Line Transparency');
    lineTransparency.style('font-size', '20px');
    lineTransparency.style('color', '#f0f0f0');
    lineTransparency.position(375, 810);    
    
     //Color Text
    let Color = createDiv('Color');
    Color.style('font-size', '20px');
    Color.style('color', '#f0f0f0');
    Color.position(60, 810);
    
    //Text option for Line Width
     lineWidthBox = createSelect();
    lineWidthBox.position(200, 840);
    lineWidthBox.size(100);
    lineWidthBox.option('1');
    lineWidthBox.option('2');
    lineWidthBox.option('3');
    lineWidthBox.option('4');
    lineWidthBox.option('5');
    lineWidthBox.option('6');
    lineWidthBox.option('7');
    lineWidthBox.option('8');
    lineWidthBox.option('9');
    lineWidthBox.option('10');
    lineWidthBox.option('11');
    lineWidthBox.option('12');
    lineWidthBox.option('13');
    lineWidthBox.option('14');
    lineWidthBox.option('15');
    lineWidthBox.option('16');
    lineWidthBox.option('17');
    lineWidthBox.option('18');
    lineWidthBox.option('19');
    lineWidthBox.option('20');
    lineWidthBox.changed(function() {
        //alert(lineWidthBox.value());
        strokeWeight(lineWidthBox.value());
    });
    
     //Text option for Line Transparency
    // alpha value is between 0 and 255
    lineTransparencyBox = createSelect(); // start with 255 as default value
    lineTransparencyBox.position(400, 840);
    lineTransparencyBox.size(100);
    lineTransparencyBox.option('0');
    lineTransparencyBox.option('20');
    lineTransparencyBox.option('40');
    lineTransparencyBox.option('60');
    lineTransparencyBox.option('80');
    lineTransparencyBox.option('100');
    lineTransparencyBox.option('120');
    lineTransparencyBox.option('160');
    lineTransparencyBox.option('180');
    lineTransparencyBox.option('200');
    lineTransparencyBox.option('220');
    lineTransparencyBox.option('240');
    lineTransparencyBox.option('255');
    lineTransparencyBox.value('255')
    lineTransparencyBox.changed(function() {
        //console.log(lineTransparencyBox.value());
        var c = color(window.activeColor);
        
        c.setAlpha(lineTransparencyBox.value())
        stroke(c);
        fill(c);
    });
}




