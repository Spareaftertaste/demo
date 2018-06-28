app.controller("loginCtrl",function ($http,$state) {
    var vm = this;
    vm.go = function () {
        $state.go('main')
    };
    vm.contract = false;
    vm.showContract = function () {
        vm.contract = true;
    };
    vm.stop = function () {
        event.stopPropagation();//阻止事件冒泡
    };
    vm.close = function () {
        vm.contract = false;
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

app.controller("matchingCtrl",function (data) {
    var vm = this;
    vm.data = data;

    vm.detail = false;

    vm.over = function (data) {
        vm.detail = true;
        vm.data2 = data;
    };
    vm.leave = function () {
        vm.detail = false;
        vm.data2 = {};
    };

    vm.all = false;
    vm.allOpen = function () {
        vm.all = true;
    };
    vm.close = function () {
        vm.all = false;
    };
    vm.stop = function () {
        event.stopPropagation();//阻止事件冒泡
    };
});

// (function () {
//     var Mock = require('mockjs');
//     var data = Mock.mock({
//         // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
//         'list|1-10': [{
//             // 属性 id 是一个自增数，起始值为 1，每次增 1
//             'id|+1': 1
//         }]
//     });
//     // 输出结果
//     console.log(JSON.stringify(data, null, 4));
// })();

app.constant('data',[
    {
        id : 'TZHT000002',
        money:'10000.00元'
    },
    {
        id : 'TZHT000003',
        money:'30000.00元'
    },
    {
        id : 'TZHT000004',
        money:'40000.00元'
    },
    {
        id : 'TZHT000005',
        money:'60000.00元'
    },
    {
        id : 'TZHT000007',
        money:'80000.00元'
    },
    {
        id : 'TZHT000008',
        money:'90000.00元'
    },
    {
        id : 'TZHT0000010',
        money:'199000.00元'
    },
    {
        id : 'TZHT0000022',
        money:'22222000.00元'
    }
]);