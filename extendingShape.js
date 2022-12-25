function extendingShape(){
    this.name = "extendingShape";
	this.icon = "assets/Extending.jpg";


	//this changes in the jquery click handler. So storing it as
	//a variable self now means we can still access it in the handler
	var self = this;

	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;
    
    
    // not required
    //self.rectangleShape = "rectangle"
    //self.ellipseShape = "ellipse"
    
    self.currentShape = "rectangle";

	//draws the line to the screen 
	this.draw = function(){

		//only draw when mouse is clicked
		if(mouseIsPressed){
			//if it's the start of drawing a new line
			if(startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
				//save the current pixel Array
				loadPixels();
			}

			else{
				//update the screen with the saved pixels to hide any previous
				//line between mouse pressed and released
				updatePixels();
				//draw the line
				
                
              
                //extending rectangle shape
                if(self.currentShape === "rectangle") {
                    
                    noFill()
                    // rect(x, y, w, h)
                    rect(startMouseX, startMouseY, mouseX - startMouseX, mouseY - startMouseY);    
                }
                 //extending ellipse shape
                else if(self.currentShape === "ellipse") {
                    
                    noFill()
                    // ellipse(x, y, w, h)
                    ellipse(startMouseX, startMouseY, mouseX - startMouseX, mouseY - startMouseY);
                }
                
                 //extending triangle shape
                else if(self.currentShape === "triangle") {
                    
                    noFill()
                    /*
                    var x1 = mouseX * 1.1;
                    var y1 = mouseY;
                    
                    var x2 = mouseX;
                    var y2 = startMouseY;
                    
                    var x3 = startMouseX;
                    var y3 = startMouseY;
                    */
                    var x1 = startMouseX
                    var y1 = startMouseY;
                    
                    var x2 = mouseX;
                    var y2 = startMouseY;
                    
                    var x3 = startMouseX + (mouseX - startMouseX) / 2;
                    var y3 = mouseY
                    
                    
                    //These text show the cordinates of the triangle shape.
                    //text('1: ' + x1 + ', ' + y1, x1, y1);
                    //text('2: ' + x2 + ', ' + y2, x2, y2);
                    //text('3: ' + x3 + ', ' + y3, x3, y3);
                    triangle(x1, y1, x2, y2, x3, y3);
                }
                
                
            }

        }
    
		else if(drawing){
			//save the pixels with the most recent line and reset the
			//drawing bool and start locations
			loadPixels();
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};




	//when the tool is deselected update the pixels to just show the drawing and
	//hide the line of symmetry. Also clear options
	this.unselectTool = function() {
		updatePixels();
		//clear options
		select(".options").html("");
	};

	//adds a button and click handler to the options area. When clicked
	//toggle the line of symmetry between horizonatl to vertical
	this.populateOptions = function() {
		select(".options").html(
			"<div style='margin-left: 250px; margin-top: 20px;'><button id='rectangleButton'>Rectangle</button>"
            + "<button id='ellipseButton'>Ellipse</button>"
            + "<button id='triangleButton'>Triangle</button></div>");
		// 	//click handler
		select("#rectangleButton").mouseClicked(function() {
			self.currentShape = "rectangle";
            console.log(self.currentShape);
            updateBorder(self.currentShape);
		});
        select("#ellipseButton").mouseClicked(function() {
			self.currentShape = "ellipse";
            console.log(self.currentShape);
            updateBorder(self.currentShape);
		});
         select("#triangleButton").mouseClicked(function() {
			self.currentShape = "triangle";
            console.log(self.currentShape);
             updateBorder(self.currentShape);
		});
	};

    
}


//Creates option for red color border around selected (shape text).  
function updateBorder(currentShape) {
    document.getElementById('rectangleButton').style.borderColor = '';
    document.getElementById('ellipseButton').style.borderColor = '';
    document.getElementById('triangleButton').style.borderColor = '';
    switch(currentShape) {
            case 'rectangle':
                document.getElementById('rectangleButton').style.borderColor = 'red';
                break;
            case 'ellipse':
                document.getElementById('ellipseButton').style.borderColor = 'red';
                break;
            case 'triangle':
                document.getElementById('triangleButton').style.borderColor = 'red';
                break;        
            
    }
    
}