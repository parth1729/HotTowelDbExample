define(['services/logger', 'services/datacontext'], function (logger, datacontext) {
    var employeesObs = ko.observableArray();

    var vm = {
        activate: activate,
        title: 'Employee View',
        employeesObs: employeesObs,
    };

    return vm;

    //#region Internal Methods
    function activate() {
        logger.log('Employee View Activated', null, 'home', true);
        return datacontext.getEmpoyees(employeesObs);
    }
    //#endregion
});