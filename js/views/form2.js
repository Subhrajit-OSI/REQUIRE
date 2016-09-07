define([
	'jquery',
	'underscore',
	'backbone',
	'collections/ToDos'
], function($, _, Backbone,ProjectCollection){
    //Initialize Form 2 View
	var ViewsFactoryForm2 = Backbone.View.extend({
		el: $('#content'),
		render: function(){
            $("h1").text("Form 2");
            var template = _.template($("#tpl-form2").html(),{});
            this.$el.html(template);
            this.$el.find("#addOne").focus();
            this.delegateEvents();
            return this;
		},
        events: {
            'click a#complete': 'save'
        },
        save: function(e) {
            var address_1 = this.$el.find("#addOne").val();
            if(!address_1){
                this.$el.find("#addOne").focus();
                e.preventDefault();
            }
            if(app.firstname && app.lastname && address_1){
                app.ProjectCollectionObj.add({firstname:app.firstname,lastname:app.lastname,address1:this.$el.find("#addOne").val(),address2:this.$el.find("#addTwo").val(),city:this.$el.find("#city").val(),state:this.$el.find("#state").val(),zipcode:this.$el.find("#zipcode").val()});
                displayCollectionContents("Data - ",app.ProjectCollectionObj);
                app.firstname =''; app.lastname='';
            }
        }
	});
	// Our module now returns our view
	return ViewsFactoryForm2;
});

/*
 * Method - To Convert to JSON string
 * Input  - Custom String, Object
 * Return - null
 */
function displayCollectionContents(string, collection){console.log(collection)
    var data_string = JSON.stringify(collection.toJSON());
    console.log(string+" "+data_string);
    $("#footer").html(data_string);
}