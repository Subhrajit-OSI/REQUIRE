define([
    'jquery',
    'underscore',
    'backbone',
    'models/ToDo'
], function($, _, Backbone,ProjectModel){
    //Initialize Collection
    var ProjectCollection = Backbone.Collection.extend({
        model:ProjectModel
    });

    return ProjectCollection;
});
