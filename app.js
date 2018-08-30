const app = angular.module('app', [])
app.controller('myController', function ($scope) {
    $scope.userInfo = {
        name: 'Freewind',
        email: 'test@test.com'
    }
})
app.directive('myDirective', function () {
    return {
        restrict: 'E',
        scope: {
            directiveUserInfo: '<userInfo'
        },
        template: '<div>' +
            '<h3>Inside myDirective</h3>' +
            '<div>' +
            '   <label>Name:</label>' +
            '   <input ng-model="directiveUserInfo.name">' +
            '</div>' +
            '<div>directive.directiveUserInfo: <span class="highlight">{{ directiveUserInfo }}</span></div>' +
            '</div>',
        controller: function ($scope) {
            console.log('directiveUserInfo: ' + JSON.stringify($scope.directiveUserInfo))
        }
    }
})