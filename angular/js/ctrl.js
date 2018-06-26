app.controller("loginCtrl",function ($http,$state) {
    var vm = this;
    vm.go = function () {
        $state.go('main')
    };
});
app.controller("mainCtrl",function ($timeout,$state) {
    var vm = this;

    vm.loding = true;

    // function change() {
    //     $scope.loding = false;
    // }
    // setTimeout($scope.loding = false,3000);
    $timeout(function () {
        vm.loding = false
    },1000);
    vm.go = function () {
        $state.go('main.content')
    }
});
app.controller("contentCtrl",function () {

});