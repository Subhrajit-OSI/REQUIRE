define([
    'jquery',
    'underscore',
    'backbone',
    '../models/ToDoModel'
], function($, _, Backbone,ProjectModel){

    //Initialize Collection
    var ProjectCollection = Backbone.Collection.extend({
        model:ProjectModel
    });

    //Return Collection Object
    return ProjectCollection;
});
