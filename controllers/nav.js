function NavController($scope){
		
	$scope.scrollToSection = function(target){
		$('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1500,
        'swing');
	};
	
	// Initializer
	$("document").ready(function(){
		$("#main-menu li a").hover(
			function(){
				$(this).css({"color": "rgb(142, 16, 42)", "border-bottom": "1px solid rgb(142, 16, 42)"});
			},
			function(){
				// If not active, restore to default when leaving hover.
				if($(this).hasClass("active") === false){
					$(this).css({"color": "rgb(35, 35, 35)", "border-bottom": "none"});
				}
			}
		);
		
		// $(window).scroll handles active nav button.
		/*
		$("#main-menu li a").click(function(){
			$("#main-menu li a").each(function(index){
				$(this).removeClass("active");
				$(this).css("color", "#777777");
			});
			
			$(this).addClass("active");
			$(this).css("color", "rgb(69, 183, 122)");
		});
		*/
	});
}