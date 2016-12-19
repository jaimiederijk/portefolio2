var nameHeader = document.querySelector('header section');
var header = document.querySelector('header');
var allSectionImg = document.querySelectorAll('.portfolio section');
var allSectionArticle = document.querySelectorAll('section section > h2');

var nameSpaceOut = function() {
	nameHeader.classList.remove("bounceInLeft");
	nameHeader.classList.add("bounceOutRight");
	setTimeout(function(){ 
		nameHeader.classList.remove("bounceOutRight");
		nameHeader.classList.add("bounceInLeft");		 
	}, 3000);
}
var nameSpaceIn = function() {

}
var titelHover = function(section){
	if (colapseSkillsBool==false) {
		allSectionArticle[section].classList.remove("fadeOutDown");
		allSectionArticle[section].classList.add("fadeInDown");
	};
}
var titelRemove = function(section){
	if (colapseSkillsBool==false) {
		allSectionArticle[section].classList.remove("fadeInDown");
		allSectionArticle[section].classList.add("fadeOutDown");
	};
}

allSectionImg[0].addEventListener("mouseover", function() { titelHover(0); });
allSectionImg[1].addEventListener("mouseover", function() { titelHover(1); });
allSectionImg[2].addEventListener("mouseover", function() { titelHover(2); });
allSectionImg[3].addEventListener("mouseover", function() { titelHover(3); });
allSectionImg[4].addEventListener("mouseover", function() { titelHover(4); });
allSectionImg[5].addEventListener("mouseover", function() { titelHover(5); });

allSectionImg[0].addEventListener("mouseout", function() { titelRemove(0); });
allSectionImg[1].addEventListener("mouseleave", function() { titelRemove(1); });
allSectionImg[2].addEventListener("mouseleave", function() { titelRemove(2); });
allSectionImg[3].addEventListener("mouseleave", function() { titelRemove(3); });
allSectionImg[4].addEventListener("mouseleave", function() { titelRemove(4); });
allSectionImg[5].addEventListener("mouseleave", function() { titelRemove(5); });

nameHeader.addEventListener("mouseover", function() { nameSpaceOut(); });
header.addEventListener("mouseleave", function() { nameSpaceIn(); });

var allSkills = document.querySelectorAll('.skills section p');
var skillHexImg = document.querySelector('.skillhexagon svg');
var skillHexImgPoly = document.querySelector('.skillhexagon svg polygon');  

var skillHexPause = document.querySelector('.skillhexpause');

var skillInterval=setInterval(function () {skillsHexagon()}, 1500);

var whichSkill=0;
var rotateSkill= 0;
var color=[233, 197, 250];
var pauseBool=false;

var skillsHexagon = function() {
	if (whichSkill>allSkills.length - 1) {
		whichSkill=0;
		color=[233, 197, 250];

	}  
	for (var i = allSkills.length - 1; i >= 0; i--) {
		allSkills[i].classList.add("hidden")
	};
	allSkills[whichSkill].classList.remove("hidden");
	skillHexImg.style.transform="rotate("+rotateSkill+"deg)";
	skillHexImgPoly.style.fill="rgb("+color[0]+","+color[1]+","+color[2]+")";
	color[0]-=10;
	color[1]-=20;
	color[2]-=5;
	rotateSkill+=60;
	whichSkill++;
	
}

var pause = function () {
	if (pauseBool==false) {
		clearInterval(skillInterval);
		
		skillHexPause.innerHTML = "Unpause"
		pauseBool=true;
	} 
	else if (pauseBool==true) {
		skillsHexagon();
		skillInterval=setInterval(function () {skillsHexagon()}, 1500);
		skillHexPause.innerHTML = "Pause"
		pauseBool=false;
	};
}

skillHexPause.addEventListener("click",function(){pause();});
skillsHexagon();
//expand portfolio section
var skillSection = document.querySelector('.skills');
var portSectionButton = document.querySelectorAll('.portfolio section > h2');
var sectionArticle = document.querySelectorAll('.portfolio section article');
var aboutMeSection = document.querySelector('.aboutme');
var headerTitle = document.querySelector('.portfolio header h2');

var backgroundSpace = document.querySelector('.backgroundspace');

allSectionImg[0].addEventListener("click",function(){colapseSkills(0,"Concerto Webshop");});
allSectionImg[1].addEventListener("click",function(){colapseSkills(1,"Steen, papier, schaar multiplayer");});
allSectionImg[2].addEventListener("click",function(){colapseSkills(2,"Mijn ontmantel installatie");});
allSectionImg[3].addEventListener("click",function(){colapseSkills(3,"CMD huistijl website");});
allSectionImg[4].addEventListener("click",function(){colapseSkills(4,"Space Chase javascript game");});
allSectionImg[5].addEventListener("click",function(){colapseSkills(5,"De Rijk Computerhulp");});

var colapseSkillsBool= false;
var colapseSkills = function(section,title) {
	if (colapseSkillsBool==false) {
		for (var i = allSectionImg.length - 1; i >= 0; i--) {
			allSectionImg[i].classList.add("hidden")
		};
		allSectionImg[section].classList.remove("hidden");
		allSectionImg[section].classList.add("growsection");
		skillSection.classList.add("skillcollapse");
		aboutMeSection.classList.add("skillcollapse");
		backgroundSpace.style.height="300px";
		sectionArticle[section].classList.remove("hidden");
		allSectionArticle[section].classList.remove("fadeInDown");
		allSectionArticle[section].classList.add("fadeOutDown");
		headerTitle.innerHTML = title;
		colapseSkillsBool=true;
	} else if (colapseSkillsBool==true) {
		for (var i = allSectionImg.length - 1; i >= 0; i--) {
			allSectionImg[i].classList.remove("hidden")
		};
		allSectionImg[section].classList.remove("growsection");
		skillSection.classList.remove("skillcollapse");
		aboutMeSection.classList.remove("skillcollapse");
		sectionArticle[section].classList.add("hidden");
		backgroundSpace.style.height="800px";
		colapseSkillsBool=false;
	};
}