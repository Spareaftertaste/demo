app.controller("loginCtrl",function ($scope,$http,$state) {
    var vm = this;
    vm.go = function () {
        $state.go('main')
    };
});
app.controller("mainCtrl",function ($scope,$timeout) {
    var vm = this;

    vm.loding = true;

    // function change() {
    //     $scope.loding = false;
    // }
    // setTimeout($scope.loding = false,3000);
    $timeout(function () {
        vm.loding = false
    },1000)
});