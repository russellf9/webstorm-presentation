(function () {

    'use strict';


    /**
     *
     * @author russell
     * @date 07/08/2016
     *
     * @name
     * components.person:personService
     *
     * @param {obj} currentName An accessible member
     * @param {function} setValue A function the Factory returns
     * @param {function} getPerson A function the Factory returns
     *
     * // define module requirements
     * @requires components.person.personService
     *
     * // define `imports`
     * @requires personService
     *
     * @description A service which returns the details of a random person
     * Trying to follow the style guidelines from: {https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#angular-docs Angular 1 Style Guide <br>
     *
     */

    var module = angular.module('components.person.personService', ['api.person']);

    module.factory('personService', personService);


    function personService ($q,
                            personApi) {

        var service = {};

        service.getPerson = _getPerson;

        return service;

        // ==== IMPLEMENTATION OF FUNCTIONS ====

        // Returns a random person
        function _getPerson () {
            return personApi.getPerson()
                .then(function (response) {
                    if (typeof response.data === 'object') {
                        return response.data.results[0];
                    } else {
                        // invalid response
                        return $q.reject(response.data);
                    }
                })
                .catch(function (response) {
                    // something went wrong
                    return $q.reject(response.data);
                });
        }
    }
}());


