function positionBottem () {
	var clientWidth = document.body.clientWidth,
		headerHeight = document.getElementById("nameheader").clientHeight,
		imageWidth=2200,
		imageHeight=349,
		bottemHeader=document.getElementById("bottemheader"),
		heightdifference=headerHeight-imageHeight,
		positionDifference=clientWidth-imageWidth;
		//nameHeader=document.getElementById("nameheader");

	bottemHeader.style.top="" + heightdifference + "px";
	bottemHeader.style.left="" + positionDifference + "px";
	bottemHeader.style.width=""
}

positionBottem();

//mouse animate
	// var nameHeader = document.querySelector('header section');
	// var header = document.querySelector('header');
	// var allSectionImg = document.querySelectorAll('.portfolio section');
	// var allSectionArticle = document.querySelectorAll('section section > h2');

	// var nameSpaceOut = function() {
	// 	nameHeader.classList.remove("bounceInLeft");
	// 	nameHeader.classList.add("bounceOutRight");
	// 	setTimeout(function(){ 
	// 		nameHeader.classList.remove("bounceOutRight");
	// 		nameHeader.classList.add("bounceInLeft");		 
	// 	}, 3000);
	// }
	// var nameSpaceIn = function() {

	// }
	// var titelHover = function(section){
	// 	if (colapseSkillsBool==false) {
	// 		allSectionArticle[section].classList.remove("fadeOutDown");
	// 		allSectionArticle[section].classList.add("fadeInDown");
	// 	};
	// }
	// var titelRemove = function(section){
	// 	if (colapseSkillsBool==false) {
	// 		allSectionArticle[section].classList.remove("fadeInDown");
	// 		allSectionArticle[section].classList.add("fadeOutDown");
	// 	};
	// }

	// allSectionImg[0].addEventListener("mouseover", function() { titelHover(0); });
	// allSectionImg[1].addEventListener("mouseover", function() { titelHover(1); });
	// allSectionImg[2].addEventListener("mouseover", function() { titelHover(2); });
	// allSectionImg[3].addEventListener("mouseover", function() { titelHover(3); });
	// allSectionImg[4].addEventListener("mouseover", function() { titelHover(4); });
	// allSectionImg[5].addEventListener("mouseover", function() { titelHover(5); });

	// allSectionImg[0].addEventListener("mouseout", function() { titelRemove(0); });
	// allSectionImg[1].addEventListener("mouseleave", function() { titelRemove(1); });
	// allSectionImg[2].addEventListener("mouseleave", function() { titelRemove(2); });
	// allSectionImg[3].addEventListener("mouseleave", function() { titelRemove(3); });
	// allSectionImg[4].addEventListener("mouseleave", function() { titelRemove(4); });
	// allSectionImg[5].addEventListener("mouseleave", function() { titelRemove(5); });

	// nameHeader.addEventListener("mouseover", function() { nameSpaceOut(); });
	// header.addEventListener("mouseleave", function() { nameSpaceIn(); });
//skills 
	// var allSkills = document.querySelectorAll('.skills section p');
	// var skillHexImg = document.querySelectorAll('.skillhexagon svg');
	// var skillHexImgPoly = document.querySelectorAll('.skillhexagon svg polygon');  
	// var skillHexPause = document.querySelector('.skillhexpause');
	// var skillInterval=setInterval(function () {skillsHexagon()}, 3500);

	// var whichSkill=0;
	// var rotateSkill= 0;
	// var color=[ "9D9A9B", "1A1F0F", "9F9D9F","262E38","6F6B65","776E69"];
	// 

	// var skillsHexagon = function() {
	// 	var shifted = color.shift();
	// 	color.push(shifted);
		// if (whichSkill>skillHexImgPoly.length - 1) {
		// 	whichSkill=0;
		// 	color=[595660, "B8AD95", 643333,"1C417B","3B3B3C","3dbc91"];

		// }  
		// for (var i = skillHexImgPoly.length - 1; i >= 0; i--) {
		// 	skillHexImgPoly[i].style.fill="#"+color[i]//"rgb("+color[0]+","+color[1]+","+color[2]+")";
		// 	// allSkills[i].classList.add("hidden")
		// };
		//console.log(shifted)
		// allSkills[whichSkill].classList.remove("hidden");
		//skillHexImg.style.transform="rotate("+rotateSkill+"deg)";
		
		
		
		
	//}
	// var pauseBool=false;
	// var pause = function () {
	// 	if (pauseBool==false) {
	// 		clearInterval(skillInterval);
			
	// 		skillHexPause.innerHTML = "Unpause"
	// 		pauseBool=true;
	// 	} 
	// 	else if (pauseBool==true) {
	// 		skillsHexagon();
	// 		skillInterval=setInterval(function () {skillsHexagon()}, 1500);
	// 		skillHexPause.innerHTML = "Pause"
	// 		pauseBool=false;
	// 	};
	// }

	// skillHexPause.addEventListener("click",function(){pause();});
	// skillsHexagon();

//expand portfolio section
// var skillSection = document.querySelector('.skills');
// var portSectionButton = document.querySelectorAll('.portfolio section > h2');
// var sectionArticle = document.querySelectorAll('.portfolio section article');
// var aboutMeSection = document.querySelector('.aboutme');
// var headerTitle = document.querySelector('.portfolio header h2');
// var expandIcon = document.querySelectorAll(".portfolio section img:nth-of-type(1)");

// var backgroundSpace = document.querySelector('.backgroundspace');

// allSectionImg[0].addEventListener("click",function(){colapseSkills(0,"Concerto Webshop");});
// allSectionImg[1].addEventListener("click",function(){colapseSkills(1,"Steen, papier, schaar multiplayer");});
// allSectionImg[2].addEventListener("click",function(){colapseSkills(2,"Mijn ontmantel installatie");});
// allSectionImg[3].addEventListener("click",function(){colapseSkills(3,"CMD huistijl website");});
// allSectionImg[4].addEventListener("click",function(){colapseSkills(4,"Space Chase javascript game");});
// allSectionImg[5].addEventListener("click",function(){colapseSkills(5,"De Rijk Computerhulp");});

// var colapseSkillsBool= false;
// var colapseSkills = function(section,title) {
// 	if (colapseSkillsBool==false) {
// 		for (var i = allSectionImg.length - 1; i >= 0; i--) {
// 			allSectionImg[i].classList.add("hidden")
// 		};
// 		expandIcon[section].src="images/close.svg";
// 		allSectionImg[section].classList.remove("hidden");
// 		allSectionImg[section].classList.add("growsection");
// 		skillSection.classList.add("skillcollapse");
// 		aboutMeSection.classList.add("skillcollapse");
// 		backgroundSpace.style.height="350px";
// 		sectionArticle[section].classList.remove("hidden");
// 		allSectionArticle[section].classList.remove("fadeInDown");
// 		allSectionArticle[section].classList.add("fadeOutDown");
// 		headerTitle.innerHTML = title;
// 		colapseSkillsBool=true;
// 	} else if (colapseSkillsBool==true) {
// 		for (var i = allSectionImg.length - 1; i >= 0; i--) {
// 			allSectionImg[i].classList.remove("hidden")
// 		};
// 		allSectionImg[section].classList.remove("growsection");
// 		skillSection.classList.remove("skillcollapse");
// 		expandIcon[section].src="images/expand.svg";
// 		aboutMeSection.classList.remove("skillcollapse");
// 		sectionArticle[section].classList.add("hidden");
// 		backgroundSpace.style.height="800px";
// 		headerTitle.innerHTML = "Portfolio";
// 		colapseSkillsBool=false;
// 	};
// }