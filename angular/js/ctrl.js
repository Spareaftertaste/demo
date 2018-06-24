app.controller("loginCtrl",function ($scope,$http,$state) {
    var vm = this;
    $scope.go = function () {
        $state.go('main')
    };
});
app.controller("mainCtrl",function ($scope) {
    $scope.loding = true;
    // function change() {
    //     $scope.loding = false;
    // }
    // setTimeout($scope.loding = false,3000);
    setTimeout($scope.loding = false,3000)
});