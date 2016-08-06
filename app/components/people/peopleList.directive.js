(function () {

    'use strict';


    /**
     *
     * @author russell
     * @date 06/08/2016
     *
     * @name
     * myApp:peopleList
     *
     * @param {data} input An input two-way binding
     * @param {function} updateFn An output function
     * 
     * @description Provides a UI to hold a list of people
     * Trying to follow the style guidelines from: {https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#angular-docs Angular 1 Style Guide <br>
     * @example
        <pre>
         <people-list
            input='data'
            update-fn='update'>
         <people-list/>
        <pre>
     *
     */

    var module = angular.module('myApp.people.list', []);

    module.directive('peopleList', peopleList);

    function peopleListController($log) {
    
        function _callUpdate() {
            if (typeof $scope.updateFn == 'function') {
                $scope.updateFn()();
            } else {
                $log.error('An update function is required!');
            }
        }
    }

    function peopleList() {
        return {
            restrict: 'AE',
            scope: {
                input: '=?',
                updateFn: '&?'
            },
            templateUrl: 'components/people/people_list.html',
            controller: peopleListController
        }
    }
}());
