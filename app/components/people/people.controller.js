(function () {

    'use strict';

    angular
        .module('myApp.components.people')
        .controller('PeopleController', PeopleController);


    function PeopleController ($log, $scope, personService) {

        var main = this;

        main.people = [];

        main.addPerson = addPerson;


        // ==== Function definitions ====

        function addPerson () {

            personService.getPerson()
                .then(function (data) {
                    main.people.push(data);
                })
                .catch(function (error) {
                    $log.error('error', error);
                })
                .finally(function () {
                });
        }
    }
})();



