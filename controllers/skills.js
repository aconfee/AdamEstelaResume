function SkillsController($scope){
	var self = this;
	$scope.selectedLanguage = 0;
	$scope.selectedTool = 0;
	$scope.showTip = true;

	$scope.languages = [
		{name:"C/C++", val:'90', percent:{width: "90%"},inProgress:false},
		{name:"C#", val:'75', percent:{width: "75%"},inProgress:false},
		{name:"Javascript/jQuery", val:'75', percent:{width: "75%"},inProgress:true},
		{name:"HTML/CSS", val:'65', percent:{width: "65%"},inProgress:true},
		{name:"Java", val:'60', percent:{width: "60%"},inProgress:false},
		//{name:"Shellscript", percent:"60%",inProgress:false}//,
		{name:"Python", val:'40', percent:{width: "40%"},inProgress:false}
	];

	$scope.mystyle = {width: $scope.languages[0].percent};

	$scope.tools = [
		{name:"Selenium Web Driver", val:'90', percent:{width: "90%"},inProgress:false},
		{name:"Git", val:'85', percent:{width: "85%"},inProgress:false},
		{name:"Strider Continuous Integration", val:'80', percent:{width: "80%"},inProgress:false},
		{name:"AngularJS", val:'60', percent:{width: "60%"},inProgress:true}//,
		//{name:"Azure", val:'20', percent:{width: "20%"},inProgress:true},
		//{name:"NodeJS", val:'10', percent:{width: "10%"},inProgress:true}
	];

	$scope.skillBucket = [
		{name:"NodeJS"},
		{name:"Azure"},
		{name:"Shellscript"},
		{name:"JSON"},
		{name:"mySQL"},
		{name:"ASM"},
		{name:"Bash"},
		{name:"HLSL"},
		{name:"GLSL"},
		{name:"Mocha"},
		{name:"Unity"},
		{name:"OpenGL"},
		{name:"DirectX"},
		{name:"JS Hint"},
		{name:"CasperJS"},
		{name:"Bower"},
		{name:"Grunt"},
		{name:"TestNG"},
		{name:"PhantomJS"},
		{name:"PHP"},
		{name:"Ruby"},
		{name:"Jira"},
		{name:"Trello"},
		{name:"IntelliJ"},
		{name:"Visual Studio"},
		{name:"Android"},
		{name:"Windows Phone"},
		{name:"Photoshop"},
		{name:"Maya & 3Ds Max"}
	];

	$scope.hideTip = function(){
		$scope.showTip = false;
	};

	// Display the full description of a tool or language.
	// index: index of the item clicked
	// name: name of the item clicked (to look up info)
	$scope.displayLanguageDescription = function(name){
		var info = self.descriptions[name];
		$scope.languageDisplay.name = name;
		$scope.languageDisplay.yearsUsed = info.yearsUsed;
		$scope.languageDisplay.projects = info.projects;
		$scope.languageDisplay.description = info.description;
	};

	$scope.displayToolDescription = function(name){
		var info = self.descriptions[name];
		$scope.toolDisplay.name = name;
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
		"C/C++":{
			yearsUsed:"4",
			projects:"4",
			description:"My fundamentals were learned in C and all 4 years of college involved heavy use of C++. Along with typical course assignments, I worked on 4 year-long projects with several different teams. It's been 7 months since my last major C++ project. "
		},
		"C#":{	
			yearsUsed:"1.5",
			projects:"3",
			description:"I started using C# my senior year of school to script games in Unity. Outside of school, when I felt more comfortable with both Unity anc C#, I worked on Survaillent during a 48 hour game jam (see in portfolio) as one of two programmers. I then spent a few months studying and practicing with the language."
		},
		"Javascript/jQuery":{ 	
			yearsUsed:"0.15",
			projects:"2 + Professional Experience",
			description:"I've recently started using Javascript to contribute to work projects. In order to grow quicker, co-workers are reviewing my solo end-end side projects. I've spent the past two months tirelessly working on side projects in order to iterate fast, fail frequently, and gain experience."
		},
		"HTML/CSS":{	
			yearsUsed:"1",
			projects:"3 + Professional Exposure",
			description:"My current job involves writing automated tests for a web service, so I'm extremely comfortable with HTML and CSS. I've recently started using it to develop my own projects, but after professional exposure, there was almost no learning curve. I am familiar with other CSS languages like LESS and SASS, but have not used them yet."
		},
		"Java":{		
			yearsUsed:"0.5",
			projects:"Professional Experience",
			description:"I've been using Java since day one at my current job. Other than a few easily google-able syntactical differences, I had no trouble jumping in after using C/C++ and C#. Although, it's worth noting that I use Java for test automation, so I'm proficient with trivial use, but not the ins and outs of the language."
		},
		"Shellscript":{
			yearsUsed:"1",
			projects:"3 / Professional Experience",
			description:"I'm no pro, but I know Shell well enough to complete a task. I've used this at work to write our CI test runner, as well as at school for a few projects. I'm also familiar with bash, but have not directly applied it on a professional level."
		},
		"Python":{
			yearsUsed:"1",
			projects:"1 + Professional Experience",
			description:"I started learning Python for fun during school in order to familiarize myself with a scripting language. This opened my eyes to how easy and quick small projects could be. I immediately started applying it in my math courses, and used it almost exclusively during my 3 month internship for which Python was the engine's primary language. I've continued to use it when appropriate at work."
		},
		"Git":{
			yearsUsed:"0.6",
			projects:"3 + Professional Experience",
			description:"Git/Github is my current repo at work. I'm familiar with different levels of branching for features/devs/production/etc."
		},
		"Selenium Web Driver":{
			yearsUsed:"0.5",
			projects:"Professional Experience",
			description:"Automating tests with Selenium is my primary professional responsibility. I've written several tools around Selenium to make test feedback more accurate, easy to debug, and reliable. I was also promoted after 4 months for gaining ownership in this area so quickly as well as extending my responsibilities to several other areas."
		},
		"Strider Continuous Integration":{
			yearsUsed:"0.5",
			projects:"Professional Experience",
			description:"Maintaining and building up Strider is one of my larger professional roles. I worked with my manager to write our CI test runner pipeline which runs test groups based on changed files automatically, and am one of the primary points of contact for CI issues."
		},
		"AngularJS":{
			yearsUsed:"0.15",
			projects:"2 + Professional Exposure",
			description:"When I started building web apps, AngularJS was recommended to me. I'm exposed to it professionally, and use it frequently. This very description is data-bound using AngularJS!"
		},
		"Azure":{
			yearsUsed:"0.15",
			projects:"3",
			description:"I'm currently using Azure to host some websites and store data. I know the very basics, but haven't had a need for anything beyond that."
		},
		"NodeJS":{
			yearsUsed:"0.2",
			projects:"Professional Exposure",
			description:"I am actively learning and practicing NodeJS. I use a simple node server at work, and have implemented one of my own. I'm also familiar with, and frequently use, Node's package manager."
		}
	}

	// Model for the language description display. First language in languages list is used as default.
	$scope.languageDisplay = {
		name:$scope.languages[0].name,
		yearsUsed:self.descriptions[$scope.languages[0].name].yearsUsed,
		projects:self.descriptions[$scope.languages[0].name].projects,
		description:self.descriptions[$scope.languages[0].name].description
	};

	$scope.toolDisplay = {
		name:$scope.tools[0].name,
		yearsUsed:self.descriptions[$scope.tools[0].name].yearsUsed,
		projects:self.descriptions[$scope.tools[0].name].projects,
		description:self.descriptions[$scope.tools[0].name].description
	};
}