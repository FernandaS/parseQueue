var app = angular.module('parseQ');

app.controller('mainCtrl', function($scope, parseService){

$scope.postParseQuestion = function(){
	parseService.postQuestion($scope.question)
	.then(function(data){
		$scope.getParseData();
		$scope.question = "";
	})

}

$scope.getParseData = function(){
	parseService.getData().
	then(function(data){
		$scope.allQuestions = data.data.results;
	});
}
	$scope.getParseData();


$scope.updateParseData = function(question){
	parseService.updateQuestion(question)
	.then(function(question){

	$scope.getParseData();	

	})
}

$scope.deleteParseData = function(question){
	parseService.deleteData(question);
	$scope.getParseData();
}

});

