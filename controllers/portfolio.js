function PortfolioController($scope){
	//var $container = $'.portfolio-items';

	$scope.filterPortfolio = function(filterValue){
		$container = $('.portfolio-items');
		$container.isotope({filter:filterValue});
	};
}