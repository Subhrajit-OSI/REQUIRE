define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone){
    //Initialize Model
    var ProjectModel = Backbone.Model.extend({
        defaults:{
            firstname:"",
            lastname:"",
            address1:"",
            address2:"",
            city:"",
            state:"",
            zipcode:""
        }
    });

    return ProjectModel;
});
