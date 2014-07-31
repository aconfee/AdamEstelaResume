function PortfolioController($scope){
	var $container = $('.portfolio-items');
	$container.isotope();

	$scope.hovered = -1;

	$scope.showTabs = function(index){
		var $element = $('.portfolio-tabs').eq(index);
		$element.animate({height: "40px"}, 200)
		$scope.hovered = index;
	};

	$scope.hideTabs = function(index){
		var $element = $('.portfolio-tabs').eq(index);
		$element.animate({height:"0px"}, 200);
		$scope.hovered = -1;
	};

	$scope.filterPortfolio = function(filterValue){
		$container.isotope({filter:filterValue});
	};
}