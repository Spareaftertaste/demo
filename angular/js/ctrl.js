app.controller("loginCtrl",function ($scope,$http,$state) {
    var vm = this;
    $scope.go = function () {
        $state.go('main')
    };
});
app.controller("mainCtrl",function ($scope,$timeout) {
    var vm = this;

    $scope.loding = true;

    // function change() {
    //     $scope.loding = false;
    // }
    // setTimeout($scope.loding = false,3000);
    $timeout(function () {
        $scope.loding = false
    },3000)
});