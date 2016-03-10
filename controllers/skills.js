function SkillsController($scope){
	var self = this;
	$scope.selectedLanguage = 0;
	$scope.selectedTool = 0;
	$scope.showTip = true;

	$scope.languages = [
		{name:"C / C++", val:'85', percent:{width: "85%"},inProgress:false},
		{name:"C#", val:'70', percent:{width: "70%"},inProgress:true},
		{name:"JAVASCRIPT", val:'70', percent:{width: "70%"},inProgress:true},
		{name:"HTML / CSS", val:'65', percent:{width: "65%"},inProgress:false},
		{name:"JAVA", val:'60', percent:{width: "60%"},inProgress:false},
		//{name:"Shellscript", percent:"60%",inProgress:false}//,
		{name:"PYTHON", val:'40', percent:{width: "40%"},inProgress:false}
	];

	$scope.mystyle = {width: $scope.languages[0].percent};

	$scope.tools = [
		{name:"UNITY 3D", val:'85', percent:{width: "85%"},inProgress:true},
		//{name:"Selenium Web Driver", val:'80', percent:{width: "80%"},inProgress:false},
		{name:"ANGULAR JS", val:'60', percent:{width: "60%"},inProgress:false},
		//{name:"Azure", val:'20', percent:{width: "20%"},inProgress:true},
		{name:"NODE JS / EXPRESS", val:'50', percent:{width: "50%"},inProgress:true},
		{name:"MONGO / SQL", val:"40", percent:{width: "40%"}, inProgress:true}
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

	$scope.selectLanguage = function($index){
		if($index === $scope.selectedLanguage){
			return;
		}

		// Update the index of the selected language and change the background colors of the previous and current active bar.
		$(".skill-progress.language").eq($scope.selectedLanguage).css("background-color", "rgb(68, 80, 96)");
		$scope.selectedLanguage = $index;
		$(".skill-progress.language").eq($scope.selectedLanguage).css("background-color", "rgb(123, 137, 157)")
	};

	$scope.selectTool = function($index){
		if($index === $scope.selectedTool){
			return;
		}

		// Update the index of the selected tool and change the background colors of the previous and current active bar.
		$(".skill-progress.tool").eq($scope.selectedTool).css("background-color", "rgb(68, 80, 96)");
		$scope.selectedTool = $index;
		$(".skill-progress.tool").eq($scope.selectedTool).css("background-color", "rgb(123, 137, 157)")
	}

	self.descriptions = {
		"C / C++":{
			yearsUsed:"4",
			projects:"6",
			description:"My fundamentals were learned in C and all 4 years of college involved heavy use of C++ and implementation of most common STL containers. Along with typical course assignments, I worked on 4 game engines with several different teams built from the ground up in C++."
		},
		"C#":{
			yearsUsed:"2.5",
			projects:"4 / Professional",
			description:"I currently use C# as my primary language at work develop an automation framework and toolset from the ground up that scales across multiple products and vastly varying devices, including the HoloLens. Outside of work I've built a few Unity projects in C#, including the 48-hour game jam project: Survaillent."
		},
		"JAVASCRIPT":{
			yearsUsed:"1.5",
			projects:"4 / Professional",
			description:"I used Javascript at my first job to develop internal tools and front-end features. I've built several front-end and full-stack web projects on my own time, and continue to grow in this area."
		},
		"HTML / CSS":{
			yearsUsed:"2",
			projects:"4 / Professional",
			description:"I used HTML and CSS at my first job both in testing our web service, and working on front-end features. I've built several front-end web projects on my own time and continue to grow in this area."
		},
		"JAVA":{
			yearsUsed:"1",
			projects:"2 / Professional",
			description:"I've used Java in both of my professional positions. Other than a few easily google-able syntactical differences, I had no trouble jumping in after using C/C++ and C#."
		},
		"Shellscript":{
			yearsUsed:"1",
			projects:"3 / Professional Experience",
			description:"I'm no pro, but I know Shell well enough to complete a task. I've used this at work to write our CI test runner, as well as at school for a few projects. I'm also familiar with bash, but have not directly applied it on a professional level."
		},
		"PYTHON":{
			yearsUsed:"1",
			projects:"2 / Professional",
			description:"I used Python almost exclusively during my 3 month internship for which Python was the game engine's primary language. I started learning Python for fun during school in order to familiarize myself with a scripting language. I immediately started applying it in my math courses."
		},
		"Git":{
			yearsUsed:"0.6",
			projects:"3 / Professional",
			description:"Git/Github is my current repo at work. I'm familiar with different levels of branching for features/devs/production/etc."
		},
		"UNITY 3D":{
			yearsUsed:"2",
			projects:"3 / Professional",
			description:"After developing game engines from the ground up in C++, it was a delight to use Unity. I have built a couple games in Unity, and also use it at work, where I keep up to date on all of the latest releases."
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
		"ANGULAR JS":{
			yearsUsed:"1",
			projects:"3 / Professional",
			description:"AngularJS was the first MVC framework I used to begin making web applications. I used this for test and front end tasks at my first job, and have built a few front-end applications using Angular on my own time. In fact, this site was my first Angular project!"
		},
		"Azure":{
			yearsUsed:"0.15",
			projects:"3",
			description:"I'm currently using Azure to host some websites and store data. I know the very basics, but haven't had a need for anything beyond that."
		},
		"NODE JS / EXPRESS":{
			yearsUsed:"Under 1",
			projects:"2",
			description:"I used Node at my first job to develop an internal tool. I have since built a full-stack application using Node and Express."
		},
		"MONGO / SQL":{
			yearsUsed:"Under 1",
			projects:"1",
			description:"I learned SQL at school, used it lightly at work, and have used it on small side projects. I have used Mongoose on a couple small full-stack projects."
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

	$(document).ready(function(){
			
		$(".skill-button").hover(
			function(){
				$(this).find(".skill-progress").css("background-color", "rgb(123, 137, 157)");
			},
			function(){
				// If this bar is not active, return to default color.
				if($(this).find(".skill-progress-active").length === 0){
					$(this).find(".skill-progress").css("background-color", "rgb(68, 80, 96)");
				}
			}
		);
	});
}
