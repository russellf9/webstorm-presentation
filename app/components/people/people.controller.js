(function () {

    'use strict';

    angular
        .module('myApp.components.people')
        .controller('PeopleController', PeopleController);


    function PeopleController ($log, $scope, personService) {

        var main = this;

        main.people = [];

        main.limit = 3;

        main.addPersonDisabled = false;

        main.removePersonDisabled = false;
        
        main.addPerson = addPerson;

        main.removePerson = removePerson;




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

        function removePerson () {
            main.people.pop();
        }

        // ==== Utility functions ====

        function evaluateButtons() {
            main.addPersonDisabled = (main.people.length > main.limit);
            main.removePersonDisabled = (main.people.length === 0);
        }
    }
})();



