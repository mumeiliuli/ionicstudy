angular.module('mine', ['ionic'])
.controller('MineCtrl', function ($scope) {
    $scope.list = new Array();
    $scope.changeGreade = function (index) {
        var rows = 0,cols=0,mineNum=0;
        switch (index) {
            case 1:
                rows = 8;
                cols = 8;
                mineNum = 20;
                break;
            case 2:
                rows = 10;
                cols = 10;
                mineNum = 40;
                break;
            case 3:
                rows = 16;
                cols = 10;
                mineNum = 60;
                break;
        }
        for (var r = 0; r < rows; r++) {
            for (var c = 0; c < cols; c++) {
                $scope.list[r][c] = 0;
            }
        }

    }

})