(function () {

    'use strict';


    /**
     *
     * @author russell
     * @date 07/08/2016
     *
     * @name
     * myApp.components.person:person
     *
     * @param {data} data An data two-way binding
     * @param {function} updateFn An output function
     *
     * @description Provides the UI to display a person
     *
     * Trying to follow the style guidelines from: {https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#angular-docs Angular 1 Style Guide <br>
     * @example
        <pre>
         <person
            person='data'
            update-fn='update'>
         <person/>
        <pre>
     *
     */

    var module;

    try {
        module = angular.module('myApp.components.person');
    } catch (err) {
        module = angular.module('myApp.components.person', [])
    }

    module.directive('person', person);

    function personController($log) {

    }

    function person() {
        return {
            restrict: 'AE',
            scope: {
                data: '=',
                updateFn: '&'
            },
            templateUrl: 'components/person/person.html',
            controller: personController
        }
    }
}());
