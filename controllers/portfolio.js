function PortfolioController($scope){
	var $container = $('.portfolio-items');
	$container.isotope();

	var itemHover = false;

	$scope.filterPortfolio = function(filterValue){
		$container.isotope({filter:filterValue});
	};
}