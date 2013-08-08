define(['durandal/system', 'services/logger'],
    function (system, logger) {
        
    



    

    var model = {
       
        configureMetadataStore: configureMetadataStore
        
    };

    return model;

    //#region Internal Methods
    function configureMetadataStore(metadataStore) {
        metadataStore.registerEntityTypeCtor(
            'Employee', function () { this.isPartial = false; }, employeeInitializer);

        log('Validators registered');
    }
    

    function employeeInitializer(employee) {

    }

    

    
    function log(msg, data, showToast) {
        logger.log(msg, data, system.getModuleId(model), showToast);
    }
    //#endregion
});