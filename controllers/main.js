function SkillsController($scope){
	var self = this;

	$scope.languages = [
		{name:"C/C++", percent:"90%"},
		{name:"C#", percent:"80%"},
		{name:"Javascript/jQuery", percent:"70%"},
		{name:"HTML/CSS", percent:"75%"},
		{name:"Java", percent:"80%"},
		{name:"Shellscript", percent:"60%"}
	];

	$scope.tools = [
		{name:"Git", percent:"85%"},
		{name:"Selenium Web Driver", percent:"90%"},
		{name:"Strider Continuous Integration", percent:"80%"},
		{name:"AngularJS", percent:"60%"},
		{name:"Azure", percent:"20%"},
		{name:"NodeJS", percent:"10%"}
	];

	$scope.languageDescription = {
		yearsUsed:"4",
		projects:"4",
		lines:"10,000+",
		description:"Hello"
	};

	// Display the full description of a tool or language.
	// index: index of the item clicked
	// name: name of the item clicked (to look up info)
	$scope.displayLanguageDescription = function(index, name){
		var info = $scope.descriptions[name];
		$scope.languageDescription.yearsUsed = info.yearsUsed;
		$scope.languageDescription.projects = info.projects;
		$scope.languageDescription.lines = info.lines;
		$scope.languageDescription.descriptions = info.description;
	};

	$scope.displayToolDescription = function(index, name){

	};

	var descriptions = {
		"C/C++":{yearsUsed:"4",
				 projects:"4",
				 lines:"10,000+",
				 description:"helooo"},
		"C#":{yearsUsed:"4",
				 projects:"4",
				 lines:"10,000+",
				 description:"helooo"}
	}
}