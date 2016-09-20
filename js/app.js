/**
 * Created by snayak on 06-09-2016.
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'router'
    ],function($,_,Backbone,AppRouter){

    //Initialize Router
    var initialize = function(){
        AppRouter.initialize();
    }

    //Return Object
    return {
        initialize:initialize
    }
});