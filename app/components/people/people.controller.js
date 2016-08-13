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

        main.deselectPerson = deselectPerson;

        main.togglePerson = togglePerson;


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
        // (and makes them selected)
        function pickPerson ( ) {
            // if (!person) {
                var person = removePerson();
            person.selected = true;
            // }
            main.pickedPeople.push(person);
            evaluateButtons();
        }

        function deselectPerson( person ) {
            person.selected = false;
        }

        function removePerson () {
            var person = main.people.pop();
            evaluateButtons();
            return person;
        }


        function togglePerson( person ) {
            console.log('toggle person ', person);
            if (!person ) {
                $log.error('No person has been defined!');
                return;
            }
            person.selected =! person.selected;
        }



        // ==== Utility functions ====

        function evaluateButtons () {
            main.addPersonDisabled = (main.people.length > main.limit);
            main.removePersonDisabled = (main.people.length === 0) ? true : false;
        }
    }
})();



