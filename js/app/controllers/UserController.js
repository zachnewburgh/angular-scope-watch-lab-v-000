function UserController($scope) {
	var ctrl = this;

  this.username = '';

	this.country = {
		name: {
      short = '',
      full = ''
		},
    population: ''
	};

  $scope.$watch(function() {
    return ctrl.username; 
  }, function(newValue, oldValue) {
    console.log('Username updated!');
  });

  $scope.$watch(function() {
    return ctrl.country;
  }, function(newValue, oldValue) {
    console.log('Country updated!');
  }, true);

  $scope.$watchCollection(function() {
    return ctrl.country.name;
  }, function(newValue, oldValue) {
    console.log('Country name updated!');
  });
}

angular
	.module('app')
	.controller('UserController', UserController);