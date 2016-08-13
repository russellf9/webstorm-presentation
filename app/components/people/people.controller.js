(function () {

    'use strict';

    angular
        .module('myApp.components.people')
        .controller('PeopleController', PeopleController);


    function PeopleController ($log, $scope, personService) {

        var main = this;


        main.people = [];

        main.pickedPeople = [];


        main.limit = 3;

        main.addPersonDisabled = false;

        main.removePersonDisabled = false;


        main.addPerson = addPerson;

        main.removePerson = removePerson;

        main.pickPerson = pickPerson;


        evaluateButtons();


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
                    evaluateButtons();
                });
        }

        // transfers person to another list
        function pickPerson ( person ) {
            // if (!person) {
                var person = removePerson();
            // }
            main.pickedPeople.push(person);
            evaluateButtons();
        }

        function removePerson () {
            var person = main.people.pop();
            evaluateButtons();
            return person;
        }

        // ==== Utility functions ====

        function evaluateButtons () {
            main.addPersonDisabled = (main.people.length > main.limit);
            main.removePersonDisabled = (main.people.length === 0) ? true : false;
        }
    }
})();



