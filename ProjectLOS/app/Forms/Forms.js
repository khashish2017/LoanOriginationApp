(function () {
    'use strict';

    angular.module('los')
        .directive('contactUsCtrl', abc)
 
    function abc() {        function ContactCtrl($scope) {            var vm = $scope;            vm.ContactReason = "Contact Reason new";            vm.fnsubmit = function ()
            {
                debugger;
                alert('Submit alert');            }                   }        return {            restrict: 'A',            template: '<div ng-transclude></div>',            transclude: true,            controller: ContactCtrl,            bindToController: true        };    }

    
})();