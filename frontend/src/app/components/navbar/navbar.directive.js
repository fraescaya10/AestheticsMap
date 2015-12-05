(function() {
  'use strict';

  angular
    .module('frontend')
    .directive('aeNavbar', aeNavbar);

  /** @ngInject */
  function aeNavbar() {
    var directive = {
        restrict: 'E',
        templateUrl: 'app/components/navbar/navbar.html',
        controller: NavbarController,
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController(moment) {
        var vm = this;

        // "vm.creation" is avaible by directive option "bindToController: true"
        vm.fechaActual = moment().format('DD/MM/YYYY');
        console.log(vm.fechaActual);
    }
  }

})();
