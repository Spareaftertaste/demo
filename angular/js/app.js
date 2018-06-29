
var app = angular.module("demo",["ngAnimate","ui.router"]);
app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/login");
    $stateProvider
        .state('login',{
            url:"/login",
            templateUrl: 'html/login.html',
            controller: 'loginCtrl',
            controllerAs:'vm'

        })
        .state('matching',{
            url:"/matching",
            templateUrl: 'html/matching.html',
            controller: 'matchingCtrl',
            controllerAs:'vm'

        })
        .state('buy',{
            url:"/buy",
            templateUrl: 'html/buy.html',
            controller: 'buyCtrl',
            controllerAs:'vm'

        })
        .state('backStage',{
            url:"/backStage",
            templateUrl: 'html/backStage.html',
            controller: 'backStageCtrl',
            controllerAs:'vm'

        })
        .state('main',{
            url:"/main",
            templateUrl: 'html/main.html',
            controller: 'mainCtrl',
            controllerAs:'vm'

        })
        .state('main.content',{
            url:"/content",
            templateUrl:'html/content.html',
            controller:'contentCtrl',
            controllerAs:'vm'
        })
});
//
// $rootScope.$on('$stateChangeStart',function(event, toState, toParams, fromState, fromParams){
//     if(toState.name=='login')return;// 如果是进入登录界面则允许
//     // 如果用户不存在
//     if(!$rootScope.user || !$rootScope.user.token){
//         event.preventDefault();// 取消默认跳转行为
//         $state.go("login",{from:fromState.name,w:'notLogin'});//跳转到登录界面
//     }
// });
//
// app.factory('UserInterceptor', ["$q","$rootScope",function ($q,$rootScope) {
//     return {
//         request:function(config){
//             config.headers["TOKEN"] = $rootScope.user.token;
//             return config;
//         },
//         responseError: function (response) {
//             var data = response.data;
//             // 判断错误码，如果是未登录
//             if(data["errorCode"] == "500999"){
//                 // 清空用户本地token存储的信息，如果
//                 $rootScope.user = {token:""};
//                 // 全局事件，方便其他view获取该事件，并给以相应的提示或处理
//                 $rootScope.$emit("userIntercepted","notLogin",response);
//             }
//             // 如果是登录超时
//             if(data["errorCode"] == "500998"){
//                 $rootScope.$emit("userIntercepted","sessionOut",response);
//             }
//             return $q.reject(response);
//         }
//     };
// }]);
//
// app.config(function ($httpProvider) {
//     $httpProvider.interceptors.push('UserInterceptor');
// });
