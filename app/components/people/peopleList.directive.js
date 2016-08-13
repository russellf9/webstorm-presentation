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
     * @description
     * Provides a UI to hold a list of people
     *
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

    function peopleListController ($log) {

        var peopleList = this;

        peopleList.removePerson = removePerson;

        peopleList.deselectPerson = deselectPerson;

        peopleList.toggleSelectPerson = toggleSelectPerson;

        function removePerson () {
            console.log('B removePerson');

            if (typeof peopleList.removeFn == 'function') {
                peopleList.removeFn()();
            }
        }

        function deselectPerson( person ) {
            if (typeof peopleList.deselectFn == 'function') {
                peopleList.deselectFn()(person);
            }
        }

        function toggleSelectPerson( person ) {
            console.log('peopleList toggle ', person)
            if (typeof peopleList.toggleSelectFn == 'function') {
                peopleList.toggleSelectFn()(person);
            }
        }

    }

    function peopleList () {
        return {
            restrict: 'AE',
            scope: {
                people: '=?',
                deselectFn: '&',
                toggleSelectFn: '&',
                removeFn: '&'
            },
            templateUrl: 'components/people/people_list.html',
            controller: peopleListController,
            controllerAs: 'peopleList',
            bindToController: true // because the scope is isolated
        }
    }
}());





