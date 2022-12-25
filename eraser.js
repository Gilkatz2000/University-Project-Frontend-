//a tool for drawing straight lines to the screen. Allows the user to preview
//the a line to the current mouse position before drawing the line to the 
//pixel array.
function eraser(){
    this.name = "eraser";
	this.icon = "assets/eraser.jpg";
    
    this.draw = function() {
        if (mouseIsPressed) {
            fill(255)
            
            // if should set stroke to 255 when mouse is pressed
            // revert back to old color when released
            stroke(255)
            strokeWeight(1);
            //debugger
            let w = this.eraseWidthBox.value();
            ellipse(mouseX,mouseY,w);
        }
        
        
        stroke(window.activeColor)
        strokeWeight(lineWidthBox.value());
    };
    
    this.unselectTool = function() {
        this.eraserWidth.style('display', 'None');
        this.eraseWidthBox.style('display', 'None');
    };
    
    this.populateOptions = function() {
        this.eraserWidth.style('display', 'block');
        this.eraseWidthBox.style('display', 'block');
    };

    //Defines Eraser Width Text 
    this.eraserWidth = createDiv('Eraser Width');
    this.eraserWidth.style('font-size', '20px');
    this.eraserWidth.style('color', '#f0f0f0');
    this.eraserWidth.position(595, 810); 
    this.eraserWidth.style('display', 'None'); // hidden at start
    
    this.eraseWidthBox = createSelect();
    this.eraseWidthBox.position(600, 840);
    this.eraseWidthBox.size(100);
    this.eraseWidthBox.option('1');
    this.eraseWidthBox.option('2');
    this.eraseWidthBox.option('3');
    this.eraseWidthBox.option('4');
    this.eraseWidthBox.option('5');
    this.eraseWidthBox.option('6');
    this.eraseWidthBox.option('7');
    this.eraseWidthBox.option('8');
    this.eraseWidthBox.option('9');
    this.eraseWidthBox.option('10');
    this.eraseWidthBox.option('11');
    this.eraseWidthBox.option('12');
    this.eraseWidthBox.option('13');
    this.eraseWidthBox.option('14');
    this.eraseWidthBox.option('15');
    this.eraseWidthBox.option('16');
    this.eraseWidthBox.option('17');
    this.eraseWidthBox.option('18');
    this.eraseWidthBox.option('19');
    this.eraseWidthBox.option('20');
    this.eraseWidthBox.value('10'); // default value
    this.eraseWidthBox.style('display', 'None'); // hidden at start
    this.eraseWidthBox.changed(function() {
        //alert(lineWidthBox.value());
        //strokeWeight(this.eraseWidthBox.value());
        
        console.log(this.value());
    });    

}


