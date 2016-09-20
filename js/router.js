/**
 * Created by snayak on 06-09-2016.
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'views/ToDoForm1View',
    'views/ToDoForm2View'
],function($,_,Backbone,ViewsFactoryForm1,ViewsFactoryForm2){
    var formData={};

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
        form2: function(formData) {
            var viewsFactoryForm2 = new ViewsFactoryForm2(formData);
            viewsFactoryForm2.render();
        }
    });

    //Router Invoke
    var initialize = function(){
        var app_router = new AppRouter;
        Backbone.history.start();
    }

    //Return Object
    return {
        initialize:initialize
    }
});

/*
function responseFunction(data) {
    console.log(data)
}*/
