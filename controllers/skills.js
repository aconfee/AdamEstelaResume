function SkillsController($scope){
	var self = this;
	$scope.selectedLanguage = 0;
	$scope.selectedTool = 0;
	$scope.showTip = true;

	$scope.languages = [
		{name:"C/C++", val:'85', percent:{width: "85%"},inProgress:false},
		{name:"C#", val:'70', percent:{width: "70%"},inProgress:true},
		{name:"Javascript", val:'70', percent:{width: "70%"},inProgress:true},
		{name:"HTML/CSS", val:'65', percent:{width: "65%"},inProgress:false},
		{name:"Java", val:'60', percent:{width: "60%"},inProgress:false},
		//{name:"Shellscript", percent:"60%",inProgress:false}//,
		{name:"Python", val:'40', percent:{width: "40%"},inProgress:false}
	];

	$scope.mystyle = {width: $scope.languages[0].percent};

	$scope.tools = [
		{name:"Unity", val:'85', percent:{width: "85%"},inProgress:true},
		//{name:"Selenium Web Driver", val:'80', percent:{width: "80%"},inProgress:false},
		{name:"AngularJS", val:'60', percent:{width: "60%"},inProgress:false},
		//{name:"Azure", val:'20', percent:{width: "20%"},inProgress:true},
		{name:"NodeJS", val:'50', percent:{width: "50%"},inProgress:true}
	];

	$scope.skillBucket = [
		{name:"Continuous Integration/Deployment"},
		{name:"Game Engine Development"},
		{name:"3D Graphics Pipeline Development"},
		{name:"Shaders"},
		{name:"NodeJS"},
		{name:"Azure"},
		{name:"Shellscript"},
		{name:"JSON"},
		{name:"mySQL"},
		{name:"ASM"},
		{name:"Bash"},
		{name:"HLSL"},
		{name:"GLSL"},
		{name:"Visual Studio"},
		{name:"Mocha"},
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
		var $languageDescription = $('#languageDescription');
		$languageDescription.animate({
			opacity:0
		}, 150, function(){

			var info = self.descriptions[name];
			$scope.languageDisplay.name = name;
			$scope.languageDisplay.yearsUsed = info.yearsUsed;
			$scope.languageDisplay.projects = info.projects;
			$scope.languageDisplay.description = info.description;
			$scope.$apply();

			$languageDescription.animate({
				opacity:1
			});
		});
	};

	$scope.displayToolDescription = function(name){
		var $toolDescription = $('#toolDescription');
		$toolDescription.animate({
			opacity:0
		}, 250, function(){

			var info = self.descriptions[name];
			$scope.toolDisplay.name = name;
			$scope.toolDisplay.yearsUsed = info.yearsUsed;
			$scope.toolDisplay.projects = info.projects;
			$scope.toolDisplay.lines = info.lines;
			$scope.toolDisplay.description = info.description;
			$scope.$apply();

			$toolDescription.animate({
				opacity:1
			});
		});
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
			projects:"3 + Professional Experience",
			description:"I currently use C# as one of my primary languages at work to build a multi-project-scalable, multi-device, multi-product automation framework from the ground up for bleeding edge technology, the Microsoft Hololens. I started using C# my senior year of school to script games in Unity. Outside of school, when I felt more comfortable with both Unity and C#, I worked on Survaillent during a 48 hour game jam (see in portfolio) as one of two programmers."
		},
		"Javascript/jQuery":{ 	
			yearsUsed:"0.5",
			projects:"2 + Professional Experience",
			description:"I've recently started using Javascript to contribute to work projects. In order to grow quicker, co-workers are reviewing my solo end-end side projects. I've spent the past two months tirelessly working on side projects in order to iterate fast, fail frequently, and gain experience."
		},
		"HTML/CSS":{	
			yearsUsed:"1",
			projects:"3 + Professional Exposure",
			description:"My previous job involved writing automated tests for a web service, so I'm extremely comfortable with HTML and CSS. I've recently started using it to develop my own projects, but after professional exposure, there was almost no learning curve. I am familiar with other CSS languages like LESS and SASS, but have not used them yet."
		},
		"Java":{		
			yearsUsed:"1",
			projects:"Professional Experience",
			description:"I've used Java in both of my professional positions. Other than a few easily google-able syntactical differences, I had no trouble jumping in after using C/C++ and C#. Although, it's worth noting that I use Java for test automation, so I'm proficient with trivial use, but not the ins and outs of the language."
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
		"Unity":{
			yearsUsed:"1",
			projects:"2 + Professional Exposure",
			description:"After developing game engines from the ground up in C++, it was a delight to Unity my Senior year of college. I have built two games with small teams of developers, artists, and designers. I also use Unity lightly in my current position."
		},
		"Selenium Web Driver":{
			yearsUsed:"0.75",
			projects:"Professional Experience",
			description:"Automating tests with Selenium is my primary professional responsibility. I've written several tools around Selenium to make test feedback more accurate, easy to debug, and reliable. I was also promoted after 4 months for gaining ownership in this area quickly as well as extending my responsibilities to several other areas."
		},
		"Continuous Integration/Deployment":{
			yearsUsed:"0.75",
			projects:"Professional Experience",
			description:"Maintaining and building up Strider is one of my larger professional roles. I worked with my manager to write our CI test runner pipeline which runs test groups based on changed files automatically, and am one of the primary points of contact for CI issues."
		},
		"AngularJS":{
			yearsUsed:"0.5",
			projects:"2 + Professional Exposure",
			description:"When I started building web apps, AngularJS was recommended to me. I'm exposed to it professionally, and use it on side projects frequently. This very description is data-bound using AngularJS!"
		},
		"Azure":{
			yearsUsed:"0.15",
			projects:"3",
			description:"I'm currently using Azure to host some websites and store data. I know the very basics, but haven't had a need for anything beyond that."
		},
		"NodeJS":{
			yearsUsed:"0.2",
			projects:"Professional Exposure",
			description:"I am actively learning how to develop full web applications with NodeJS and its supported toolset, including MySQL, MongoDB, Express.js, Jade, and more."
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