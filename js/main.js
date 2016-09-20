/**
 * Created by snayak on 06-09-2016.
 */
require.config({
    //Library Paths
    paths:{
        jquery:'libs/jquery/jquery-3.1.0.min',
        underscore:'libs/underscore/underscore-min',
        backbone:'libs/backbone/backbone-min',
        handlebars:'libs/handlebars/handlebars-v4.0.5'
    }
});

//Initialize Application
require(['app'],function(App){
    App.initialize();
});

//GLobal Variable
var app={};


/*
 * Method - To Convert to JSON string
 * Input  - Custom String, Object
 * Return - null
 */
function displayCollectionContents(string, collection){
    var data_string = JSON.stringify(collection.toJSON());
    console.log(string+" "+data_string);
    $("#footer").html(data_string);
}