const app = angular.module('app', [])
app.controller('myController', function ($scope) {
    $scope.userName = 'angularjs'
})
app.directive('myDirective', function () {
    return {
        restrict: 'E',
        scope: {
            directiveUserName: '@userName'
        },
        template: '<div>' +
            '<h3>Inside myDirective</h3>' +
            '<div>change me will change message in myDirective only</div>' +
            '<input ng-model="directiveUserName">' +
            '<div class="message">directiveUserName: {{ directiveUserName }}</div>' +
            '</div>',
        controller: function ($scope) {
            console.log('directiveUserName: ' + $scope.directiveUserName)
        }
    }
})