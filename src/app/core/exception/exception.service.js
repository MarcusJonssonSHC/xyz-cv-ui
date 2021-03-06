(function() {
    'use strict';

    angular
        .module('core.exception')
        .factory('exception', exception);

    function exception(logger) {
        var service = {
            catcher: catcher
        };
        return service;

        function catcher(message) {
            return function(reason) {
                logger.error(message, reason);
            };
        }
    }
})();
