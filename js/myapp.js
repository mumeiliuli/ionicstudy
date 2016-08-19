angular.module('todo', ['ionic'])

.controller('TodoCtrl', function ($scope, $ionicModal) {
    $scope.tasks = [
      { title: 'webapp教程' },
      { title: '菜鸟教程' }
    ];
    // 创建并载入模型
    $ionicModal.fromTemplateUrl('new-task.html', function (modal) {
        $scope.taskModal = modal;
    }, {
        scope: $scope,
        animation: 'slide-in-up'
    });
    // 打开新增的模型
    $scope.newTask = function () {
        $scope.taskModal.show();
    };
    // 表单提交时调用
    $scope.createTask = function (task) {
        $scope.tasks.push({
            title: task.title
        });
        $scope.taskModal.hide();
        task.title = "";
    };
    // 关闭新增的模型
    $scope.closeNewTask = function () {
        $scope.taskModal.hide();
    };
});