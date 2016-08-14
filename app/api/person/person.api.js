(function () {

    'use strict';


    /**
     *
     * @author russell
     * @date 07/08/2016
     *
     * @name
     * api.person:personApi
     *
     * @param {function} getPerson A function the Factory returns
     *
     * * // define `imports`
     * @requires $http
     *
     * @description A JS file responsible for the Person API
     * Trying to follow the style guidelines from: {https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#angular-docs Angular 1 Style Guide <br>
     *
     */

    // Ideally each Directive will have a unique package, so this try, catch won`t be required <br>
    // Each package needs to be defined in their own module <br>
    angular.module('api.person', [])
        .factory('personApi', personApi);


    function personApi ($http) {

        // ==== ACCESSIBLE MEMBERS ====

        var service = {};

        service.getPerson = _getPerson;

        return service;

        // ==== IMPLEMENTATION OF FUNCTIONS ====

        // returns a Promise for a random person
        function _getPerson () {


            return $http.get('http://api.randomuser.me');
        }
    }
}());


