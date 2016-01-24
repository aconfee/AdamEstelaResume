$(window).scroll(function(){
     var top = $(this).scrollTop();
     if(top > 600){
       	$("#gamesOverview").animate({
       		left:'0px',
     		opacity:1
     	}, 1200);

     	$("#gamesOverviewIcon").animate({
       		top:'0px',
     		opacity:1
     	}, 1200);
     }

     if(top > 750){
       	$("#testOverview").animate({
       		left:'0px',
     		opacity:1
     	}, 1400);

     	$("#testOverviewIcon").animate({
       		top:'0px',
     		opacity:1
     	}, 1400);
     }

     if(top > 850){
       	$("#webOverview").animate({
       		left:'0px',
     		opacity:1
     	}, 1600);

     	$("#webOverviewIcon").animate({
       		top:'0px',
     		opacity:1
     	}, 1600);
     }

     if(top > 2550){
       	$("#education").animate({
       		top:'0px',
     		opacity:1
     	}, 1000);

     	$("#educationText").animate({
       		left:'0px',
     		opacity:1
     	}, 1000);
     }

     if(top > 3050){
       	$("#paperg").animate({
       		right:'0px',
     		opacity:1
     	}, 1200);

     	$("#digipen").animate({
       		left:'0px',
     		opacity:1
     	}, 1200);
     }
     
     var correctedOffset = 15;
     
     // Nav section button active toggle.
     if(top < $("#overview-screen").offset().top - correctedOffset){
        // Intro
        setActiveNav(6);
     }

     else if(top >= $("#overview-screen").offset().top - correctedOffset && top < $("#portfolio-screen").offset().top - correctedOffset){
       	// Profile
         setActiveNav(0);
     }

     else if(top >= $("#portfolio-screen").offset().top - correctedOffset && top < $("#skills-screen").offset().top - correctedOffset){
       	// Portfolio
         setActiveNav(1);
     }

     else if(top >= $("#skills-screen").offset().top- correctedOffset && top < $("#education-screen").offset().top - correctedOffset){
       	// Skills
         setActiveNav(2);
     }

     else if(top >= $("#education-screen").offset().top - correctedOffset && top < $("#experience-screen").offset().top - correctedOffset){
        // Education
        setActiveNav(3);
     }
     
     else if(top >= $("#experience-screen").offset().top - correctedOffset && top < $("#contact-screen").offset().top - correctedOffset){
       // Experience
       setActiveNav(4);
     }
     
     else if(top >= $("#contact-screen").offset().top - correctedOffset){
       // Contact
       setActiveNav(5);
     }
});

var setActiveNav = function(index){
  $("#main-menu li a").each(function(index){
    $(this).removeClass("active");
    $(this).css("color", "rgb(35, 35, 35)");
  });
	
  var navButton = $("#main-menu li a").eq(index);		
  navButton.addClass("active");
  navButton.css("color", "rgb(69, 183, 122)");
};

