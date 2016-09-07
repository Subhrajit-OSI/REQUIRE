/**
 * Created by snayak on 06-09-2016.
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'router',
    'collections/ToDos'
    ],function($,_,Backbone,AppRouter,ProjectCollection){

    //Initialize Router
    var initialize = function(){
        AppRouter.initialize();
        app.ProjectCollectionObj = new ProjectCollection();
    }

    //Return Object
    return {
        initialize:initialize
    }
});