//Displays and handles the colour palette.
function ColourPalette() {
	//a list of web colour strings
	this.colours = ["black", "silver", "gray", "white", "maroon", "red", "purple",
		"orange", "pink", "fuchsia", "green", "lime", "olive", "yellow", "navy",
		"blue", "teal", "aqua"
	];
    this.colours = [];
    
	//make the start colour be black
	this.selectedColour = "black";

	var self = this;

	var colourClick = function() {
		//remove the old border
		var current = select("#" + self.selectedColour + "Swatch");
		current.style("border", "0");

		//get the new colour from the id of the clicked element
		var c = this.id().split("Swatch")[0];

		//set the selected colour and fill and stroke

		self.selectedColour = c;
		fill(c);
		stroke(c);
        window.activeColor = c;
		//add a new border to the selected colour
		this.style("border", "2px solid blue");
	}

    
	//load in the colours
	this.loadColours = function() {
		//set the fill and stroke properties to be black at the start of the programme
		//running
		//fill(this.colours[0]);
		//stroke(this.colours[0]);
        
        
        //add color text option above colorPicker.
        
        
        //This gives the option to select a veriety of different colors.
        let ip = createInput();
        ip.position(50, 840);
        ip.elt.type = 'color';
        ip.size(80,25);
        ip.input(function() {
            let c = this.value();
            console.log(c);
            self.selectedColour = c;            
            window.activeColor = c;
            
            //fill(c);
            //stroke(c);
            
            c = color(window.activeColor);

            c.setAlpha(lineTransparencyBox.value())
            stroke(c);
            fill(c);
        })
        
        //select(".colourPalette").child(ip);
        
		//for each colour create a new div in the html for the colourSwatches
		for (var i = 0; i < this.colours.length; i++) {
			var colourID = this.colours[i] + "Swatch";

			//using JQuery add the swatch to the palette and set its background colour
			//to be the colour value.
			var colourSwatch = createDiv()
			colourSwatch.class('colourSwatches');
			colourSwatch.id(colourID);

			select(".colourPalette").child(colourSwatch);
			select("#" + colourID).style("background-color", this.colours[i]);
			colourSwatch.mouseClicked(colourClick)
		}

		//select(".colourSwatches").style("border", "2px solid blue");
	};
	//call the loadColours function now it is declared
	this.loadColours();
}
