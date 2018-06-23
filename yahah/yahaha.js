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