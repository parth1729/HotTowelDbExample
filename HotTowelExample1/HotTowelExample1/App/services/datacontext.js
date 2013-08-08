define([
    'durandal/system',
    'services/model',
    'services/logger'],
    function (system,model,logger) {
        var EntityQuery = breeze.EntityQuery;
        var manager = configureBreezeManager();
        
        
        var getEmpoyees = function (employeeObservable) {

            var query = EntityQuery.from('GetEmployees');
                
                

            return manager.executeQuery(query)
                .then(querySucceeded)
                .fail(queryFailed);

            function querySucceeded(data) {
                if (employeeObservable) {
                    employeeObservable(data.results);
                }
                log('Retrieved [GetResources] from remote data source',
                    data, true);
            }
        };

        

        var datacontext = {
            getEmpoyees: getEmpoyees
        };



        return datacontext;

        //#region Internal methods        

        
        

        function queryFailed(error) {
            var msg = 'Error retrieving data. ' + error.message;
            logError(msg, error);
            throw error;
        }

        function configureBreezeManager() {
            breeze.NamingConvention.camelCase.setAsDefault();
            var mgr = new breeze.EntityManager('api/HotTowelData/');
            model.configureMetadataStore(mgr.metadataStore);
            return mgr;
        }

        
        
        


        function log(msg, data, showToast) {
            logger.log(msg, data, system.getModuleId(datacontext), showToast);
        }

        function logError(msg, error) {
            logger.logError(msg, error, system.getModuleId(datacontext), true);
        }
        //#endregion
});