(function() {
  'use strict';

  angular
    .module('frontend')
    .directive('aeFooter', aeFooter);

  /** @ngInject */
  function aeFooter() {
    var directive = {
        restrict: 'E',
        templateUrl: 'app/components/footer/footer.html',
        controller: FooterController,
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;

    /** @ngInject */
    function FooterController(moment) {
        var vm = this;
        vm.copyright = 'Copyright ' + moment().get('year');
    }
  }

})();
