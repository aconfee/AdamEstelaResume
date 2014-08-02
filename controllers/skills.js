function SkillsController($scope){
	var self = this;
	$scope.selectedLanguage = 0;
	$scope.selectedTool = 0;
	$scope.showTip = true;

	$scope.languages = [
		{name:"C/C++", val:'90', percent:{width: "90%"},inProgress:false},
		{name:"C#", val:'80', percent:{width: "80%"},inProgress:false},
		{name:"Javascript/jQuery", val:'75', percent:{width: "75%"},inProgress:true},
		{name:"HTML/CSS", val:'70', percent:{width: "70%"},inProgress:false},
		{name:"Java", val:'70', percent:{width: "70%"},inProgress:false},
		//{name:"Shellscript", percent:"60%",inProgress:false}//,
		{name:"Python", val:'65', percent:{width: "65%"},inProgress:false}
	];

	$scope.mystyle = {width: $scope.languages[0].percent};

	$scope.tools = [
		{name:"Git", val:'85', percent:{width: "85%"},inProgress:false},
		{name:"Selenium Web Driver", val:'90', percent:{width: "90%"},inProgress:false},
		{name:"Strider Continuous Integration", val:'80', percent:{width: "80%"},inProgress:false},
		{name:"AngularJS", val:'60', percent:{width: "60%"},inProgress:true},
		{name:"Azure", val:'20', percent:{width: "20%"},inProgress:true},
		{name:"NodeJS", val:'10', percent:{width: "10%"},inProgress:true}
	];

	$scope.skillBucket = [
		{name:"Python"},
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
			description:"My fundamentals were learned in C and all 4 years of college involved heavy use of C++, averaging around 4000+ lines per semester. Along with typical course assignments, I worked on 4 year-long projects with several different teams. It's been 7 months since my last major C++ project. "
		},
		"C#":{	
			yearsUsed:"1.5",
			projects:"3",
			description:"I started using C# my senior year of school to script games in Unity. Outside of school, when I felt more comfortable with both Unity anc C#, I worked on this 48 hour game jam: [Survaillent], as one of two programmers, as well as some Windows phone apps. I then spent a few months studying C# via this <a href='http://www.amazon.com/2010-NET-Platform-Experts-Voice/dp/1430225491/ref=sr_1_2?ie=UTF8&qid=1406566860&sr=8-2&keywords=pro+c%23'>book</a> and applying what I learned to several (50+) interview questions."
		},
		"Javascript/jQuery":{ 	
			yearsUsed:"0.15",
			projects:"2 / Professional Experience",
			description:"I've just recently started using Javascript on a professional level. With the help of co-workers (professional front end developers) I'm learning quickly, and am already contributing on a professional level. Too see all the books I've read and projects I've completed in the past two months, view my summary <here>. One of the professional projects I share ownership of is written entirely in JS. "
		},
		"HTML/CSS":{	
			yearsUsed:"1",
			projects:"3 / Professional Exposure",
			description:"My current job involves writing automated tests for a web service, so I'm extremely comfortable with HTML and CSS. I've only started using it to develop my own projects recently, but after professional exposure, there was almost no learning curve. I am familiar with other CSS languages like LESS and SASS, but have not cared to dive deeper into styling for now."
		},
		"Java":{		
			yearsUsed:"0.5",
			projects:"1 / Professional Experience",
			description:"I've been using Java since day one at my current job. Other than a few easily google-able syntactical differences, I had no trouble jumping in after using C/C++ and C#. (Although, it's worth noting that I use Java for test automation, so I'm proficient with daily use, but not the ins and outs of the language.) The main project I currently own at work is written in Java."
		},
		"Shellscript":{
			yearsUsed:"1",
			projects:"3 / Professional Experience",
			description:"I'm no pro, but I know Shell well enough to complete a task. I've used this at work to write our CI test runner, as well as at school for a few projects. I'm also familiar with bash, but have not directly applied it on a professional level."
		},
		"Python":{
			yearsUsed:"1",
			projects:"2 / Professional Experience",
			description:"I started learning Python for fun during school in order to familiarize myself with a scripting language. This opened my eyes to how easy quick projects could be and I immediately started applying it in my math courses. During my 3 month internship, Python was my primary language, and I've continued to use it in small doses at work since then."
		},
		"Git":{
			yearsUsed:"0.6",
			projects:"4",
			description:"I've been using Git/Github professionally, as well as with side projects. At work, our branching model is similar to the following: <a target='_blank' href='http://nvie.com/posts/a-successful-git-branching-model/'>workflow</a>."
		},
		"Selenium Web Driver":{
			yearsUsed:"0.5",
			projects:"Professional Experience",
			description:"Automating tests with Selenium is my primary professional responsibility. I ramped up quickly and contributed a new test by my third day. I have since written an (actually) cross browser compatible, and dynamic site compatible wrapper library around Selenium. I was also promoted after 4 months for gaining ownership in this area so quickly as well as extending my responsibilities to several other areas."
		},
		"Strider Continuous Integration":{
			yearsUsed:"0.5",
			projects:"Professional Experience",
			description:"Maintaining and building up Strider is one of my larger professional roles. I worked with my manager to write our CI test runner pipeline which runs test groups based on changed files automatically, and am one of the primary points of contact for CI issues."
		},
		"AngularJS":{
			yearsUsed:"0.15",
			projects:"2 / Professional Exposure",
			description:"At the same time I dedicated myself to learning JS and building web apps, I learned AngularJS. I'm currently using it in my web projects... including this very description!"
		},
		"Azure":{
			yearsUsed:"0.15",
			projects:"3",
			description:"I'm currently using Azure to host some websites and store data. I know the very basics, but haven't had a need for anything beyond that."
		},
		"NodeJS":{
			yearsUsed:"0.2",
			projects:"1 / Professional Exposure",
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