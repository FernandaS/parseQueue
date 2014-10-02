var app = angular.module('parseQ');

app.service('parseService', function($http, $q){



this.postQuestion = function(question){
  return $http({
    method: "POST",
    data: {text: question, status: "red"},
    url: 'https://api.parse.com/1/classes/parseQ'
	})
}
this.getData = function(){

	return $http({
		method: 'GET',
		url: 'https://api.parse.com/1/classes/parseQ'
	}).then(function(response){
		return response;

	})
}

this.updateQuestion = function(question){
  return $http({
    method: "PUT",
    data: {status: 'yellow'},
    url: 'https://api.parse.com/1/classes/parseQ/' + question.objectId
	}).then(function(response){
		return response;
	})
}

this.deleteData = function(question){
	return $http({
		method: 'DELETE',data: {text: question},
		url: 'https://api.parse.com/1/classes/parseQ/' + question.objectId
	})
}




});