function PortfolioController($scope){
	var $container = $('.portfolio-items');

	$scope.filterPortfolio = function(filterValue){
		$container.isotope({filter:filterValue});
	};
}