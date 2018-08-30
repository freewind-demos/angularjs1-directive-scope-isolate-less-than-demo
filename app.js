const app = angular.module('app', [])
app.controller('myController', function ($scope) {
    $scope.userInfo = {
        name: 'Freewind',
        email: 'test@test.com'
    }
    $scope.change = function () {
        $scope.userInfo = {
            name: '111',
            email: '111'
        }
    }
})
app.directive('myDirective', function () {
    return {
        restrict: 'E',
        scope: {
            directiveUserInfo: '<userInfo'
        },
        template: '<div>' +
            '{{ directiveUserInfo }}' +
            '<button ng-click="change()">Change from directive</button> ' +
            '</div>',
        controller: function ($scope) {
            $scope.change = function () {
                $scope.directiveUserInfo = {
                    name: '222',
                    email: '222'
                }
            }
        }
    }
})