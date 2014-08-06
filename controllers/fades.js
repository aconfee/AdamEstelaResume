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
});