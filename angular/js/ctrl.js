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
    vm.dataThree = [vm.data[0],vm.data[1],vm.data[2]];//将数组前三位单独遍历展示出来

    vm.detail = false;

    vm.over = function (data) {//鼠标划入
        vm.detail = true;
        vm.data2 = data;
    };
    vm.leave = function () {//鼠标划出
        vm.detail = false;
        vm.data2 = {};
    };

    vm.all = false;//查看所有默认隐藏，点击事件才会让其显示，如下
    vm.allOpen = function () {
        vm.all = true;
    };
    vm.close = function () {
        vm.all = false;
    };

    vm.selected = [];//所有被选取的投资数组
    vm.select = function (e) {//将选取的投资加入数组
        if(vm.selected.indexOf(e) >= 0){//当投资已经被选过时不进行操作
            console.log(vm.selected.indexOf(e));
            console.log(vm.selected);
            return false;
        }
        vm.selected.push(e);
        console.log(vm.selected);
    };

    vm.remove = function (e) {//移除投资
        console.log(e);
        vm.selected.splice(e, 1);
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
        vm.mine = !vm.money? "0.00": vm.money*0.0013;
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

app.controller("freshCtrl",function(){
    var miniRefresh = new MiniRefresh({
        container: '#minirefresh',
        down: {
            callback: function() {
                // 下拉事件
                location.reload();
                miniRefresh.endDownLoading();
            }
        },
        up: {
            isAuto: true,
            callback: function() {
                // 上拉事件

                // 注意，由于默认情况是开启满屏自动加载的，所以请求失败时，请务必endUpLoading(true)，防止无限请求
                miniRefresh.endUpLoading(true);
            }
        }
    });
});

app.controller("backStageCtrl",function ($http,sideBar,$state) {
    var vm = this;
    vm.user = sessionStorage.getItem("user") || "233";
    $http({
        method: 'get',
        url: '/Femo/json/'+vm.user,
        headers:{'Content-Type': 'application/x-www-form-urlencoded'}

    }).then(function successCallback(response) {
        //请求成功的代码
        console.log(response.data);
        vm.sideBar = response.data.fatherModuleList;
        console.log(vm.sideBar);

    }, function errorCallback(response) {
        // 请求失败执行代码
        alert("error");
    });

    vm.admin = function (e) {
      sessionStorage.setItem("user",e);
      $state.reload('backStage');
    };
    // vm.sideBar = sideBar;

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