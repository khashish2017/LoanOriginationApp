(function () {
    'use strict';

    angular.module('los')
        .directive('contactUsCtrl', abc)
 
    function abc() {
        function ContactCtrl($scope) {
            var vm = $scope;
            vm.fm = [];
            vm.QueryType = ["Car Loan Inquiry", "Home Loan Inquiry","Personal Loan Inquiry", "Others"]
            //debugger;
            //vm.FullName = "Contact Reason new";
            vm.fnsubmit = function ()
            {
                vm.submitted = true;
                debugger;
                alert('Submit alert');
                $http.post(vm);
            }
           

        }
        return {
            restrict: 'A',
            template: '<div ng-transclude></div>',
            transclude: true,
            controller: ContactCtrl,
            bindToController: true
        };
    }

    
})();