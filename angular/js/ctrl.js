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

app.controller("buyCtrl",function () {
    var vm = this;

    vm.contract = false;//合同默认消失
    vm.showContract = function () {
        vm.contract = true;
    };//点击合同出现
    vm.close = function () {
        vm.contract = false;
        vm.bottom = false;
    };//点击合同,银行卡选择消失



    vm.mine = "0.00";
    vm.change = function () {
        vm.mine = !vm.money? 0.00: vm.money*0.0013;
        console.log(vm.mine);
    };//计算收益

    vm.bottom = false;
    vm.showBottom = function () {
        vm.bottom = true;
    };//点击下方出现银行卡选择按钮
    vm.stop = function (e) {
        // event.stopPropagation();//阻止事件冒泡
        vm.card = e;

    };
});

app.controller("backStageCtrl",function (sideBar,$state) {
    var vm = this;

    vm.sideBar = sideBar;

    vm.titleIndex = function (e) {
        vm.sideBarTitleIndex = (vm.sideBarTitleIndex === e)? undefined : e;
    };
    //一级菜单
    vm.content = function (e,index) {
        vm.sideBarContent = e;
        sessionStorage.setItem("title",index);
        sessionStorage.setItem("content",e);
    };
    //二级菜单
    vm.sideBarContent = sessionStorage.getItem("content");
    vm.sideBarTitleIndex = sessionStorage.getItem("title");
    //刷新也保持高亮

    vm.clean = function () {
        sessionStorage.clear();
        $state.reload('backStage');
    }
});


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

app.constant('sideBar',[
    {
        sideBarTitle : '业务管理',
        sideBarContent : [
            {sideBarName : '用户管理', url:'.company' },
            {sideBarName : '产品管理', url:'.company' },
            {sideBarName : '债权管理', url:'.job' }
        ]
    },
    {
        sideBarTitle : '运营管理',
        sideBarContent : [
            {sideBarName : 'banner图', url:'.articleList' },
            {sideBarName : '鼎力推荐', url:'.articleList' },
            {sideBarName : '消息管理', url:'.articleList' },
            {sideBarName : '意见反馈', url:'.articleList' },
        ]
    },
    {
        sideBarTitle : '后台管理',
        sideBarContent : [
            {sideBarName : '账号管理', url:'.articleList' },
            {sideBarName : '密码管理', url:'.articleList' },
            {sideBarName : '模块管理', url:'.articleList' },
            {sideBarName : '角色管理', url:'.articleList' },
        ]
    },
]);