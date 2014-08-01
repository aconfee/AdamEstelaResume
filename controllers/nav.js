function NavController($scope){
	$scope.scrollToSection = function(target){
		$('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1500,
        'swing');
	};
}