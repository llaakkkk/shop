/**
 * Created by lak on 15.02.16.
 */
(function(){
    "use strict";

    angular.module('app.config').config( function($mdThemingProvider) {
        /* For more info, visit https://material.angularjs.org/#/Theming/01_introduction */
        $mdThemingProvider.theme('default')
            .primaryPalette('teal')
            .accentPalette('cyan')
            .warnPalette('red');
    });

})();