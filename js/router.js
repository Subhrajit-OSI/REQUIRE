/**
 * Created by snayak on 06-09-2016.
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'views/form1',
    'views/form2'
],function($,_,Backbone,ViewsFactoryForm1,ViewsFactoryForm2){

    //Router Configuration
    var AppRouter = Backbone.Router.extend({
        routes: {
            "form1": "form1",
            "form2": "form2",
            "*any" : "form1"
        },
        form1: function() {
            var viewsFactoryForm1 = new ViewsFactoryForm1();
            viewsFactoryForm1.render();
        },
        form2: function(form) {
            var viewsFactoryForm2 = new ViewsFactoryForm2();
            viewsFactoryForm2.render();
        }
    });

    //Invoke Router
    var initialize = function(){
        var app_router = new AppRouter;
        Backbone.history.start();
    }

    //Return Object
    return {
        initialize:initialize
    }
});
