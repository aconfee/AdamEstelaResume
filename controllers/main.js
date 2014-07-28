function SkillsController($scope){
	var self = this;
	$scope.selectedLanguage = 0;
	$scope.selectedTool = 0;

	$scope.languages = [
		{name:"C/C++", percent:"90%",inProgress:false},
		{name:"C#", percent:"80%",inProgress:false},
		{name:"Javascript/jQuery", percent:"70%",inProgress:true},
		{name:"HTML/CSS", percent:"75%",inProgress:false},
		{name:"Java", percent:"80%",inProgress:false},
		{name:"Shellscript", percent:"60%",inProgress:false}
	];

	$scope.tools = [
		{name:"Git", percent:"85%",inProgress:false},
		{name:"Selenium Web Driver", percent:"90%",inProgress:false},
		{name:"Strider Continuous Integration", percent:"80%",inProgress:false},
		{name:"AngularJS", percent:"60%",inProgress:true},
		{name:"Azure", percent:"20%",inProgress:true},
		{name:"NodeJS", percent:"10%",inProgress:true}
	];

	// Display the full description of a tool or language.
	// index: index of the item clicked
	// name: name of the item clicked (to look up info)
	$scope.displayLanguageDescription = function(name){
		var info = self.descriptions[name];
		$scope.languageDisplay.yearsUsed = info.yearsUsed;
		$scope.languageDisplay.projects = info.projects;
		$scope.languageDisplay.lines = info.lines;
		$scope.languageDisplay.description = info.description;
	};

	$scope.displayToolDescription = function(name){
		var info = self.descriptions[name];
		$scope.toolDisplay.yearsUsed = info.yearsUsed;
		$scope.toolDisplay.projects = info.projects;
		$scope.toolDisplay.lines = info.lines;
		$scope.toolDisplay.description = info.description;
	};

	$scope.insetLanguageBar = function($index){
		$scope.selectedLanguage = $index;
	};

	$scope.insetToolBar = function($index){
		$scope.selectedTool = $index;
	};

	self.descriptions = {
		"C/C++":{yearsUsed:"4",
				projects:"4",
				lines:"10,000+",
				description:"My fundamentals were learned in C and all 4 years of college involved heavy use of C++, averaging around 4000+ lines per semester. Along with typical course assignments, I worked on 4 year-long projects with several different teams. It's been 7 months since my last major C++ project. "},
		"C#":{	yearsUsed:"2",
			 	projects:"2",
				lines:"5000 - 10,000",
				description:"C# and stuff."},
		"Git":{	yearsUsed:"0.6",
			 	projects:"4",
				description:"I've been using Git/Github professionally, as well as with side projects. At work, our branching model is similar to the following: <a target='_blank' href='http://nvie.com/posts/a-successful-git-branching-model/'>workflow</a>."},
	}

	// Model for the language description display. First language in languages list is used as default.
	$scope.languageDisplay = {
		yearsUsed:self.descriptions[$scope.languages[0].name].yearsUsed,
		projects:self.descriptions[$scope.languages[0].name].projects,
		lines:self.descriptions[$scope.languages[0].name].lines,
		description:self.descriptions[$scope.languages[0].name].description
	};

	$scope.toolDisplay = {
		yearsUsed:self.descriptions[$scope.tools[0].name].yearsUsed,
		projects:self.descriptions[$scope.tools[0].name].projects,
		description:self.descriptions[$scope.tools[0].name].description
	};
}