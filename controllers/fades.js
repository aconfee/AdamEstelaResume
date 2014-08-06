$(window).scroll(function(){
     var top = $(this).scrollTop();
     console.log(top);
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
     	}, 1600);

     	$("#testOverviewIcon").animate({
       		top:'0px',
     		opacity:1
     	}, 1600);
     }

     if(top > 850){
       	$("#webOverview").animate({
       		left:'0px',
     		opacity:1
     	}, 2000);

     	$("#webOverviewIcon").animate({
       		top:'0px',
     		opacity:1
     	}, 2000);
     }
});