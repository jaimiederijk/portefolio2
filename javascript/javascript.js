var htmlElements = {
    body: document.querySelector('body'),
    header: document.querySelector('header'),
    content : document.querySelectorAll('#portfoliobody > section'),
    main: document.querySelector('main'),
    testbackground: document.querySelector('#test')

};

var app = {
    init: function() {
        // app.checkView();
        // routes.init();
        //this.createContentId();
        //lines.init();
        // view.slider();
        svgStuff.createRect();

    },
    createContentId : function() {
    	for (var i = 0; i < htmlElements.content.length; i++) {
    		var num = i+1;
    		htmlElements.content[i].id = "content" + num;
    	};
    }
};

var routes = {
    init: function() {
        routie('', function() {
            // pages.displayPage('cardboardmovie',false);

            // cardToIconstl.play();


        });


    }
}

var svgStuff = {
  createRect : function() {
    var bodyWidth = htmlElements.body.offsetWidth;
    var rect = {};
    var rectFill = {};
    var rectHor = {};
    var rectHorFill = {};
    var draw = SVG(htmlElements.testbackground).size(bodyWidth, 1000)
    var numberOfBars = 7;
    var yo = bodyWidth/numberOfBars
    //var xArray = [-100,-100,-100,-100,-100,-100]
    //var yArray = [100, 300, 450, 700, -150, 1100]


    for (var i = 0; i < numberOfBars; i++) {

      rect[i] = draw.rect(bodyWidth+500, 50).move(-100, i*yo).rotate(i*5).attr({fill: "#a0a0a0"})
      rectHor[i] = draw.rect(50, bodyWidth+500).move(i*yo, -100).rotate(i*5).attr({fill: "#a0a0a0"})
    }
    // seperated for so these ar all on top
    for (var b = 0; b < numberOfBars; b++) {
      rectFill[b] = draw.rect(bodyWidth+500, 44).move(-100, b*yo+1).rotate(b*5).attr({fill: "#fff"})
      rectHorFill[b] = draw.rect(44 ,bodyWidth+500).move(b*yo+5, -100).rotate(b*5).attr({fill: "#fff"})
      //rect[b].animate(4000).rotate(360).loop()
      rectFill[b].animate(2000).move(-100, b*yo+5).loop()
      rectHorFill[b].animate(2000).move(b*yo+1, -100).loop()
    }

    //draw.animate().rotate(45).loop()
  //  var rect = draw.rect(bodyWidth, 50).move(0, 100).attr({fill: "#a0a0a0"})
    //var rect2 = draw.rect(bodyWidth, 50).move(0, 100).rotate(45).attr({fill: "#a0a0a0"})
  //  var rectfill2 = draw.rect(bodyWidth, 44).move(0, 103).attr({fill: "#fff"})
//    var rectfill = draw.rect(bodyWidth, 44).move(0, 103).rotate(45).attr({fill: "#fff"})
  }
}

var lines = {

	linePositionRight: {
		line1:window.innerWidth-(window.innerWidth/20),
		line2:400,
		line3:200,
		line4:200,
		line5:200,
		line6:200,
		line7:200,
		line8:200,
		line9:200,
		line10:200
	},
	linePosition: {
		line1:0

	},
	createLines : function(numberoflines) {
		for (var i = 0; i < numberoflines; i++) {
			var x = i+1;
			lines.createLine(x);
		};
	},
	createLine : function(x) {
		var heightOffset = 20;
		var horOffset = 40;
		var x = x;
		var div = document.createElement("DIV");//create line element

		var divHor = document.createElement("DIV");

		var currentLineStart = lines.linePosition["line"+x];//read start point
		var height = lines.lineHeight(x)+heightOffset; // ask how long

		var nextNumber = Number(x)+1; // what number is next content block
		var newPos = "line"+nextNumber; //create next content string //-lines.linePositionRight["line"+x]
		var lineHeight = height - currentLineStart;
		var width = window.innerWidth-lines.lineRightPos(x);
		var horLineRightStart = htmlElements.main.clientWidth-lines.linePositionRight["line"+x] + "px";

		if (lines.linePositionRight["line"+x]<lines.lineRightPos(x)+horOffset) {
			var t = lines.lineRightPos(x)+horOffset;
			horLineRightStart = htmlElements.main.clientWidth - t + "px";
		};

		div.classList.add("verline");
		// div.id="line"+x;
		div.style.top = lines.linePosition["line"+x]+"px";
		div.style.height = lineHeight+"px";
		div.style.left = lines.linePositionRight["line"+x] + "px";

		divHor.classList.add("horline");
		// divHor.id="line"+x;
		divHor.style.top = height+"px";
		divHor.style.width = width+"px";
		divHor.style.right =  horLineRightStart;

		lines.linePosition[newPos] = height;
		lines.linePositionRight[newPos] = lines.lineRightPos(x)+horOffset;

		document.body.appendChild(div);
		document.body.appendChild(divHor);
	},
	lineRightPos : function(contentId){
		var content = document.querySelector('#content'+ contentId +' article h2').getBoundingClientRect();
		var right = content.right;

		return right;
	},
	lineHeight : function(contentId) {
		var content = document.querySelector('#content'+ contentId +' article').getBoundingClientRect();
		var height = content.top+window.scrollY;


		return height;
	},
	resetLines : function () {
		var verLines = document.querySelectorAll(".verline");
		var horLines = document.querySelectorAll(".horline");

		lines.removeElement(verLines);
		lines.removeElement(horLines);
		lines.linePositionRight.line1 = window.innerWidth-(window.innerWidth/20);

		lines.createLines(htmlElements.content.length);
	},
	removeElement: function (elements) {
		for (var i = 0; i < elements.length; i++) {
			elements[i].parentNode.removeChild(elements[i]);
		};
	},

	init : function() {
		// window.onload = function(e) {
			window.addEventListener('resize', function(event){
			  lines.resetLines();
			});
			lines.createLines(htmlElements.content.length);
		// }


	}
}


app.init()
