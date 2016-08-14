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

            var person = personService.getPerson();


            main.people.push(person);
            // personService.getPerson()
            //     .then(function (data) {
            //         main.people.push(data);
            //     })
            //     .catch(function (error) {
            //         $log.error('error', error);
            //     })
            //     .finally(function () {
            //         evaluateButtons();
            //     });

            evaluateButtons();
        }

        // transfers person to another list
        // (and makes them selected)
        function pickPerson () {
            // if (!person) {
            var person = removePerson();
            person.selected = true;
            // }
            main.pickedPeople.push(person);
            evaluateButtons();
        }

        function deselectPerson (person) {
            person.selected = false;
        }

        function removePerson () {
            var person = main.people.pop();
            evaluateButtons();
            return person;
        }

        // Toggles the `like` icon
        // Swaps the Person to the correct list
        function togglePerson (person) {
            if (!person) {
                $log.error('No person has been defined!');
                return;
            }

            // If the person is just about to be selected we add to the `picked people`
            // But first we remove them from the `main.people` array
            if (!person.selected) {
                removeItemFromCollection(person, main.people);
                main.pickedPeople.push(person);
            } else {
                // Here we are returning the person to the 'main` list
                removeItemFromCollection(person, main.pickedPeople);
                main.people.push(person);
            }

            person.selected = !person.selected;

            evaluateButtons();
        }


        // ==== Utility functions ====


        function evaluateButtons () {
            main.addPersonDisabled = main.people.length > main.limit;
            main.removePersonDisabled = main.people.length === 0;
        }

        // removes an item from the supplied Array
        function removeItemFromCollection (item, collection) {
            var index = collection.indexOf(item);
            if (index < 0) {
                $log.error('Item not found!');
                return;
            }
            collection.splice(index, 1);
        }
    }
})();



