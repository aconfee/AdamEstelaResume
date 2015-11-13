function PortfolioController($scope){
	var $container = $('.portfolio-items');
	$container.isotope();

	$scope.hovered = -1;
	$scope.activeIndex = 0;

	$scope.showTabs = function(index){
		var $tabs = $('.portfolio-tabs').eq(index);
		$tabs.animate({height: "40px"}, 200)
		$scope.hovered = index;

		// This is done in jQuery to be compatible with Isotope filter
		/*
		var $portfolioItem = $('.portfolio-item').eq(index);
		$portfolioItem.css({
	        'transition': '0.2s ease-in-out',
	        '-webkit-transition':'0.2s ease-in-out',
	        '-moz-transition':'0.2s ease-in-out',
	        '-o-transition':'0.2s ease-in-out',
	        'transform': 'scale(1.1)',
    	});
		*/
	};

	$scope.hideTabs = function(index){
		var $tabs = $('.portfolio-tabs').eq(index);
		$tabs.animate({height:"0px"}, 200);
		$scope.hovered = -1;

		// This is done in jQuery to be compatible with Isotope filter
		/*
		var $portfolioItem = $('.portfolio-item').eq(index);
		$portfolioItem.css({
	        'transition': '0.2s ease-in-out',
	        '-webkit-transition':'0.2s ease-in-out',
	        '-moz-transition':'0.2s ease-in-out',
	        '-o-transition':'0.2s ease-in-out',
	        'transform': 'scale(1)',
    	});
		*/
	};

	$scope.filterPortfolio = function(filterValue){
		$container.isotope({filter:filterValue});
	};

	$scope.setActive = function(index){
		$scope.activeIndex = index;
	};
}